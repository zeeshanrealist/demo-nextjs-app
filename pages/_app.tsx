import { AppProps } from 'next/app';
import { store } from '../store/store';
import { Provider } from 'react-redux'

import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
