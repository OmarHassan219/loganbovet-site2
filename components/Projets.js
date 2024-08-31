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


const Projets = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".projets-items", {
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
      <div className="section projets section_" id="projets">
        <div className="content">
          <div className="title">
            <div className="title_inner">Projets personnels</div>
          </div>
          <div className="filter-menu">
            <div className="filters">
              <div className="btn-group">
                <label
                  data-text="Tous"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".box-item"
                  />
                  Tous
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="En Cours"
                  className={`c-pointer ${activeBtn("f-encours")}`}
                  onClick={handleFilterKeyChange("f-encours")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-encours" />
                  En cours
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Terminé"
                  className={`c-pointer ${activeBtn("f-termine")}`}
                  onClick={handleFilterKeyChange("f-termine")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-termine" />
                  Terminé
                </label>
              </div>
            </div>
          </div>
          <div className="box-items projets-items">
            <div className="box-item f-encours">
              <div className="image">
                <a
                  href="#medievalstorms"
                  className="has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal('medievalstorms');
                  }}
                >
                  <img src="/images/projets/medievalstorms.png" alt="Medieval Storms" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
              <div className="category">Jeu par navigateur</div>
                <a
                  href="#medievalstorms"
                  className="name has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal('medievalstorms');
                  }}
                >
                  Medieval Storms
                </a>
              </div>
            </div>
            <div className="box-item f-termine">
              <div className="image">
                <a
                  href="#carnyx"
                  className="has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal('carnyx');
                  }}
                >
                  <img src="/images/projets/carnyx.png" alt="Carnyx" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
              <div className="category">Bot Discord</div>
                <a
                  href="#carnyx"
                  className="name has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal('carnyx');
                  }}
                >
                  Carnyx
                </a>
              </div>
            </div>
            <div className="box-item f-termine">
              <div className="image">
                <a
                  href="#tw2tracker"
                  className="has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal('tw2tracker');
                  }}
                >
                  <img src="/images/projets/tw2tracker.png" alt="TW2-Tracker" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
              <div className="category">Site</div>
                <a
                  href="#tw2tracker"
                  className="name has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal('tw2tracker');
                  }}
                >
                  TW2-Tracker
                </a>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Projets;
