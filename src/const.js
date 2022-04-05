import * as path from 'path';
const VENDOR_FOLDER = '.vscode';

export const CONGIF_FILENAME = 'mysql_config.json';
export const CONFIG_PATH = path.join(VENDOR_FOLDER, CONGIF_FILENAME);


// commands in package.json

export const COMMAND_CONFIG = 'mysql-vcs.config';  // Configuration command
export const COMMAND_UPLOAD_OTR = 'mysql-vcs.uploadotr';  // Upload "On-the-run" command
export const COMMAND_UPLOAD_OTS = 'mysql-vcs.uploadots';  // Upload "On-the-server" command
export const COMMAND_EXECQ = 'mysql-vcs.execq';  // Execute query command
export const COMMAND_EXECSP = 'mysql-vcs.execsp';  // Execute stored procedure command
export const COMMAND_GENERATE_SCRIPT = 'mysql-vcs.generateScript';  // Generate script for command
export const COMMAND_DELETE = 'mysql-vcs.delete';  // Delete table | stored procedure command
export const COMMAND_REFRESH = 'mysql-vcs.refresh';  // Refresh database command