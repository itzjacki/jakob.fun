import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
  const blog = await getCollection("blog");
  return rss({
    title: "Jakob.fun",
    description:
      "The place where Jakob's silly and serious thoughts coalesce into words roughly biannually",
    site: context.site,
    items: blog
      .filter((post) => !post.data.isDraft)
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishedDate,
        description: post.data.excerpt,
        link: `/blog/${post.id}/`,
      })),
    customData: `<language>en-us</language>`,
  });
}
