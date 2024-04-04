import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        gender
        origin {
          id
          dimension
        }
        image
      }
    }
  }
`;
