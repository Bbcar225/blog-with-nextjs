import Head from "next/head";
import CardUser from "../../components/CardUser";

export default function Users({ data }) {
  const users = data.map((user) => {
    return <CardUser key={user.id} col="4" user={user}></CardUser>;
  });

  return (
    <>
      <Head>
        <title>Utilisateurs</title>
      </Head>

      <div className="row">
        <div className="col-md-12 text-center mb-5">
          <h3>Liste des utilisateurs</h3>
        </div>
      </div>

      <div className="row">{users}</div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);

  const data = await res.json();

  data.map((user) => {
    user.avatar = `https://ui-avatars.com/api/?name=${user.name}`;

    user.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  });

  return { props: { data } };
}
