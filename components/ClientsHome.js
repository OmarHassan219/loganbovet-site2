"use client";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const ClientsHome = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".box-items", {
        itemSelector: ".box-item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <div className="section clients section_" id="clients">
      <div className="content">
        <div className="title">
          <div className="title_inner">Clients</div>
        </div>

        <div className="single-post-text">
            <p>
              Mes collaborations m'ont amené sur de <strong>nombreux secteurs d'activité</strong> : Banques, hôpitaux, administrations, etc...
              <br/>Vous pouvez ici en voir quelques unes, mais n'hésitez pas à en <a href="/clients"><strong>consulter plus</strong></a>.
            </p>
            </div>

        <div className="box-items">
          <div className="box-item">
            <div className="image">
              <a target="_blank" href="https://www.caf.fr/">
                <img src="/images/clients/cnaf.png" alt="cnaf" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <a target="_blank" href="https://www.ameli.fr/">
                <img src="/images/clients/cnam.png" alt="ameli" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <a target="_blank" href="https://www.fdj.fr/">
                <img src="/images/clients/fdj.png" alt="fdj" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <a target="_blank" href="https://www.knds.fr/">
                <img src="/images/clients/nexter.png" alt="nexter" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <a target="_blank" href="https://professionnels.sg.fr/">
                <img src="/images/clients/societegenerale.png" alt="société générale" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <a target="_blank" href="https://www.velib-metropole.fr/">
                <img src="/images/clients/velib.png" alt="velib" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="clear" />
        <div className="btc">
            <a href="/clients" className="btn fill" data-text="Clients">
              Voir Plus
            </a>
          </div>
      </div>
    </div>
  );
};
export default ClientsHome;
