/**
 * Convert ~~text~~ to <s>text</s> for visual title rendering.
 * Keep raw title for meta tags, SEO, RSS — those receive the unprocessed string.
 */
export function renderTitle(title: string): string {
  return title.replace(/~~(.+?)~~/g, "<s>$1</s>");
}
