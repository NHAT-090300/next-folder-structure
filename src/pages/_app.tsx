import store from '@store/index';
import { ConfigProvider, ThemeConfig } from 'antd';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import Alert from 'react-s-alert';
import { DefaultSeo } from 'next-seo';
import { ModalController } from '@components/shared';
import { SEO } from 'next-seo.config';

import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-default.css';
import '@resources/css/main.scss';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#FF8800',
    colorSuccess: '#38C976',
    colorWarning: '#FCB121',
    colorError: '#FD504F',
  },
  components: {
    Button: {
      colorPrimary: '#FF8800',
      algorithm: true,
    },
    Input: {
      colorPrimary: '#FF8800',
      algorithm: true,
    },
  },
};

type Props = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" type="image/svg+xml" href="/icons/logo_main.svg" />
        <link rel="icon" type="image/png" href="/icons/logo_main.png" sizes="32x32" />
        <link rel="shortcut icon" href="/icons/logo_main.svg" type="image/x-icon" />
      </Head>
      <DefaultSeo {...SEO} />
      <main>
        <Provider store={store}>
          <ConfigProvider theme={theme}>
            <Alert stack={{ limit: 3 }} />
            <ModalController />
            {getLayout(<Component {...pageProps} />)}
          </ConfigProvider>
        </Provider>
      </main>
    </>
  );
}

export default App;
