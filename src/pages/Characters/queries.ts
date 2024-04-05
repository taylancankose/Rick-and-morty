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
  query ($page: Int!, $gender: String, $name: String) {
    characters(page: $page, filter: { gender: $gender, name: $name }) {
      info {
        count
      }
      results {
        id
        name
        status
        image
        species
        gender
        origin {
          id
          name
        }
      }
    }
  }
`;

export const FILTER_GENDER = gql`
  query ($page: Int!, $gender: String!) {
    characters(page: $page, filter: { gender: $gender }) {
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
