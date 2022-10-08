import './index.scss'

const App = ({ Component, pageProps }) => <Component {...pageProps} />

export async function getServersideProps({ ctx, Component }) {
  return {
    props: {
      pageProps
    }
  }
}
// App.getInitialProps = async ({ ctx, Component }) => {
//   const pageProps = await Component.getInitialProps
//   return { pageProps }
// }

export default App;