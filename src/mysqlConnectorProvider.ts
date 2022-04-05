/* eslint-disable @typescript-eslint/naming-convention */
import * as path from "path";
import * as vscode from "vscode";
import { INode } from "./model/INode";
import { Constants } from "./common/constant";
import { IConnection } from "./model/connection";

export class mysqlConnectorProvider implements vscode.TreeDataProvider<INode> {
    public _onDidChangeTreeData: vscode.EventEmitter<INode> = new vscode.EventEmitter<INode>();
    public readonly onDidChangeTreeData: vscode.Event<INode> = this._onDidChangeTreeData.event;

    constructor(private context: vscode.ExtensionContext) {
    }
    getChildren(element?: INode): vscode.ProviderResult<INode[]> {
        throw new Error("Method not implemented.");
    }
    public getTreeItem(element: INode): Promise<vscode.TreeItem> | vscode.TreeItem {
        return element.getTreeItem();
    }

    public async addConnection() {
        const host = await vscode.window.showInputBox({ prompt: "The hostname of the database", placeHolder: "host", ignoreFocusOut: true });
        if (!host) {
            return;
        }

        const user = await vscode.window.showInputBox({ prompt: "The MySQL user to authenticate as", placeHolder: "user", ignoreFocusOut: true });
        if (!user) {
            return;
        }

        const password = await vscode.window.showInputBox({ prompt: "The password of the MySQL user", placeHolder: "password", ignoreFocusOut: true, password: true });
        if (password === undefined) {
            return;
        }

        const port = await vscode.window.showInputBox({ prompt: "The port number to connect to", placeHolder: "port", ignoreFocusOut: true, value: "3306" });
        if (!port) {
            return;
        }

        const certPath = await vscode.window.showInputBox({ prompt: "[Optional] SSL certificate path. Leave empty to ignore", placeHolder: "certificate file path", ignoreFocusOut: true });
        if (certPath === undefined) {
            return;
        }

        let connections = this.context.globalState.get<{ [key: string]: IConnection }>(Constants.GlobalStateMySQLConectionsKey);

        if (!connections) {
            connections = {};
        }

        const id = Math.random();
        connections[id] = {
            host,
            user,
            port,
            certPath,
        };

        if (password) {
            //await Global.keytar.setPassword(Constants.ExtensionId, id, password);
        }
        await this.context.globalState.update(Constants.GlobalStateMySQLConectionsKey, connections);
    }

    public refresh(element: INode): void {
        this._onDidChangeTreeData.fire(element);
    }
}