import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className={"container"}>
      <div className={"content"}>
        <div className={"title"}>
          <h1>Contato</h1>
        </div>

        <div className={"row"}>
          <div className={"col-7"}>
            <p>
              Levamos a sério nosso compromisso com nossos usuários. Se você
              precisar de nossa ajuda com sua conta de usuário, tiver dúvidas
              sobre como usar os nossos serviços, tiver algum feedback ou
              estiver enfrentando dificuldades técnicas, não hesite em entrar em
              contato conosco.
            </p>
          </div>

          <div className={"col-5"}>
            <div className={"contact-items"}>
              <p>E-mail é a ferramenta ideal para nos contactar:</p>
              <h2>rodrigo@bromel.com.br</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
