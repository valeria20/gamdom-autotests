import { test, expect } from "../../fixtures/fixtures";
import { JiraIssuesApiClient } from "../../services/JiraIssueApiClient";

test.describe("JIRA API CRUD workflow", () => {
  test("Create -> Get -> Update -> Comment -> Delete issue", async ({ api }) => {
    const jira = new JiraIssuesApiClient(api);

    // 1. get createmeta to discover valid issue types
    const metaResponse = await jira.getCreateMeta();
    expect(metaResponse.status(), "createmeta request failed").toBe(200);

    const metaBody = await metaResponse.json();
    const issueTypeId = metaBody.projects[0].issuetypes[0]?.id;
    expect(issueTypeId, "No issue types found for DEV project").toBeTruthy();

    // 2. create issue
    const createResponse = await jira.createIssue(
      "API test issue",
      issueTypeId
    );
    expect(createResponse.status(), "Issue creation failed").toBe(201);

    const createBody = await createResponse.json();
    const issueKey = createBody.key;
    expect(issueKey, "Issue key should be returned").toBeTruthy();

    // 3. get issue
    const getResponse = await jira.getIssue(issueKey);
    expect(getResponse.status(), "Get issue failed").toBe(200);

    const getBody = await getResponse.json();
    expect(getBody.key).toBe(issueKey);

    // 4. update issue
    const updateResponse = await jira.updateIssue(
      issueKey,
      "API test issue – updated"
    );
    expect(updateResponse.status(), "Update issue failed").toBe(204);

    // 5. add comment
    const commentResponse = await jira.addComment(
      issueKey,
      "Added via Playwright API test"
    );
    expect(commentResponse.status(), "Add comment failed").toBe(201);

    // 6. delete issue
    const deleteResponse = await jira.deleteIssue(issueKey);
    expect(deleteResponse.status(), "Delete issue failed").toBe(204);
  });
});
