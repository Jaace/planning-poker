import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import Page from '../components/Page';
import withData from '../lib/withData';

// @TODO: Move to a separate file? If it becomes large.
const theme = {
  blue: '#424B5B',
  maxWidth: '1000px'
};

class MyApp extends App {
  render() {
    // @TODO: Figure out why this has to be "apollo" and not "apolloClient".
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apollo}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
