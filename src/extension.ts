import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "mysql-vcs" is now active!');

	// This command will prompt a view just to make sure the view system works
	context.subscriptions.push(
		vscode.commands.registerCommand('mysql-vcs.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri);
		})
	);

	// This command will prompt a message just to make sure the IO and message system works
	context.subscriptions.push(
		vscode.commands.registerCommand('mysql-vcs.askQuestion', async() => {
			const answer = await vscode.window.showInformationMessage(
				'How are you',
				'good',
				'bad'
			);

			if (answer === 'bad') {
				vscode.window.showInformationMessage('Sorry to hear that');
			} else {
				vscode.window.showInformationMessage('Nais');
			}
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
