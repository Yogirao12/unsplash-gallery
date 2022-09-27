import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { photo } from "../api";
import styles from "../styles/detail.module.css";

function Detail() {
  const [mypic ,setPic] = useState(null);
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    const pic = async () => {
      const url = photo(params.id);
      const response = await fetch(url);
      const data = await response.json();
      setPic(data);
      console.log(data.urls);
      
      console.log(mypic);
      
    };
    pic();
  }, []);

  return(
    <>
    {mypic?
    <div className={styles.container}>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={mypic.urls.regular}/>
      </div>
      <div className={styles.details}>
        <div>"alt_description : " {mypic.alt_description}</div>
        <div>"description : "{mypic.description}</div>
        <div>"likes : "{mypic.likes}</div>
      </div>
    </div>:
    (
      <div>null</div>
    )
}
    </>
)}

export default Detail;
