import '../styles/global.css'
// Can only inject GLOBAL styles in _app.js
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}