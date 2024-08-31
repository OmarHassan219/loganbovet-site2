import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations(`footer`)
  const currentDate = new Date()
  return (
    <footer>
      <div className="soc">
              <a target="_blank" href="https://www.linkedin.com/in/logan-bovet/">
          <span className="ion ion-social-linkedin" />
        </a>
      </div>
      <div className="copy">
      {t('copyRight', { currentDate })}
      </div>
      <div className="clr" />
    </footer>
  );
};
export default Footer;