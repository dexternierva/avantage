import gql from "graphql-tag";

const PROGRAM_QUERY = gql`
  query Programs($id: ID!) {
    program(id: $id) {
      id
      title
      details
      excerpt
      featuredImage {
        url
      }
    }
  }
`;

export default PROGRAM_QUERY;