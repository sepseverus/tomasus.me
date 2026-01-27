import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";

const getRelatedPosts = (
  posts: CollectionEntry<"blog">[],
  currentPostId: string,
  category: "Tech" | "Wellbeing",
  limit: number = 3
) => {
  const relatedPosts = getSortedPosts(
    posts.filter(
      post => post.id !== currentPostId && post.data.category === category
    )
  );

  return relatedPosts.slice(0, limit);
};

export default getRelatedPosts;
