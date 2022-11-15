import { gql } from '@apollo/client';

export const QUERY_ISSUE_LIST = gql`
  query IssueList($keywords: String!) {
    search(query: $keywords, type: ISSUE, first: 10) {
      edges {
        cursor
        node {
          ... on Issue {
            title
            bodyHTML
            comments(first: 10) {
              nodes {
                author {
                  login
                }
                body
              }
              totalCount
            }
          }
        }
      }
    }
  }
`;

export const QUERY_ISSUE_COMMENTS = gql`
  {
    search(query: "repo:facebook/react is:open", type: ISSUE, first: 10) {
      edges {
        cursor
        node {
          ... on Issue {
            comments(first: 10) {
              nodes {
                body
              }
            }
          }
        }
      }
    }
  }
`;
