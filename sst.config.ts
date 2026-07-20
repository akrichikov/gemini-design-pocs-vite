/// <reference path="./sst-env.d.ts" />

export default $config({
  app(input) {
    return {
      name: "gemini-design-pocs",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.StaticSite("Web", {
      path: ".",
      build: {
        command: "npm run build",
        output: "dist",
      },
      environment: {
        // Add any env vars here
      },
    });
  },
});