import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";
import postFilter from "./postFilter";

export interface Tag {
  tag: string;
  tagName: string;
  count: number;
}

const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const filteredPosts = posts.filter(postFilter);

  // Count occurrences of each tag
  const tagCounts = new Map<string, { tagName: string; count: number }>();

  filteredPosts.forEach(post => {
    post.data.tags.forEach(tagName => {
      const tag = slugifyStr(tagName);
      const existing = tagCounts.get(tag);

      if (existing) {
        existing.count++;
      } else {
        tagCounts.set(tag, { tagName, count: 1 });
      }
    });
  });

  // Convert to array and sort by count (descending), then alphabetically
  const tags: Tag[] = Array.from(tagCounts.entries())
    .map(([tag, { tagName, count }]) => ({ tag, tagName, count }))
    .sort((a, b) => {
      // Sort by count descending first
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      // Then alphabetically
      return a.tag.localeCompare(b.tag);
    });

  return tags;
};

export default getUniqueTags;
