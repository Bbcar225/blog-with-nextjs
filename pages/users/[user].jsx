import Head from "next/head";

export default function User({ user }) {
  return (
    <>
      <Head>
        <title>Utilisateur | {user.name}</title>
      </Head>

      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: "20px" }}>
              <div className="row g-0">
                <div className="col-md-4 text-center align-self-center p-2">
                  <img
                    src={`https://ui-avatars.com/api/?name=${user.name}`}
                    alt="Avatar"
                    className="img-fluid my-5 rounded-circle"
                    style={{ width: "80px" }}
                  />
                  <h5>{user.name}</h5>
                  <p>{user.company.name}</p>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{user.email}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">{user.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const id = context.params.user;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const user = await res.json();

  return { props: { user } };
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);

  const users = await res.json();

  const paths = users.map((user) => ({
    params: { user: user.id.toString() },
  }));

  return { paths, fallback: false };
}
