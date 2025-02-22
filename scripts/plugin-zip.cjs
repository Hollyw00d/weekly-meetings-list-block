const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const scriptGlobals = require('./script-globals.json');

/*
 * Zip WP plugin with steps below:
 * - `npm run plugin-zip` using `@wordpress/scripts`
 * - Rename plugin file name from something like `my-plugin.zip`
 *   to `my-plugin.0.1.0.zip` which shows plugin version name
 * - Make it so that when `my-plugin.0.1.0.zip` is unzipped
 *   a folder named `my-plugin`appears without the version name
 */
function pluginZip() {
  // Get plugin configuration from package.json
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const pluginVersion = packageJson?.['version'];
  const pluginUrl = packageJson.config?.['plugin-url'];
  const pluginRoot = packageJson.config?.['plugin-root'];
  
  if (!pluginVersion || !pluginUrl || !pluginRoot) {
    console.error(`All plugin metadata ('version', 'config[plugin-url]', 'config[plugin-root]') is missing in package.json!`);
    process.exit(1);
  }
  
  // Run `wp-scripts plugin-zip` to create the initial ZIP file
  execSync('wp-scripts plugin-zip', { stdio: 'inherit' });
  
  // Locate the generated ZIP file
  const pluginDir = path.basename(process.cwd());
  const zipPath = `${pluginDir}.zip`;
  if (!fs.existsSync(zipPath)) {
    console.error(`ZIP file not found: ${zipPath}`);
    process.exit(1);
  }
  
  // Rename the ZIP file to include the version number
  const newZipFileName = `${pluginDir}.${pluginVersion}.zip`;
  fs.renameSync(zipPath, newZipFileName);
  const zipFilePath = path.join(process.cwd(), newZipFileName);
  
  try {
    // Load the ZIP file
    const zip = new AdmZip(zipFilePath);
  
    // Extract the names of the files and folders inside the ZIP
    const zipEntries = zip.getEntries();
  
    // Identify if there is a root folder or top-level files
    const folderEntries = zipEntries.filter(entry => entry.isDirectory);
    const fileEntries = zipEntries.filter(entry => !entry.isDirectory);
  
    // If there's no root folder, create one programmatically
    let rootFolderName;
    if (folderEntries.length > 0) {
      rootFolderName = folderEntries[0].entryName; // Assume the first folder is the root
    } else {
      rootFolderName = `${pluginDir}/`; // Create a virtual root folder
      fileEntries.forEach(entry => {
        const newEntryName = `${rootFolderName}${entry.entryName}`;
        entry.entryName = newEntryName;
      });
    }
  
    // Desired folder name inside the ZIP
    const newFolderName = `${pluginDir}`;
  
    // Update the folder structure
    console.log(`\nMore work in progress...`);
    zipEntries.forEach(entry => {
      if (entry.entryName.startsWith(rootFolderName)) {
        const newEntryName = entry.entryName.replace(rootFolderName, `${newFolderName}/`);
        entry.entryName = newEntryName;
      }
    });
  
    // Write the updated ZIP back to the same location
    zip.writeZip(zipFilePath);
  
    // console.log(`\nDone. When '${newZipFileName}' is unzipped, the folder will be named '${newFolderName}' 🎉!`);
    console.log(`\nDone. Zipped folder is renamed to have WordPress plugin version number ('${newZipFileName}') and when it's unzipped you will see a folder named '${newFolderName}'! ${scriptGlobals.emojis['party-popper']}`);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

pluginZip();
