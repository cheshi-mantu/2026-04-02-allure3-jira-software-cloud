## Installation

Use your preferred package manager to install the package:

```shell
npm add @allurereport/plugin-jira
yarn add @allurereport/plugin-jira
pnpm add @allurereport/plugin-jira
```

## Options

The plugin accepts the following options:

| Option          | Description                                          | Type      | Environment Variable         |
| --------------- | ---------------------------------------------------- | --------- | ---------------------------- |
| `webhook`       | Allure Jira Integration Webhook URL                  | `string`  | `ALLURE_JIRA_WEBHOOK`        |
| `token`         | Generated Atlassian API token                        | `string`  | `ALLURE_JIRA_TOKEN`          |
| `issue`         | Jira issue to link report to                         | `string`  | `ALLURE_JIRA_ISSUE`          |
| `uploadReport`  | Whether to upload the report to specified jira issue | `boolean` | `ALLURE_JIRA_UPLOAD_REPORT`  |
| `uploadResults` | Whether to upload the test results to linked issues  | `boolean` | `ALLURE_JIRA_UPLOAD_RESULTS` |

**Note:** Any values set in your `allurerc.mjs` configuration file will take precedence over values defined in environment variables.

### Token in Jira profile

1. Navigate to [Atlassian Account > Security > API Tokens](https://id.atlassian.com/manage/api-tokens).
2. Click the "Create API token with scopes" button.
3. Enter a name for your token and set an expiration date.
4. Select "Jira" as the API token application.
5. Search for and enable the `read:jira-user` scope.
6. Save the token and copy it to your clipboard.
7. Create a string in the format `useremail:api_token`, where `useremail` is your Jira account email and `api_token` is the token you just created. Then, encode this string using BASE64.





pnpm allure jira clear --token $ALLURE_JIRA_TOKEN --webhook ALLURE_JIRA_WEBHOOK --issue ARFJ-1 --results --reports




## install deps

```shell
pnpm install --frozen-lockfile

pnpm exec playwright install

pnpm install allure
```

## Run tests

```shell
pnpm allure run --config=./allurerc.mjs -- pnpm test

```

## open report

```shell
pnpm allure open
```

## Installing plugins

### Log

#### Add

```shell
pnpm add @allurereport/plugin-log
```

#### Run

```shell
allure log --config=./allurerc.mjs allure-results
```

### CSV

#### Add

```shell
pnpm add @allurereport/plugin-csv
```

#### Run

```shell
allure csv --config=./allurerc.mjs allure-results
```

### Jira

#### export creds

```shell
export ALLURE_JIRA_TOKEN=$(security find-generic-password -a "$USER" -s "ALLURE_JIRA_TOKEN" -w)
export ALLURE_JIRA_WEBHOOK=$(security find-generic-password -a "$USER" -s "ALLURE_JIRA_WEBHOOK" -w)
```

#### Add an issue

The execution of the tests

```shell
pnpm allure run --config=./allurerc.mjs -- pnpm test

pnpm allure jira clear --issue ARFJ-3 --reports --results
```

#### Clear results from an issue

```shell
pnpm allure jira clear --issue ARFJ-4 --reports --results
```

#### Open

https://qametasoftware.atlassian.net/browse/ARFJ-3


### Watch

#### Add

```shell
pnpm allure watch ./allure-results

```

#### Run


```shell
```




## Clear reports from Jira

```shell
pnpm allure jira clear --issue AE-3 --reports --results
```


