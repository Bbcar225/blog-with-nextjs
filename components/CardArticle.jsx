import Link from "next/link";

export default function CardArticle(props) {
  return (
    <>
      <div className={`col-md-${props.col} my-2`}>
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.sub_title}</h6>
            <p className="card-text">{props.description}</p>
            <Link href={props.link}>
              <a className="card-link">{props.name_link}</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
