import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import { Helmet } from "react-helmet";
import { Card } from "antd";
import { getDatasID } from "../../api/httpsrequests";
function Details() {

  const[prod,setProd]=useState({})
  const { id } = useParams()

  useEffect(()=>{
    getDatasID(id)
    .then(res=>{
      setProd(res)
    })
  },[id])

  return (
    <>
      <Helmet>
        <title>Detail</title>
        <meta name="description" content="Helmet application" />
      </Helmet>


     <section className="detailsec">
     <Card
              md={8}
              sm={24}
              xs={24}
              lg={8}
              xl={8}
              key={prod._id}
              className="cards"
              hoverable="true"
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={prod.imageURL} />}
            >
              <p
                style={{
                  width: "100px",
                  height: "30px",
                  border: "1px solid black",
                  backgroundColor: "black",
                  color: "white",
                  padding: "3px 6px",
                }}
              >
                {prod.name}
              </p>
              <p className="prghov">{prod.price}</p>
              <p>{prod.desc}</p>
              <div style={{ display: "flex", gap: "20px" }}></div>
            </Card>
     </section>
    </>
  );
}

export default Details;
