import React from "react"
import SEO from "../components/seo"

const DashboardPage = () => (
  <div
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    }}
  >
    <SEO title="Dashboard" />
    <iframe
      src="https://bromel.minhaconta.zoop.com.br/login?redirect=/vendas"
      width="100%"
      height="100%"
      title="Dashboard"
      frameBorder="0"
    ></iframe>
  </div>
)

export default DashboardPage
