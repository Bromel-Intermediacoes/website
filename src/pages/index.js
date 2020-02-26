import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import undrawBusinessShop from "../../static/images/undraw_business_shop_qw5t.svg"
import undrawPayOnline from "../../static/images/undraw_pay_online_b1hk.svg"
import undrawTreasure from "../../static/images/undraw_treasure_of9i.svg"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"

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
                <h2>A melhor experiência com serviços financeiros</h2>
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
                <h3>
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
                <h2>Public Board</h2>
                <p>
                  Let the staff write down on the board freely,
                  <br />
                  Joking with each other and writing cool content can make the
                  workplace more diverse and attractive for employees.{" "}
                </p>
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
                <img alt={"News"} src={undrawTreasure} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Internal News</h2>
                <p>
                  Get rid of sending news by e-mail and its problems; post the
                  news in an internal and attractive format via HiStaff instead.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Teams</h2>
                <p>
                  HiStaff let you add staff in specific teams and manage them
                  easily.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Team"} src={thumbnailTeams} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Users"} src={thumbnailStaff} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Staff management</h2>
                <p>
                  Discard traditional ways to archive staff documents and
                  information, and try new ways to store and archive them in
                  HiStaff easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={"call-to-action"}>
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
    </div>
  </Layout>
)

export default IndexPage
