import gql from "graphql-tag";

const PROGRAMS_QUERY = gql`
  query Programs {
    programs {
        id
        title
        details
        excerpt
    }
  }
`;

export default PROGRAMS_QUERY;