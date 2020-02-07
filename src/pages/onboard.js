import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Cadastro" />
    <div className={"container"}>
      <div className={"content"}>
        <div className={"row"}>
          <div className={"contact-items"}>
            <form
              name="onboard"
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
            >
              <h1>Formulário de Cadastro para Pessoa Física</h1>
              <p>
                Assim que recebermos seu cadastro vamos validar todos os dados e
                ativar sua conta.
              </p>
              <fieldset>
                <legend>Dados Básicos</legend>
                <input type="text" name="name" placeholder="Nome Completo" />
                <input type="text" name="cpf" placeholder="CPF" />
                <input type="email" name="email" placeholder="E-mail" />
              </fieldset>

              <div data-netlify-recaptcha="true"></div>

              <button type="submit" className="form-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
