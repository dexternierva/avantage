import gql from "graphql-tag";

const JOBS_QUERY = gql`
  query Jobs {
    jobs {
      id
      categories
      title
      where
      companyName
      status
      qualification
      accreditationNumber
      desc
      featuredImage {
        url
      }
    }
  }
`;

export default JOBS_QUERY;