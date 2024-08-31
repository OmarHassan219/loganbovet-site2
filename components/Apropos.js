const Apropos = () => {
    return (
      <div className="section apropos section_" id="apropos">
        <div className="content">
          <div className="title">
            <div className="title_inner">A propos</div>
          </div>
          <div className="image">
            <img src="/images/photo.jpg" alt="photo Logan BOVET" />
          </div>
          <div className="desc">
            <p>
              Après 5 ans en tant que Technicien Software et Hardware, je souhaite <strong>relever de nouveaux défis</strong>.
              <br/>
              Doué d'un parcours axé sur les nouvelles technologies et l'informatique, mon expérience professionnelle m'a fait découvrir une nouvelle passion : Le <strong>Management</strong>.
              <br/>
              J'ai eu le plaisir de <strong>gérer un service de 15 personnes réparties sur 2 localisations différentes</strong> en l'absence du responsable.
              <br/>
              Je reste <strong>disponible et à l'écoute pour toute offre intéressante</strong>.
            </p>
            <p>
              N'hésitez pas à me contacter !
            </p>
            <div className="info-list">
              <ul>
                <li>
                  <strong>Nom:</strong> Logan BOVET
                </li>
                <li>
                  <strong>Âge:</strong> 28 ans
                </li>
                <li>
                  <strong>Domaine:</strong> Informatique
                </li>
                <li>
                  <strong>Nationalité:</strong> Française
                </li>
                <li>
                  <strong>Résidence:</strong> 40430 Luxey
                </li>
                <li>
                  <strong>E-mail:</strong> logan.bovet@outlook.com
                </li>
              </ul>
            </div>


            <div className="cols">
            <div className="col col-sm">

            <div className="bts">
              <a href="documents/CV_BOVET_Logan.pdf" target="_blank" className="btn fill" data-text="Télécharger CV">
                    <span>Consulter CV</span>
              </a>
            </div>
            </div>

            <div className="col col-lg">
            <div className="items">
          <div className="item-apropos">
            <div className="icon">
              <span className="ion ion-android-car" />
            </div>
            <div className="name">Mobilité Secteur Sud-Ouest</div>
          </div>
          </div>

          </div>
          </div>


          </div>
          <div className="clear" />
        </div>
      </div>
    );
  };
  export default Apropos;
  