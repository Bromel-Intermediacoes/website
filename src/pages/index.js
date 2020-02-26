import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import undrawBusinessShop from "../../static/images/undraw_business_shop_qw5t.svg"
import undrawPayOnline from "../../static/images/undraw_pay_online_b1hk.svg"
import undrawTreasure from "../../static/images/undraw_treasure_of9i.svg"
import undrawSavings from "../../static/images/undraw_Savings_dwkw.svg"
import undrawDiscount from "../../static/images/undraw_discount_d4bd.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Soluções em Serviços Financeiros" />

    <div className={"page-header home"}>
      <h1>Soluções em Serviços Financeiros</h1>
      <p>
        Resolvemos toda burocracia envolvida no Mercado Financeiro e nos Meios
        de Pagamento para que você possa focar no que realmente importa, o seu
        dinheiro!
      </p>
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Event"} src={undrawPayOnline} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2 style={{ textAlign: "center" }}>
                  Soluções em Meios de Pagamento
                </h2>
                <p>
                  De pequenos empreendedores a grandes negócios, facilitamos a
                  vida de quem precisa de soluções em meios de pagamentos.
                  <br />
                  <br />
                  Nossos produtos:
                  <br />
                  <br />- Conta Digital
                  <br />- Cartão Pré-Pago
                  <br />- Pagamentos Digitais <i>(para lojas virtuais)</i>
                  <br />- Pagamentos Presenciais <i>(para lojas físicas)</i>
                  <br />- Emissão de Boletos
                  <br />- Conciliação de Pagamentos
                </p>
                <h3 style={{ textAlign: "center" }}>
                  Pagamentos Omnichannel. O mundo online e físico sob sua gestão
                  em um único local.
                </h3>

                <div className="features">
                  <button className={"button1"}>
                    <a
                      href="https://api.whatsapp.com/send?phone=5519974011996&text=Ol%C3%A1,%20gostaria%20de%20criar%20uma%20conta%20na%20Bromel!"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Criar Conta
                    </a>
                  </button>

                  <button className={"button2"}>
                    <a
                      href="/dashboard"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Acessar
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2 style={{ textAlign: "center" }}>Opções de Crédito</h2>
                <p>
                  Seu empréstimo com taxas personalizadas e com parcelas
                  compatíveis com seu bolso.
                  <br />
                  <br />
                  Que modalidades trapabalhamos?
                  <br />
                  <br />- Empréstimo Pessoal
                  <br />- Empréstimo Empresarial
                  <br />- Empréstimo Consignado
                  <br />- Empréstimo com Garantia de Imóvel
                  <br />- Empréstimo com Garantia de Automóvel
                  <br />- Empréstimo entre Pessoas
                </p>
                <h3 style={{ textAlign: "center" }}>
                  Fale conosco e garanta as melhores taxas! Nosso processo de
                  análise é rápido e sem complicações.
                </h3>

                <div className="features">
                  <button className={"button1"}>
                    <a
                      href="https://api.whatsapp.com/send?phone=5519974011996&text=Ol%C3%A1,%20gostaria%20de%20criar%20uma%20conta%20na%20Bromel!"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Criar Conta
                    </a>
                  </button>

                  <button className={"button2"}>
                    <a
                      href="/dashboard"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Acessar
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Team"} src={undrawDiscount} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"News"} src={undrawTreasure} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2 style={{ textAlign: "center" }}>
                  A melhor experiência com serviços financeiros
                </h2>
                <p>
                  De pequenos empreendedores a grandes negócios, facilitamos a
                  vida de quem precisa de soluções em meios de pagamentos.
                  <br />
                  <br />- Conta Digital
                  <br />- Pagamentos Digitais <i>(para lojas virtuais)</i>
                  <br />- Pagamentos Presenciais <i>(para lojas físicas)</i>
                  <br />- Emissão de Boletos
                  <br />- Conciliação
                </p>
                <h3 style={{ textAlign: "center" }}>
                  Pagamentos Omnichannel. O mundo online e físico sob sua gestão
                  em um único local.
                </h3>

                <div className="features">
                  <button className={"button1"}>
                    <a
                      href="https://api.whatsapp.com/send?phone=5519974011996&text=Ol%C3%A1,%20gostaria%20de%20criar%20uma%20conta%20na%20Bromel!"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Criar Conta
                    </a>
                  </button>

                  <button className={"button2"}>
                    <a
                      href="/dashboard"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Acessar
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2 style={{ textAlign: "center" }}>
                  A melhor experiência com serviços financeiros
                </h2>
                <p>
                  De pequenos empreendedores a grandes negócios, facilitamos a
                  vida de quem precisa de soluções em meios de pagamentos.
                  <br />
                  <br />
                  Que modalidades trapabalhamos?
                  <br />
                  <br />- Conta Digital
                  <br />- Pagamentos Digitais <i>(para lojas virtuais)</i>
                  <br />- Pagamentos Presenciais <i>(para lojas físicas)</i>
                  <br />- Emissão de Boletos
                  <br />- Conciliação
                </p>
                <h3 style={{ textAlign: "center" }}>
                  Pagamentos Omnichannel. O mundo online e físico sob sua gestão
                  em um único local.
                </h3>

                <div className="features">
                  <button className={"button1"}>
                    <a
                      href="https://api.whatsapp.com/send?phone=5519974011996&text=Ol%C3%A1,%20gostaria%20de%20criar%20uma%20conta%20na%20Bromel!"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Criar Conta
                    </a>
                  </button>

                  <button className={"button2"}>
                    <a
                      href="/dashboard"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Acessar
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={undrawBusinessShop} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Users"} src={undrawSavings} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2 style={{ textAlign: "center" }}>
                  Aquisição de Bens através de Consórcio
                </h2>
                <p>
                  O consórcio basicamente é a união de pessoas que têm o mesmo
                  objetivo em comum: comprar um bem ou adquirir um serviço.
                  <br />
                  <br />
                  O que você poderá adquirir?
                  <br />
                  <br />- Imóveis
                  <br />- Automóveis
                  <br />- Motocicletas
                  <br />- Serviços
                </p>
                <h3 style={{ textAlign: "center" }}>
                  O Consórcio é autorizado e fiscalizado pelo Banco Central do
                  Brasil, garantia e segurança total para você.
                </h3>

                <div className="features">
                  <button className={"button1"}>
                    <a
                      href="https://www.simule.com.br/bromel.negocios/consorcio/como-funciona-consorcio"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Conhecer
                    </a>
                  </button>

                  <button className={"button2"}>
                    <a
                      href="https://www.simule.com.br/bromel.negocios/consorcio"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      Simular
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*<div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>Sign up for free</h2>
          <p>
            Sign up and start increasing the productivity of your business with
            HiStaff.
          </p>
        </div>

        <div className={"button"}>
          <a
            href="https://app.histaff.io"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>*/}
  </Layout>
)

export default IndexPage
