import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query ($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        image
        species
        origin {
          id
          name
        }
      }
    }
  }
`;

export const SEARCH_CHARACTERS = gql`
  query ($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        status
        image
        species
        origin {
          id
          name
        }
      }
    }
  }
`;
