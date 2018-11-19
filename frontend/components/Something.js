import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// There is currently no partial cache invalidation... ugh.
const ALL_SESSIONS_QUERY = gql`
  query ALL_SESSIONS_QUERY($skip: Int = 0, $first: Int = 100) {
    sessions(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
    }
  }
`;

class Something extends Component {
  render() {
    return (
      <Query query={ALL_SESSIONS_QUERY}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          return (
            <ul>
              {data.sessions.map((session, index) => (
                <li key={index}>{session.id}</li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default Something;
