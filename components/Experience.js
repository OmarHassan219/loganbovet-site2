import Link from "next/link";
const Resume = () => {
  return (
    <div className="section resume section_" id="apropos">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Experiences</div>
            </div>
            <div className="resume-items">

              <div className="resume-item active">
                <div className="date">2021 - 2024</div>
                <div className="name">Technicien Logiciel & Hardware (bornes intéractives)</div>
                <p>
                  - <a href="https://www.ipmfrance.fr/" target="_blank"><strong>IPM France</strong></a>, Romans-sur-Isère
                </p><br/>
                <Link
                  href="/entreprises/ipm-fr"
                  className="more"
                >
                  En savoir plus
                </Link>               
              </div>
              <div className="resume-item">
                <div className="date">2019 - 2021</div>
                <div className="name">Technicien Logiciel (de caisse, comptabilité, stock) NIV N2+</div>
                <p>
                - <a href="https://www.progmag.com/" target="_blank"><strong>ProGmag</strong></a>, Beaumont-lès-Valence
                </p><br/>
                <Link
                  href="/entreprises/progmag"
                  className="more"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Diplômes / Certifications</div>
            </div>
            <div className="resume-items">
            <div className="resume-item">
                <div className="date">2024</div>
                <div className="name">Certification ITIL Foundation</div>
                <p>
                - En cours
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2017</div>
                <div className="name">BTS - Solutions Logicielles et Applications Métiers</div>
                <p>
                - <a href="https://algoud-laffemas.ent.auvergnerhonealpes.fr/nos-formations/bts/bts-sio/" target="_blank"><strong>Algoud-Laffemas</strong></a>, Valence
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2014</div>
                <div className="name">BACCALAUREAT - Systèmes d'Information de Gestion</div>
                <p>
                - <a href="https://www.lyceesacrecoeur.fr/" target="_blank"><strong>Lycée Sacré-Cœur</strong></a>, Tournon-sur-Rhône
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};
export default Resume;
