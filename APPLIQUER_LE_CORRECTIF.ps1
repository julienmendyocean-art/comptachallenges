# Compta Challenge - Installation du correctif de quiz et PDF du 19 octobre 2026.
# Le programme conserve une sauvegarde hors du depot, ne modifie que les 17 fichiers listes,
# et demande l'autorisation avant de creer un commit et de l'envoyer sur GitHub.
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'

function Stop-WithError([string]$message) { throw $message }
function Find-Git {
    $cmd = Get-Command git.exe -ErrorAction SilentlyContinue
    if ($cmd) { return $cmd.Source }
    $paths = @(
        (Join-Path $env:ProgramFiles 'Git\cmd\git.exe'),
        $(if(${env:ProgramFiles(x86)}){Join-Path ${env:ProgramFiles(x86)} 'Git\cmd\git.exe'}),
        (Join-Path $env:LOCALAPPDATA 'Programs\Git\cmd\git.exe')
    )
    foreach($p in $paths) { if ($p -and (Test-Path -LiteralPath $p)) { return $p } }
    $desktop = Join-Path $env:LOCALAPPDATA 'GitHubDesktop'
    if(Test-Path -LiteralPath $desktop) {
        $apps = @(Get-ChildItem -LiteralPath $desktop -Directory -Filter 'app-*' | Sort-Object Name -Descending)
        foreach ($a in $apps) {
            foreach ($suffix in @('resources\app\git\cmd\git.exe','resources\app\git\bin\git.exe')) {
                $p = Join-Path $a.FullName $suffix
                if (Test-Path -LiteralPath $p) { return $p }
            }
        }
    }
    return $null
}
function Repo-Ok([string]$path) {
    if (-not $path) { return $false }
    return ((Test-Path -LiteralPath $path -PathType Container) -and (Test-Path -LiteralPath (Join-Path $path '.git')))
}
function Find-Repo {
    $docs = [Environment]::GetFolderPath('MyDocuments')
    $dirs = @(
        (Join-Path $docs 'GitHub\comptachallenges'),
        (Join-Path $env:USERPROFILE 'Documents\GitHub\comptachallenges'),
        (Join-Path $env:USERPROFILE 'GitHub\comptachallenges'),
        (Join-Path $env:USERPROFILE 'source\repos\comptachallenges'),
        (Join-Path $env:USERPROFILE 'Desktop\comptachallenges'),
        (Join-Path $env:USERPROFILE 'OneDrive\Documents\GitHub\comptachallenges')
    ) | Select-Object -Unique
    foreach($dir in $dirs) { if(Repo-Ok $dir){ return $dir } }
    Add-Type -AssemblyName System.Windows.Forms
    $chooser = New-Object System.Windows.Forms.FolderBrowserDialog
    $chooser.Description = 'Selectionne le dossier comptachallenges affiche par GitHub Desktop avec Show in Explorer.'
    $chooser.ShowNewFolderButton = $false
    if($chooser.ShowDialog() -ne [System.Windows.Forms.DialogResult]::OK) { Stop-WithError 'Selection annulee. Aucun fichier modifie.' }
    if(-not (Repo-Ok $chooser.SelectedPath)) {
        Stop-WithError 'Ce dossier ne contient pas de depot Git (.git). Dans GitHub Desktop, clique sur Show in Explorer et selectionne ce dossier.'
    }
    return $chooser.SelectedPath
}
function Run-Git([string]$git,[string]$repo,[string[]]$gitArgs) {
    $result = @(& $git -C $repo @gitArgs 2>&1)
    if($LASTEXITCODE -ne 0) { Stop-WithError ('Git a rencontre une erreur pendant : git ' + ($gitArgs -join ' ') + "`n" + ($result -join "`n")) }
    return $result
}
try {
    Write-Host ''
    Write-Host '=== COMPTA CHALLENGE : CORRECTIF PDF + QUIZ ===' -ForegroundColor Cyan
    Write-Host 'Ce correctif contient 17 fichiers : index, application, questions et 14 PDF.'
    $source = Join-Path $PSScriptRoot 'correctif'
    $hashes = Get-Content -LiteralPath (Join-Path $PSScriptRoot 'empreintes_sha256.json') -Raw -Encoding UTF8 | ConvertFrom-Json
    $fileNames = @($hashes.PSObject.Properties.Name)
    if($fileNames.Count -ne 17) { Stop-WithError 'Le paquet ne contient pas exactement 17 fichiers attendus.' }
    foreach($rel in $fileNames) {
        if($rel -notmatch '^(index\.html|app\.js|questions\.json|memos/0[1-7]_memo\.pdf|cartes-mentales/0[1-7]_carte_mentale\.pdf)$') {
            Stop-WithError ('Chemin inattendu dans le correctif : ' + $rel)
        }
        $sourceFile = Join-Path $source ($rel -replace '/', '\')
        if(-not (Test-Path -LiteralPath $sourceFile -PathType Leaf)) { Stop-WithError ('Fichier absent : ' + $rel) }
        $actual = (Get-FileHash -LiteralPath $sourceFile -Algorithm SHA256).Hash.ToLowerInvariant()
        if($actual -ne $hashes.$rel) { Stop-WithError ('Empreinte differente : ' + $rel + '. Aucun fichier modifie.') }
    }
    $git = Find-Git
    if(-not $git) { Stop-WithError 'Git est introuvable. GitHub Desktop doit etre installe. Aucun fichier modifie.' }
    $repo = Find-Repo
    Write-Host ('Depot trouve : ' + $repo) -ForegroundColor Green
    $remote = ((Run-Git $git $repo @('remote','get-url','origin')) -join '').Trim()
    if($remote -notmatch '^(https://github\.com/|git@github\.com:|ssh://git@github\.com/)(?i:julienmendyocean-art/comptachallenges)(\.git)?/?$') {
        Stop-WithError ('Depot GitHub inattendu : ' + $remote + '. Aucun fichier modifie.')
    }
    $branch = ((Run-Git $git $repo @('branch','--show-current')) -join '').Trim()
    if($branch -ne 'main') { Stop-WithError ('Branche actuelle : ' + $branch + '. Il faut main. Aucun fichier modifie.') }
    $commit = ((Run-Git $git $repo @('rev-parse','--short=7','HEAD')) -join '').Trim()
    if($commit -ne '0913725') {
        Stop-WithError ('La version actuelle est ' + $commit + ' et non 0913725. Arret pour ne pas ecraser de nouveaux travaux.')
    }
    $pending = @(Run-Git $git $repo @('status','--porcelain')) | Where-Object { -not [string]::IsNullOrWhiteSpace($_) }
    if($pending.Count -gt 0) {
        Stop-WithError ('GitHub Desktop contient deja des changements locaux. Controle-les avant de relancer. ' + ($pending -join '; '))
    }
    Write-Host 'Controle Git : branche main, bon depot, aucun changement local.' -ForegroundColor Green
    $answer = Read-Host 'Installer les 17 fichiers avec sauvegarde prealable ? (O/N)'
    if($answer.Trim().ToUpperInvariant() -ne 'O') {
        Write-Host 'Installation annulee. Aucun fichier modifie.'
        exit 0
    }
    $doc = [Environment]::GetFolderPath('MyDocuments')
    $stamp = Get-Date -Format 'yyyyMMdd_HHmmss'
    $backupDir = Join-Path $doc ('ComptaChallenge-sauvegardes\' + $stamp)
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
    $replaced = 0
    foreach($rel in $fileNames) {
        $relwin = $rel -replace '/', '\'
        $dest = Join-Path $repo $relwin
        $old = Join-Path $backupDir $relwin
        if(Test-Path -LiteralPath $dest -PathType Leaf) {
            New-Item -ItemType Directory -Path (Split-Path -Parent $old) -Force | Out-Null
            Copy-Item -LiteralPath $dest -Destination $old -Force
            $replaced++
        }
    }
    # Chaque fichier de destination est copie seulement apres la sauvegarde de tous les anciens fichiers.
    foreach($rel in $fileNames) {
        $relwin = $rel -replace '/', '\'
        $dest = Join-Path $repo $relwin
        New-Item -ItemType Directory -Path (Split-Path -Parent $dest) -Force | Out-Null
        Copy-Item -LiteralPath (Join-Path $source $relwin) -Destination $dest -Force
    }
    Write-Host ('Fichiers installes : ' + $fileNames.Count + '. Anciens fichiers sauvegardes : ' + $replaced) -ForegroundColor Green
    Write-Host ('Sauvegarde disponible dans : ' + $backupDir)
    $changed = @(Run-Git $git $repo @('status','--short')) | Where-Object { -not [string]::IsNullOrWhiteSpace($_) }
    if($changed.Count -eq 0) {
        Write-Host 'Git ne voit aucune difference : ce correctif est deja present.'
        exit 0
    }
    Write-Host ''
    Write-Host 'Modifications detectees par Git :' -ForegroundColor Cyan
    $changed | ForEach-Object { Write-Host $_ }
    Write-Host ''
    Write-Host "Aucune nouvelle publication Netlify n'a encore ete demandee."
    $publish = Read-Host 'Creer le commit et envoyer sur GitHub maintenant ? (O/N)'
    if($publish.Trim().ToUpperInvariant() -ne 'O') {
        Write-Host 'Correctif applique localement. Ouvre GitHub Desktop : Commit to main, puis Push origin.'
        exit 0
    }
    $gitAddArgs = @('add','--') + @($fileNames | ForEach-Object { $_ -replace '\\','/' })
    [void](Run-Git $git $repo $gitAddArgs)
    [void](Run-Git $git $repo @('commit','-m','Correction quiz 3 niveaux et fiches PDF CA3'))
    Write-Host 'Commit enregistre. Envoi en cours...' -ForegroundColor Yellow
    try {
        [void](Run-Git $git $repo @('push','origin','main'))
        Write-Host 'ENVOI GITHUB TERMINE. Consulte Netlify > Deploys.' -ForegroundColor Green
    } catch {
        Write-Host 'Le commit existe mais le push a echoue. Dans GitHub Desktop, clique sur Push origin.' -ForegroundColor Yellow
        Write-Host $_.Exception.Message
    }
}
catch {
    Write-Host ''
    Write-Host 'ARRET / PROBLEME : ' -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host "Aucun deploiement n'a ete lance par ce message."
    exit 1
}
