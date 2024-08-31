"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeSwitch from "./LightDark";
import { useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";

const OnePageHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [themeState, setThemeState] = useState("light");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll(".section_");
      const navLi = document.querySelectorAll(".top-menu li");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        if (current !== null) {
          li.classList.remove("active");
        }
        let liA = li.getElementsByTagName("a")[0];
        if (liA != undefined) {
          if (liA.getAttribute("href") == `#${current}`) {
            li.classList.add("active");
          }
        }
      });
    });
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.toggle("loaded");
    setToggle(!toggle);
  };

  const OnePageMenuClick = (e) => {
    e.preventDefault();
    let id = e.target.getAttribute("href");
    window.scrollTo({
      top: document.querySelector("" + id).offsetTop - 117,
      behavior: "smooth",
    });
  };
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
            <li className="">
              <a href="#apropos" className="lnk" onClick={OnePageMenuClick}>
                {t(`A propos`)}
              </a>
            </li>
            <li className="">
              <a href="#competences" className="lnk" onClick={OnePageMenuClick}>
                {t(`Compétences`)}
              </a>
            </li>
            <li className="">
              <a href="#clients" className="lnk" onClick={OnePageMenuClick}>
                {t(`Clients`)}
              </a>
            </li>
            <li className="">
              <a href="#blog" className="lnk" onClick={OnePageMenuClick}>
                {t(`Blog`)}
              </a>
            </li>
            <li>
              <a href="#contact" className="btn" onClick={OnePageMenuClick}>
                {t("Contacter")}
              </a>
            </li>
         
            <li>
              <a
                href="/documents/CV_BOVET_Logan.pdf"
                target="_blank"
                className="btn fill"
                data-text="Consulter CV"
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
export default OnePageHeader;
