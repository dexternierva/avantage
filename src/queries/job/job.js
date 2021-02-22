import gql from "graphql-tag";

const JOB_QUERY = gql`
  query Jobs($id: ID!) {
    job(id: $id) {
      id
      title
      where
      companyName
      status
      qualification
      accreditationNumber
      categories
      desc
      featuredImage {
        url
      }
      programs {
        id
        title
        excerpt
      }
    }
  }
`;

export default JOB_QUERY;