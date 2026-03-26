# cleanup
rm -rf ./allure-results/*
rm -rf ./allure-report
rm -rf ./test-results
rm -rf ./playwright-report

clear

USER_EMAIL=$(security find-generic-password -a "$USER" -s "QS_TESTING_EMAIL" -w)
# API_TOKEN=$(security find-generic-password -a "$USER" -s "QS_ALLURE_JIRA_TOKEN" -w)

# security delete-generic-password -a "$USER" -s "QS_ALLURE_JIRA_CREDS"
# echo "$(printf '%s' "${USER_EMAIL}:${API_TOKEN}" | openssl base64 -A)"
# security add-generic-password -a "$USER" -s "QS_ALLURE_JIRA_CREDS" -w "$(printf '%s' "${USER_EMAIL}:${API_TOKEN}" | openssl base64 -A)"

# echo -n "${USER_EMAIL}:${API_TOKEN}" | base64

printf '%s' "${USER_EMAIL}:${API_TOKEN}" | openssl base64 -A

export ALLURE_JIRA_ISSUE=ARFJ-1
export ALLURE_JIRA_WEBHOOK=$(security find-generic-password -a "$USER" -s "QS_ALLURE_JIRA_WEBHOOK" -w)
export ALLURE_JIRA_TOKEN=$(security find-generic-password -a "$USER" -s "QS_ALLURE_JIRA_CREDS" -w)





pnpm allure run --config=./allurerc.mjs -- pnpm test