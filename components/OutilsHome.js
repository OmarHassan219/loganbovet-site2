"use client";
import { context } from "@/context/context";
import FsLightbox from "fslightbox-react";
import Isotope from "isotope-layout";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const OutilsHome = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".outils-items", {
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
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  const [activeGallaryImage, setActiveGallaryImage] = useState(1);
  const [gallery, setGallery] = useState(false);

  const { modalToggle, setPortfolioModal } = useContext(context);

  return (
    <Fragment>
      <FsLightbox
        toggler={gallery}
      />
      <div className="section outils section_" id="competences">
        <div className="content">
          <div className="title">
            <div className="title_inner">Outils</div>
          </div>

          <div className="single-post-text">
            <p>
              Très curieux, je m'emploie à maîtriser rapidement un bon nombre d'outils, que ce soit sur mon temps de travail ou personnel via mes différents <a href="/projets"><strong>projets</strong></a>.
              <br/>En voici quelques uns, dont vous pourrez consulter la <a href="/outils"><strong>liste complète et catégorisée</strong></a>.
            </p>
            </div>


          <div className="box-items outils-items">

            <div className="box-item f-voip">
              <div className="image">
                <a
                  href="https://www.3cx.fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/voip/3cx.png" alt="3cx" />
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

            <div className="box-item f-wiki">
              <div className="image">
                <a
                  href="https://www.atlassian.com/fr/software/confluence"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/wiki/confluence.png" alt="confluence" />
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

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://github.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/dev/github.png" alt="github" />
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

            <div className="box-item f-tickets">
              <div className="image">
                <a
                  href="https://glpi-project.org/fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/tickets/glpi.png" alt="glpi" />
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

            <div className="box-item f-collab">
              <div className="image">
                <a
                  href="https://www.atlassian.com/fr/software/jira"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/collab/jira.png" alt="jira" />
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

            <div className="box-item f-protection">
              <div className="image">
                <a
                  href="https://www.kaspersky.fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/protection/kaspersky.png" alt="kaspersky" />
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

            <div className="box-item f-collab">
              <div className="image">
                <a
                  href="https://www.microsoft.com/fr-fr/windows-365"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/collab/microsoft365.png" alt="microsoft 365" />
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

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://www.postgresql.org/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/dev/postgresql.png" alt="postgresql" />
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

            <div className="box-item f-erp">
              <div className="image">
                <a
                  href="https://www.sylob.com/fr"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/erp/sylob.png" alt="sylob" />
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

            <div className="box-item f-remote">
              <div className="image">
                <a
                  href="https://www.teamviewer.com/fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/remote/teamviewer.png" alt="teamviewer" />
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

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://pcsoft.fr/windev/index.html"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/dev/windev.png" alt="windev" />
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

            <div className="box-item f-tickets">
              <div className="image">
                <a
                  href="https://www.zendesk.fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="/images/outils/tickets/zendesk.png" alt="zendesk" />
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
            <a href="/outils" className="btn fill" data-text="Outils">
              Voir Plus
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default OutilsHome;