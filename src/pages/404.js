import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Página não Encontrada" />
    <div className={"container"}>
      <h1>Página não Encontrada</h1>
      <p>Você visitou uma rota que não existe... Pode tentar novamente?</p>
    </div>
  </Layout>
)

export default NotFoundPage
