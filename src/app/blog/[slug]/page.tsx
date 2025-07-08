// Minimal type definition that matches Next.js expectations
type PageProps = {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

// export async function generateStaticParams() {
//   const posts = getPosts(["src", "app", "blog", "posts"]);
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> { ... }

export default function BlogPage(props: PageProps) {
  // TEMPORARY: Only render a simple div to isolate the error
  return (
    <div>Blog Post</div>
  );
}