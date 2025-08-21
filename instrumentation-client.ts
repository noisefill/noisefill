import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: "/a",
  ui_host: "https://us.posthog.com",
  defaults: "2025-05-24",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
  person_profiles: "identified_only",
});
