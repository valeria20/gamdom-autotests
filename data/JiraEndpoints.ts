export enum JiraEndpoints {
  ISSUE = "/rest/api/3/issue",
  ISSUE_BY_KEY = "/rest/api/3/issue/{issueKey}",
  ISSUE_COMMENT = "/rest/api/3/issue/{issueKey}/comment",
  CREATE_META = "/rest/api/3/issue/createmeta?projectKeys=DEV&expand=projects.issuetypes",
}
