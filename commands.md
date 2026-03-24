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


