import Head from "next/head";
import CardArticle from "../../components/CardArticle";

export default function Blog({ posts }) {
  const postes = posts.map((post) => (
    <CardArticle
      key={post.id}
      col="4"
      title={post.title}
      description={post.body}
      name_link="Lire l'article"
      link={`/blog/${post.id.toString()}`}
    ></CardArticle>
  ));

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className="row">
        <div className="col-md-12 text-center mb-5">
          <h3>Bienvenue sur le Blog.</h3>
          <p>Voici les articles...</p>
        </div>
      </div>

      <div className="row">{postes}</div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
  );

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
