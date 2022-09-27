import React, { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import { api } from "../api";
import { Link } from "react-router-dom";

function Home() {
  const [photos, setphotos] = useState([]);
  const [query, setQuery] = useState("");
  const [pages, setPages] = useState(1);
  useEffect(() => {
    const fetchPics = async () => {
      const response = await fetch(api(pages, query));
      const data = await response.json();
      setphotos(data.results);
    };
    fetchPics();
  }, [query, pages]);

  return (
    <div className={styles.container}>
      <div className={styles.searchdiv}>
        <input
          className={styles.input}
          name="query"
          placeholder="Enter Any Name To Show Photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {photos.length <= 0 ? (
        <div className={styles.noPic}>
          <h1>No Pic...</h1>
        </div>
      ) : (
        <div className={styles.contain}>
          <div className={styles.btns}>
            {pages <= 1 ? (
              <button className={styles.nobtn} disabled>
                Prev
              </button>
            ) : (
              <button
                className={styles.btn}
                onClick={() => setPages(pages - 1)}
              >
                Prev
              </button>
            )}
            <div className={styles.page}>Page - {pages}</div>
            <button className={styles.btn} onClick={() => setPages(pages + 1)}>
              Next
            </button>
          </div>
          <div className={styles.picContain}>
            {photos.map((pic) => {
              return (
                <div className={styles.pics} key={pic.id}>
                  <Link to={`/details/${pic.id}`}>
                    <img className={styles.img} src={pic.urls.regular} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
