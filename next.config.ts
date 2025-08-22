import type { NextConfig } from "next";
import { withPostHogConfig } from "@posthog/nextjs-config";

const nextConfig: NextConfig = withPostHogConfig(
  {
    /* config options here */
    async rewrites() {
      return [
        {
          source: "/a/static/:path*",
          destination: "https://us-assets.i.posthog.com/static/:path*",
        },
        {
          source: "/a/:path*",
          destination: "https://us.i.posthog.com/:path*",
        },
        {
          source: "/a/flags",
          destination: "https://us.i.posthog.com/flags",
        },
      ];
    },
    // This is required to support PostHog trailing slash API requests
    skipTrailingSlashRedirect: true,
  },
  {
    personalApiKey: process.env.POSTHOG_PERSONAL_API_KEY!,
    envId: process.env.POSTHOG_ENV_ID!,
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
  }
);

export default nextConfig;
