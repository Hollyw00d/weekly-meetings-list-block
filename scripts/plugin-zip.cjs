const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get plugin configuration from package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const pluginRoot = packageJson.config?.['plugin-root'];
const pluginVersion = packageJson?.['version'];

if (!pluginRoot || !pluginVersion) {
  console.error('Plugin metadata (plugin-root or plugin-ver) is missing in package.json config.');
  process.exit(1);
}

// Run `wp-scripts plugin-zip` to create the initial ZIP file
console.log('Running wp-scripts plugin-zip...');
execSync('wp-scripts plugin-zip', { stdio: 'inherit' });

// Locate the generated ZIP file
const pluginDir = path.basename(process.cwd());
const zipPath = `${pluginDir}.zip`;
if (!fs.existsSync(zipPath)) {
  console.error(`ZIP file not found: ${zipPath}`);
  process.exit(1);
}

// Rename the ZIP file to include the version number
const newZipName = `${pluginDir}.${pluginVersion}.zip`;
fs.renameSync(zipPath, newZipName);

// console.log(`Renamed ZIP file to ${newZipName}`);
