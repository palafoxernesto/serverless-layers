module.exports = {
  runtime: 'python3.7',
  runtimeDir: 'python',
  libraryFolder: 'site-packages',
  packageManager:  'docker',
  dependenciesPath: 'requirements.txt',
  compatibleRuntimes: ["python3.7"],
  copyBeforeInstall: [],
  packageExclude: [
    'package.json',
    'package-lock.json',
    'node_modules/**',
  ]
}

