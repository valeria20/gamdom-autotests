import { APIRequestContext, APIResponse } from "@playwright/test";
import { JiraEndpoints } from "../data/JiraEndpoints"

export class JiraIssuesApiClient {
  constructor(private readonly api: APIRequestContext) {}

  getCreateMeta(): Promise<APIResponse> {
    return this.api.get(JiraEndpoints.CREATE_META);
  }

  createIssue(summary: string, issueTypeId: string): Promise<APIResponse> {
    return this.api.post(JiraEndpoints.ISSUE, {
      data: {
        fields: {
          project: { key: "DEV" },
          summary,
          issuetype: { id: issueTypeId }
        }
      }
    });
  }

  getIssue(issueKey: string): Promise<APIResponse> {
    return this.api.get(
      JiraEndpoints.ISSUE_BY_KEY.replace("{issueKey}", issueKey)
    );
  }

  updateIssue(issueKey: string, summary: string): Promise<APIResponse> {
    return this.api.put(
      JiraEndpoints.ISSUE_BY_KEY.replace("{issueKey}", issueKey),
      { data: { fields: { summary } } }
    );
  }

  addComment(issueKey: string, comment: string): Promise<APIResponse> {
    return this.api.post(
      JiraEndpoints.ISSUE_COMMENT.replace("{issueKey}", issueKey),
      {
        data: {
          body: {
            type: "doc",
            version: 1,
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: comment }]
              }
            ]
          }
        }
      }
    );
  }

  deleteIssue(issueKey: string): Promise<APIResponse> {
    return this.api.delete(
      JiraEndpoints.ISSUE_BY_KEY.replace("{issueKey}", issueKey)
    );
  }
}
