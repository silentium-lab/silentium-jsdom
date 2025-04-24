import * as silentium from 'silentium';
import { SourceType } from 'silentium';

/**
 * Helps to get Document from html string
 */
declare const jsdomDocument: (body?: SourceType<string>) => SourceType<Document>;

/**
 * Helps to get HTMLElement from html string
 */
declare const jsDomElement: (documentSrc: SourceType<Document>, htmlSrc: SourceType<string>) => silentium.SourceChangeableType<HTMLElement>;

export { jsDomElement, jsdomDocument };
