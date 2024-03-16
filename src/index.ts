
/* IMPORT */

import vscode from 'vscode';
import * as Commands from './commands';

/* MAIN */

const activate = (): void => {

  vscode.commands.registerCommand ( 'kasi.toCamelCase', Commands.toCamelCase );
  vscode.commands.registerCommand ( 'kasi.toConstantCase', Commands.toConstantCase );
  vscode.commands.registerCommand ( 'kasi.toDotCase', Commands.toDotCase );
  vscode.commands.registerCommand ( 'kasi.toKebabCase', Commands.toKebabCase );
  vscode.commands.registerCommand ( 'kasi.toLowerCase', Commands.toLowerCase );
  vscode.commands.registerCommand ( 'kasi.toPascalCase', Commands.toPascalCase );
  vscode.commands.registerCommand ( 'kasi.toPathCase', Commands.toPathCase );
  vscode.commands.registerCommand ( 'kasi.toSnakeCase', Commands.toSnakeCase );
  vscode.commands.registerCommand ( 'kasi.toTitleCase', Commands.toTitleCase );
  vscode.commands.registerCommand ( 'kasi.toUpperCase', Commands.toUpperCase );

};

/* EXPORT */

export {activate};
