import Layout from "@/layouts/Layout";
import Link from "next/link";

const Article03082024 = () => {
  return (
    <Layout>
      <div className="section started" style={{ height: "96vh" }}>
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div className="date">03 Août 2024</div>
              <div className="h-title glitch-effect blog_title">
                Ouverture du site
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
              <strong>Bienvenue sur mon site : Une nouvelle approche pour rencontrer les recruteurs</strong>
                          </p>
                          <p>
              Je suis ravi de vous accueillir sur mon site, un espace spécialement conçu pour aller au-delà du traditionnel CV d'une page. 
              Ici, vous ne trouverez pas seulement une liste de mes expériences et compétences, mais une véritable immersion dans mon parcours, ma vision professionnelle, mes valeurs et ma personnalité.
                          </p>
                          <p>
              <strong>Pourquoi ce site?</strong>
                          </p>
                          <p>
              Le marché de l'emploi est en constante évolution, tout comme les attentes des recruteurs. 
              Bien souvent, un CV classique ne suffit pas à exprimer pleinement la personnalité, les motivations, et les aspirations d'un candidat. 
              C'est pourquoi j'ai créé cet espace personnel : pour vous offrir une nouvelle manière de découvrir qui je suis, en vous permettant d'aller au-delà des simples mots sur une page.
                          </p>
                          <p>
              <strong>Qu'est-ce que vous allez découvrir ?</strong>
                          </p>
              <div className="listing list">
              <ul>
                <li>
                <div className="name"><mark>Mon parcours</mark> : Une section dédiée à mon parcours professionnel et académique, détaillant mes expériences passées, les projets sur lesquels j'ai travaillé, et les compétences que j'ai acquises.</div>
                </li>
                <li>
                <div className="name"><mark>Mes compétences</mark> : Pour être efficace dans son travail, il faut savoir être polyvalent, curieux, méthodique. Je vous présente sur ce site tous les outils que j'ai pu maîtriser tout au long de mon parcours professionnel.</div>
                </li>
                <li>
                <div className="name"><mark>Mes valeurs</mark> : Parce qu'au-delà des compétences, je crois fermement que les valeurs sont essentielles dans un environnement de travail, je vous présente ici ce qui me motive au quotidien, ce qui guide mes choix et mes actions.</div>
                </li>
                <li>
                <div className="name"><mark>Mes projets personnels</mark> : Un aperçu de comment j'occupe mon temps libre, où vous pourrez découvrir les projets concrets que j'ai menés à bien ou en cours de réalisation.</div>
                </li>
                <li>
                <div className="name"><mark>Mes articles</mark> : Des publications où je partage mes réflexions sur des sujets liés à mon domaine d'expertise. Ces articles sont l'occasion pour vous de comprendre ma façon de penser, d'analyser les tendances du marché, ou encore d'aborder les défis professionnels.</div>
                </li>
              </ul>
              </div>
                          <p>
              <strong>Une présentation interactive</strong>
                          </p>
                          <p>
              Ce site est conçu pour être un espace interactif. Je vous invite à naviguer librement, à explorer les différentes sections, et à me découvrir sous un nouvel angle. Ce site est également un moyen de faciliter notre prise de contact : vous pouvez <a href="mailto:logan.bovet@outlook.com"><strong>m'écrire directement</strong></a>, ou encore suivre mon actualité via <a href="https://www.linkedin.com/in/logan-bovet/"><strong>LinkedIn</strong></a>.
                          </p>
                          <p>
              Je suis convaincu que cette approche vous permettra de mieux comprendre qui je suis, et comment je peux apporter une réelle valeur ajoutée à votre entreprise. Alors, n'hésitez pas à parcourir ces pages, à poser vos questions, et à envisager, je l'espère, une future collaboration.
                          </p>
                          <p>
              <strong>Bonne visite et à bientôt !</strong>
                          </p>
          </div>

          <div className="btc">
              <a href="/./blog" className="btn fill" data-text="blog">
                ← Retour à tous les articles
              </a>
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
export default Article03082024;
