"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import PopContainer from "./PopupContainer";
const ProjectPopup = () => {
  const { setPortfolioModal, portfolioModal } = useContext(context);
  return (
    <PopContainer nullValue={setPortfolioModal}>
      {portfolioModal == 'medievalstorms' &&
      <div className="content">
        <div className="image">
          <img src="/images/projets/medievalstorms_details.png" alt="Details Medieval Storms" />
        </div>
        <div className="desc">
        <h4>Medieval Storms</h4>
          <div className="category">Rôle</div> : Créateur, Team Leader, Community Manager
          <br/>
          <div className="category">Statut</div> : En cours
          <br/>
          <div className="category">Participants</div> : 20 personnes   
          <br/>
          <div className="category">Technologies</div> : Svelte, TypeScript, PostgreSQL, Docker     
          <p>
            Medieval Storms est un MMO médiéval par navigateur qui se concentre sur la stratégie de bataille et la gestion de château.
            Le joueur y développe son économie, son armée, et ses alliances à travers divers mécanismes de jeu.
          </p>
          <a href="https://medievalstorms.com/" target="_blank" className="btn" data-text="Voir le projet">
            Voir le projet
          </a>
        </div>
      </div>
      }
      {portfolioModal == 'carnyx' &&
      <div className="content">
        <div className="image">
          <img src="/images/projets/carnyx_details.png" alt="Details Carnyx" />
        </div>
        <div className="desc">
        <h4>Carnyx</h4>
          <div className="category">Rôle</div> : Créateur
          <br/>
          <div className="category">Statut</div> : Terminé
          <br/>
          <div className="category">Participant</div> : Seul  
          <br/>
          <div className="category">Technologie</div> : JavaScript     
          <p>
           Carnyx est un bot Discord. Son but est l'automatisation des tâches courantes liées à l'activité d'un serveur Discord. Carnyx utilise également l'<a href="https://developer.riotgames.com/apis" target="_blank"><strong>API</strong></a> Riot Games pour diffuser des informations sur les joueurs League of Legends.
           </p>  
           <p>       
           <div className="category">Fonctionnalités</div><br/>Système de ticketing, de report d'utilisateur en cas d'infraction des règles, sanctions automatiques des utilisateurs suivant paramétrage, création de salons vocals automatiques, filtrage de la langue, etc...
          </p>
          <div className="category">API</div><br/>Récupération des données de classement, challenges, historique des parties, mode spectateur.
        </div>
      </div>
      }
      {portfolioModal == 'tw2tracker' &&
      <div className="content">
        <div className="image">
          <img src="/images/projets/tw2tracker_details.png" alt="Details TW2 Tracker" />
        </div>
        <div className="desc">
          <h4>TW2-Tracker</h4>
          <div className="category">Rôle</div> : Créateur, Team Leader
          <br/>
          <div className="category">Statut</div> : Terminé
          <br/>
          <div className="category">Participants</div> : 2 personnes   
          <br/>
          <div className="category">Technologies</div> : Node.js, Fastify, PostgreSQL     
          <p>
            TW2-Tracker est un site tracking de données du jeu en ligne Tribal Wars 2. Les données sont récupérées via scraping.
          </p>
          <p> 
            <div className="category">Fonctionnalités</div><br/>Affichage de statistiques (achievements, points de village, points de bataille, conquêtes de villages, etc...), traitement des statistiques, génération par les joueurs de cartes selon paramétrage. Les cartes peuvent être dynamiques ou statiques.
          </p>
        </div>
      </div>
      }
    </PopContainer>
  );
};
export default ProjectPopup;