
/* IMPORT */

import {apply} from 'kasi';
import vscode from 'vscode';
import {alert} from 'vscode-extras';
import type {Casing} from 'kasi';

/* MAIN */

const toCase = ( casing: Casing ): void => {

  const editor = vscode.window.activeTextEditor;

  if ( !editor ) return alert.error ( 'No active text editor found' );

  const {document} = editor;
  const selections = editor.selections.filter ( selection => !selection.isEmpty );

  if ( !selections.length ) return alert.error ( 'No active selections found' );

  editor.edit ( edit => {

    for ( const selection of editor.selections ) {

      const text = document.getText ( selection );
      const textNext = text.replace ( /[^\r\n]+/g, _ => apply ( _, casing ) );

      if ( text === textNext ) continue;

      edit.replace ( selection, textNext );

    }

  });

};

const toCamelCase = (): void => {

  return toCase ( 'camel' );

};

const toConstantCase = (): void => {

  return toCase ( 'constant' );

};

const toDotCase = (): void => {

  return toCase ( 'dot' );

};

const toKebabCase = (): void => {

  return toCase ( 'kebab' );

};

const toLowerCase = (): void => {

  return toCase ( 'lower' );

};

const toPascalCase = (): void => {

  return toCase ( 'pascal' );

};

const toPathCase = (): void => {

  return toCase ( 'path' );

};

const toSnakeCase = (): void => {

  return toCase ( 'snake' );

};

const toTitleCase = (): void => {

  return toCase ( 'title' );

};

const toUpperCase = (): void => {

  return toCase ( 'upper' );

};

/* EXPORT */

export {toCamelCase, toConstantCase, toDotCase, toKebabCase, toLowerCase, toPascalCase, toPathCase, toSnakeCase, toTitleCase, toUpperCase};
