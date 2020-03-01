import React from 'react';
import { setDefaultLocale } from 'react-datepicker';
import ReactModal from 'react-modal';
import App from 'next/app';
import Head from 'next/head';

setDefaultLocale('ko');
ReactModal.setAppElement('#__next');

type AppProps = {
  Component: React.ReactNode,
  pageProps: any;
};

export default class CustomApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>기프티</title>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700,900&display=swap" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
