const { devices, defineConfig } = require("@playwright/test");
import os from 'os';


export default defineConfig({
  testDir: "./test",
  reporter: [
    ["list"],
    ["html", { outputFolder: "./playwright-report", open: "never" }],
    [
      "allure-playwright",
      {
        resultsDir: "./allure-results",
        links: {
          issue: {
            urlTemplate: "https://qametasoftware.atlassian.net/browse/%s",
          },
        },
        environmentInfo: {
          node_version: process.version,
          os: os.platform(),
          os_arch: os.arch()
        },
      },
    ],
  ],
});
