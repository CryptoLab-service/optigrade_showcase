import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  experimental: {
    mdxRs: true,
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  // TEMPORARY: Ignore type errors until Next.js fixes the issue
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(nextConfig);
