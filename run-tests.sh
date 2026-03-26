# cleanup
rm -rf ./allure-results/*
rm -rf ./allure-report
rm -rf ./test-results
rm -rf ./playwright-report

clear

export ALLURE_JIRA_ISSUE=ARFJ-1
export QS_ALLURE_JIRA_WEBHOOK=$(security find-generic-password -a "$USER" -s "ALLURE_JIRA_WEBHOOK" -w)
export QS_ALLURE_JIRA_TOKEN=$(security find-generic-password -a "$USER" -s "ALLURE_JIRA_TOKEN" -w)

pnpm allure run --config=./allurerc.mjs -- pnpm test