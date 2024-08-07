import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Layout from './components/Layout/Layout.tsx'
import GlobalStyle from "../styles.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<GlobalStyle />
      <Layout>
    <App />
      </Layout>
  </React.StrictMode>,
)
