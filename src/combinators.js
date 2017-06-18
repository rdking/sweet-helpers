'lang sweet.js';
// @flow
import Parser from './parser';
import * as H from './helpers';
import type { Term } from './helpers';

function unsafeProp(prop: string, obj: any): any {
  return obj[prop];
}

export const identifier = Parser.sat(H.isIdentifier, 'identifier');
export const identifierWith = (pred: Term => boolean) => Parser.sat(obj => H.isIdentifier(obj) && pred(unsafeProp('value', H.unwrap(obj))), 'identifier');
export const keyword = Parser.sat(H.isKeyword, 'keyword');
export const keywordWith = (pred: Term => boolean) => Parser.sat(obj => H.isKeyword(obj) && pred(unsafeProp('value', H.unwrap(obj))), 'keyword');
export const punctuator = Parser.sat(H.isPunctuator, 'punctuator');
export const punctuatorWith = (pred: Term => boolean) => Parser.sat(obj => H.isPunctuator(obj) && pred(unsafeProp('value', H.unwrap(obj))), 'punctuator');
export const numeric = Parser.sat(H.isNumericLiteral, 'numeric');
export const numericWith = (pred: Term => boolean) => Parser.sat(obj => H.isNumericLiteral(obj) && pred(unsafeProp('value', H.unwrap(obj))), 'numeric');
export const string = Parser.sat(H.isStringLiteral, 'string');
export const stringWith = (pred: Term => boolean) => Parser.sat(obj => H.isStringLiteral(obj) && pred(unsafeProp('value', H.unwrap(obj))), 'string');
export const templateElement = Parser.sat(H.isTemplateElement, 'templateElement');
export const templateElementWith = (pred: Term => boolean) => Parser.sat(obj => H.isTemplateElement(obj) && pred(unsafeProp('value', H.unwrap(obj))), 'templateElement');
export const template = Parser.sat(H.isTemplate, 'template');
export const templateWith = (pred: Term => boolean) => Parser.sat(obj => H.isTemplate(obj) && pred(unsafeProp('value', H.unwrap(obj))), 'template');
export const regex = Parser.sat(H.isRegExp, 'regex');
export const regexWith = (pred: Term => boolean) => Parser.sat(obj => H.isRegExp(obj) && pred(unsafeProp('value', H.unwrap(obj))), 'regex');