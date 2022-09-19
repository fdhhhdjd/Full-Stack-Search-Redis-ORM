import Link from "next/link";
import React from "react";
import { getData } from "../../utils/fetchData";

const carItem = (props) => {
  let car = props?.car && props?.car;
  return (
    <>
      <Link href={`/`}>
        <a href="#" className="btn btn-warning">
          Go Back
        </a>
      </Link>
      <div className="card" style={{ width: "18rem" }}>
        <img src={car.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{car.make}</h5>
          <p className="card-text">{car.description}</p>
          <a href="#" className="btn btn-primary">
            {car.model}
          </a>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`car/${id}`);
  // server side rendering
  return {
    props: { car: res.element },
  };
}

export default carItem;
