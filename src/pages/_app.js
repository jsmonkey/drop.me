import React from 'react';
import App from 'next/app';

import { nextReduxWrapper } from '../redux';

class WrappedApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    const pageProps = {
      ...(await Component.getInitialProps?.(ctx)),
    };

    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component { ...pageProps } />;
  }
}

export default nextReduxWrapper.withRedux(WrappedApp);
