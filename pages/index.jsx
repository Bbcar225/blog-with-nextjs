import Head from "next/head";
import CardArticle from "../components/CardArticle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className="row">
        <div className="col-md-12">
          <h3>Bienvenue sur Code.io</h3>
          <p>Le blog communautaire des informations du dévéloppement web</p>
        </div>
      </div>

      <div className="row">
        <CardArticle
          col="6"
          title="Lisez les artcles"
          sub_title="Maximisez votre culture web"
          description="Chaque auteur tente de vous apporter le plus de valeur possible par article."
          name_link="Visiter le blog"
          link="/blog"
        ></CardArticle>

        <CardArticle
          col="6"
          title="Faites un tour vers la liste des membres"
          sub_title="Faites vous des ami(e)s"
          description="Ajoutez, invitez et discutez avec les différnents membres."
          name_link="Découvrir la liste de membres"
          link="/users"
        ></CardArticle>
      </div>
    </>
  );
}
