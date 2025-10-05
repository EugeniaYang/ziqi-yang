import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  // Optional: add remark/rehype plugins here
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  // Your existing config
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"], // 👈 add md/mdx here
};

export default withMDX(nextConfig);
