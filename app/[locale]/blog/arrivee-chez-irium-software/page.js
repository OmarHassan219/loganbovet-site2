import Layout from "@/layouts/Layout";
import Link from "next/link";

const Article12082024 = () => {
  return (
    <Layout>
      <div className="section started" style={{ height: "96vh" }}>
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div className="date">12 Août 2024</div>
              <div className="h-title glitch-effect blog_title">
                Arrivée chez IRIUM Software
              </div>
              <div className="h-subtitle typing-bread">
                <p>
                  <Link href="/">Accueil</Link> / <Link href="/./blog">Blog</Link>
                </p>
              </div>
              <span className="typed-bread" />
            </div>
          </div>
        </div>
        <a href="#" className="mouse_btn">
          <span className="ion ion-mouse" />
        </a>
      </div>
      {/* Blog */}
      <div className="section blog">
        <div className="content">
          <div className="single-post-text">
          <p>
              <strong>Mon arrivée en tant que Conseiller Support Logiciel pour IRIUM Software</strong>
                          </p>
                          <p>
                          Je suis ravi de partager avec vous une étape majeure de ma carrière : mon arrivée au sein d'IRIUM Software en tant que Conseiller Support Logiciel, avec une spécialisation sur le logiciel ERP iPro. Cette nouvelle aventure professionnelle marque un tournant important et ouvre des perspectives enrichissantes pour moi, mais aussi pour les clients que j'aurai la chance d'accompagner.
                          </p>
                          <p>
              <strong>Pourquoi IRIUM Software ?</strong>
                          </p>
                          <p>
                          IRIUM Software est un acteur reconnu dans le domaine des logiciels ERP dédiés aux distributeurs, loueurs et réparateurs de matériels. Sa réputation d'excellence, ses solutions innovantes, et son engagement envers la satisfaction client ont été des facteurs décisifs dans mon choix de rejoindre cette société. Le logiciel iPro, en particulier, se distingue par sa capacité à offrir une gestion complète et intégrée des activités, ce qui le rend indispensable pour les entreprises cherchant à optimiser leur efficacité opérationnelle.
                          </p>
                          <p>
              <strong>Mon rôle en tant que Conseiller Support Logiciel</strong>
                          </p>
                          <p>Dans ce nouveau poste, je suis chargé d'assurer le support et l'accompagnement des utilisateurs du logiciel iPro. Mon objectif est de garantir une expérience utilisateur fluide et positive, en répondant aux besoins spécifiques de chaque client. Concrètement, cela signifie :</p>
                          <p/>
              <div className="listing list">
              <ul>
                <li>
                <div className="name"><mark>Assistance technique</mark> : Apporter des solutions rapides et efficaces aux problèmes rencontrés par les utilisateurs, que ce soit sur des aspects techniques ou fonctionnels du logiciel iPro.</div>
                </li>
                <li>
                <div className="name"><mark>Formation et Conseil</mark> : Aider les clients à tirer le meilleur parti du logiciel en leur fournissant des formations personnalisées et en les conseillant sur les meilleures pratiques d'utilisation.</div>
                </li>
                <li>
                <div className="name"><mark>Optimisation des processus</mark> : Collaborer étroitement avec les équipes internes pour identifier et mettre en œuvre des améliorations continues sur le logiciel, en fonction des retours utilisateurs.</div>
                </li>
                <li>
                <div className="name"><mark>Satisfaction client</mark> : M'assurer que chaque interaction avec les utilisateurs se traduise par une satisfaction maximale, en faisant preuve d'écoute, de réactivité, et de professionnalisme.</div>
                </li>
              </ul>
              </div>
                          <p>
              <strong>Première impression et objectifs</strong>
                          </p>
                          <p>
                          Dès mon arrivée chez IRIUM Software, j'ai été impressionné par l'expertise des équipes et par l'environnement de travail collaboratif qui règne au sein de l'entreprise. Cette atmosphère dynamique est propice à l'échange et à l'innovation, ce qui me motive à me surpasser dans ce nouveau rôle.
                          </p>
                          <p>
                          Mes objectifs sont clairs : devenir un expert du logiciel iPro, établir des relations de confiance avec les clients, et contribuer activement au développement et à l'amélioration continue des solutions proposées par IRIUM Software. Je suis convaincu que cette expérience me permettra de grandir professionnellement, tout en apportant une réelle valeur ajoutée aux utilisateurs d'iPro.
                          </p>
                          <p>
                          Je suis impatient de relever les défis à venir et de contribuer au succès de nos clients grâce à une utilisation optimisée de leurs solutions ERP. Cette nouvelle aventure ne fait que commencer, et j'ai hâte de voir ce que l'avenir nous réserve.
                          </p>
                          <p>
                          Merci de suivre mon parcours, et à très bientôt pour de nouvelles actualités sur mon aventure chez IRIUM Software !
                          </p>

          <div className="btc">
              <a href="/./blog" className="btn fill" data-text="blog">
                ← Retour à tous les articles
              </a>
          </div>

          </div>
          <div className="post-comments">
            <div className="title">
              <div className="title_inner">AUTEUR</div>
            </div>
            <ul className="comments">
              <li className="post-comment">
                <div className="image">
                  <img src="/images/photo.jpg" alt="photo Logan Bovet" />
                </div>
                <div className="desc">
                  <div className="name">Logan BOVET</div>
                  <p>
                  Passionné d'Informatique et de Management, je souhaite relever de nouveaux défis en tant que Responsable. Je reste <strong>disponible et à l'écoute pour toute offre intéressante</strong>.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};
export default Article12082024;
