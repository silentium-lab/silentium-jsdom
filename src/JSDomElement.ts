import {
  patron,
  sourceAll,
  sourceChangeable,
  SourceType,
  value,
} from "silentium";

/**
 * Helps to get HTMLElement from html string
 */
export const jsDomElement = (
  documentSrc: SourceType<Document>,
  htmlSrc: SourceType<string>,
) => {
  const result = sourceChangeable<HTMLElement>();
  const all = sourceAll<[Document, string]>([documentSrc, htmlSrc]);

  value(
    all,
    patron(([document, html]) => {
      const div = document.createElement("div");
      div.innerHTML = html;
      result.give(div.children[0] as HTMLElement);
    }),
  );

  return result;
};
