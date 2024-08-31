"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeSwitch from "./LightDark";
import { useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [themeState, setThemeState] = useState("light");
  
  const onClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const [pathname, setPathname] = useState("accueil");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const t = useTranslations("header");

  return (
    <header className={toggle ? "active" : ""}>
      <div className="head-top">
        <a href="#" className="menu-btn" onClick={(e) => onClick(e)}>
          <span />
        </a>
        <div className="logo">
          <Link href="/">
            <img src={`/images/logo.png`} alt="logo" />
          </Link>
        </div>
        <div className="top-menu">
          <ul>
            <li className={pathname.includes("accueil") ? "active" : ""}>
              <Link href={`/`} className={`lnk`}>
              {t(`Accueil`)}
              </Link>
            </li>
            <li className={pathname.includes("competences") ? "active" : ""}>
              <Link href={`/./competences`} className="lnk">
                {t(`Compétences`)}
              </Link>
            </li>
            <li className={pathname.includes("clients") ? "active" : ""}>
              <Link href={`/./clients`} className={`lnk`}>
                {t(`Clients`)}
              </Link>
            </li>
            <li className={pathname.includes("blog") ? "active" : ""}>
              <Link href={`/./blog`} className="lnk">
                {t(`Blog`)}
              </Link>
            </li>
            <li>
              <a href="mailto:logan.bovet@outlook.com" className="btn">
                {t("Contacter")}
              </a>
            </li>
            
            <li>
              <a
                href="/documents/CV_BOVET_Logan.pdf"
                download
                className="btn fill"
                data-text="Télécharger CV"
              >
                {t(`Consulter CV`)}
              </a>
            </li>
            <li className="locale-switcher-container">
              <LocaleSwitcherSelect themeState={themeState}/>
            </li>
            <li className="theme-switcher-container">
              <ThemeSwitch themeState={themeState} setThemeState={setThemeState} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
