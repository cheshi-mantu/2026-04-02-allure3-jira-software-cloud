import { defaultChartsConfig, defineConfig } from "allure";


export default defineConfig({
  name: "Allure 3 Report Example",
  output: "./allure-report",
  historyPath: "./history.jsonl",
  plugins: {
    awesomeAll: {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Features",
        singleFile: false,
        reportLanguage: "en",
        open: true,
        groupBy: ["feature"],
        charts: chartLayout,
      },
      },
  },
  variables: {
    env_variable: "unknown",
    build: process.env.RELEASE_INFO || "local",
  },
  environments: {},
});
