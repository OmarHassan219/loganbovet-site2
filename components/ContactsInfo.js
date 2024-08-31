"use client";
import React from "react";

function ContactsInfo() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(<label>
  <div className="alert notice">
    <span className="alertText"> Envoi en cours...
		<br className="clear"/></span>
  </div>
</label>);
    const formData = new FormData(event.target);

    formData.append("access_key", "b5c22871-0195-4c23-adab-89f48dd42a3b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(<label>
  <div className="alert success">
    <span className="alertText">Email envoyé avec succès, je vous recontacte dès que possible !
		<br className="clear"/></span>
  </div>
</label>);
      event.target.reset();
    } else {
      console.log(<label>
        <div className="alert error">
          <span className="alertText">Erreur lors de l'envoi. Veuillez rafraîchir la page et réessayer.
          <br className="clear"/></span>
        </div>
      </label>, data);
      setResult(data.message);
    }
  };

  return (
    <div>
    <form onSubmit={onSubmit}>
      <div className="section contacts section_" id="contact">
        <div className="content">
          <div className="title">
            <div className="title_inner">Me Contacter</div>
          </div>
          


          <div className="cols">
          <div className="col col-sm">



          <div className="items-contact">
          <div className="item-contact">
            <div className="icon">
              <span className="ion ion-social-linkedin" />
            </div>
            <div className="name">Linkedin</div>
            <div className="space"><a href="https://www.linkedin.com/in/logan-bovet/">@logan-bovet</a></div>
          </div>
          <div className="item-contact">
            <div className="icon">
              <span className="ion ion-email" />
            </div>
            <div className="name">Email</div>
            <div className="space">
              <a href="mailto:logan.bovet@outlook.com">
                logan.bovet@outlook.com
              </a>
            </div>
          </div>
        </div>


        </div>

        <div className="col col-lg">

        
          <div className="contact_form">
            <div>
              <input type="text" name="name" placeholder="Votre Nom" autoComplete="name" />
            </div>
            <div>
              <input type="email" name="email" required placeholder="Email@exemple.com" autoComplete="email" />
            </div>
            <div>
               <textarea name="message" required placeholder="Entrez votre message" autoComplete="off"></textarea>
             </div>
            <button type="submit" className="btn fill" >Envoyer Message</button>
            <span>{result}</span>
          </div>
          </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  );
}
export default ContactsInfo;