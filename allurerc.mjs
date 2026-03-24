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
      jira: {
        options: {
          issue: process.env.ALLURE_JIRA_ISSUE, 
          webhook: process.env.ALLURE_JIRA_WEBHOOK,
          token: process.env.ALLURE_JIRA_TOKEN,
          uploadReport: true,
          uploadResults: true,
        },
      },
    },
  },
  variables: {
    env_variable: "unknown",
    build: process.env.RELEASE_INFO || "local",
  },
  environments: {},
});
