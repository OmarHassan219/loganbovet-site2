"use client";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Clients = () => {
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
          <div className="title_inner">Clients (liste non exhaustive)</div>
        </div>




        <div className="box-items">

        <div className="box-item">
            <div className="image">
              <a target="_blank" href="https://www.aroma-zone.com/">
                <img src="/images/clients/aromazone.png" alt="aroma zone" />
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
              <a target="_blank" href="https://arpege.fr/">
                <img src="/images/clients/arpege.png" alt="arpege" />
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
              <a target="_blank" href="http://www.arteis-france.com/">
                <img src="/images/clients/arteis.png" alt="arteis" />
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
              <a target="_blank" href="https://www.centrakor.com/">
                <img src="/images/clients/centrakor.png" alt="centrakor" />
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
              <a target="_blank" href="https://www.cpage.fr/">
                <img src="/images/clients/cpage.png" alt="cpage" />
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
              <a target="_blank" href="https://dalbe.fr/">
                <img src="/images/clients/dalbe.png" alt="dalbe" />
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
              <a target="_blank" href="https://www.famillemary.fr/">
                <img src="/images/clients/famillemary.png" alt="famille mary" />
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
              <a target="_blank" href="https://www.francerurale.fr/">
                <img src="/images/clients/francerurale.png" alt="france rurale" />
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
              <a target="_blank" href="https://maxibazar.fr/">
                <img src="/images/clients/maxibazar.png" alt="maxibazar" />
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

          <div className="box-item">
            <div className="image">
              <a target="_blank" href="https://www.wiis.fr/">
                <img src="/images/clients/wiis.png" alt="wiis" />
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
      </div>
    </div>
  );
};
export default Clients;