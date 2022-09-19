import Link from "next/link";
import React, { useState } from "react";
import { SearchData } from "../utils/fetchData";

const SearchForm = () => {
  const [hits, setHits] = useState([]);

  const search = async (event) => {
    const q = event.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });
      let url = "search?" + params;
      const res = await SearchData(url);

      const result = await res.json();
      console.log(result);
      setHits(result?.element);
    }
  };
  return (
    <>
      <div>
        <input
          onChange={search}
          type="text"
          placeholder="search cars..."
          className="form-control"
        />

        <ul className="list-group">
          {hits.map((hit) => {
            return (
              <Link href={`/car/${hit.entityId}`} key={hit.entityId}>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <img width="50px" src={hit.image} />

                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      {hit.make} {hit.model}
                    </div>
                    {hit.description}
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SearchForm;
