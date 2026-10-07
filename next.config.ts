import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/academylaunch", destination: "/rsvp", permanent: true },
      { source: "/academylaunch/calendar", destination: "/rsvp/calendar", permanent: true }
    ];
  }
};

export default nextConfig;
