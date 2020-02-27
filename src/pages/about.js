import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/Information-document.svg"
import eventImage from "../../static/images/Event-managment.svg"
import ProductivityImage from "../../static/images/Increase-Productivity.svg"
import happinessImage from "../../static/images/Make-happiness.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <div className={"page-header"}>
      <h2>Quem somos?</h2>
      <p>
        A Brömel é uma fintech inovadora e
        <br />
        queremos te ajudar com nossas soluções financeiras.
      </p>
    </div>

    <div className={"container"}>
      <div className={"targets"}>
        <div className={"title"}>
          <h2>Missão e Valores</h2>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Eficiência"} src={informationImage} />
              <h3>Eficiência</h3>
              <p>
                Somos uma plataforma para soluções financeiras sem burocracia.
                Facilitamos toda a integração do sistema através de soluções
                tecnológicas que otimizam o fluxo e a eficiência dos processos.
                Queremos que você seja atendido com qualidade e o quanto antes.
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Parceria"} src={eventImage} />
              <h3>Segurança</h3>
              <p>
                Segurança e praticidade para se integrar aos nossos sistemas sem
                a necessidade de se preocupar com as responsabilidades de um
                setor altamente regulamentado. Usando nossa plataforma, você
                automaticamente estará em conformidade com as todas regulações
                legais.
              </p>
            </div>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Transparência"} src={ProductivityImage} />
              <h3>Qualidade</h3>
              <p>
                Empregamos as melhores políticas de gestão, controle de
                incidentes e garantia da qualidade em nosso processo de
                desenvolvimento, com rigorosos processos de testes automatizados
                que são realizados de ponta a ponta, incluindo testes de
                unidade, integração, contrato, carga, segurança e interface.
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Simplicidade"} src={happinessImage} />
              <h3>Simplicidade</h3>
              <p>
                Simplificamos a burocracia envolvida no setor financeiro e assim
                permitimos que você se precoupe apenas com o que importa! Conte
                com nossa equipe, utilize as mais modernas tecnologias e garanta
                sua performance e eficácia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
