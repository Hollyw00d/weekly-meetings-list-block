const fs = require('fs');
const path = require('path');
const scriptGlobals = require('./script-globals.json');

/*
 * Update `version` entry in package.json to PHP plugin version
 */
function versionUpdate() {
 // Load package.json
 const packageJsonPath = path.resolve(__dirname, '../package.json');
 const packageJson = require(packageJsonPath);
 
 // Resolve the PHP file path
 const pluginRootPath = path.resolve(__dirname, `../${packageJson.config['plugin-root']}`);
 
 try {
     // Read the PHP file content
     const phpFileContent = fs.readFileSync(pluginRootPath, 'utf-8');
 
     // Extract the version number from the PHP file
     const versionMatch = phpFileContent.match(/\*\s*Version:\s*([\d\.]+)/);
     if (!versionMatch || !versionMatch[1]) {
         throw new Error('Version number not found in the PHP file.');
     }
     const phpVersion = versionMatch[1];
 
     // Update the version in package.json if it differs
     if (packageJson.version !== phpVersion) {
         packageJson.version = phpVersion;
 
         // Write the updated package.json back to the file system
         fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
 
         console.log(`Done. Version updated to ${phpVersion} in 'package.json' to match WordPresss plugin version! ${scriptGlobals.emojis['party-popper']}\n`);
     } else {
         console.log(`Done. Version in 'package.json' is already up-to-date to match WordPress plugin version! ${scriptGlobals.emojis['party-popper']}\n`);
     }
 } catch (error) {
     console.error('Error updating version:', error.message);
     process.exit(1);
 }
}

versionUpdate();