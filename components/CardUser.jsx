import Link from "next/link";

export default function CardUser(props) {
  const style_banner = {
    width: "100%",
    height: "120px",
    backgroundColor: props.user.color,
  };

  return (
    <>
      <div className={`col-md-${props.col} my-2`}>
        <div className="card h-100">
          <div className="rounded" style={style_banner}></div>
          <div className="card-body text-center">
            <img
              src={props.user.avatar}
              style={{ width: "100px", marginTop: "-65px" }}
              alt="User"
              className="img-fluid img-thumbnail rounded-circle border-0 mb-3"
            />
            <h5 className="card-title">{props.user.name}</h5>
            <p className="text-secondary mb-1">{props.user.company.name}</p>
            <p className="text-muted font-size-sm fw-bold">{`${props.user.address.city}, ${props.user.address.street}, ${props.user.address.suite}`}</p>
          </div>
          <div className="card-footer text-center">
            <Link href={`users/${props.user.id}`}>
              <a className="btn btn-warning btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-message-circle"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                CONTACTER
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
