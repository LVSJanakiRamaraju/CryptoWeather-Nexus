// pages/_app.js
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
