import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Card } from "antd";
import { getAllDatas } from "../../api/httpsrequests";
import { deleteDatasByID } from "../../api/httpsrequests";
import {Link} from "react-router-dom"

// import Button from '@mui/material/Button';

function Home() {
  const [datas, setData] = useState([]);
  const [input,setInput] = useState('')

  useEffect(() => {
    getAllDatas().then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

    function handleChange(e){
      setInput(e.target.value)
    }
    function handleDelete(id){
      deleteDatasByID(id);
      setData(datas.filter((x)=>x._id!==id));
    }

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      {/* MAIN */}

      <main className="image-hero">
        <div className="titlewords">
          <p>PROCESS VISA WITHOUT WITHIN HOURS</p>
          <h1>Immigrations &</h1>
          <h1>Visa Consultation</h1>
          <button className="bookbtn">BOOK CONSULTANCY</button>
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/immigration/img/header-img.png.webp"
            alt="mainimage"
          />
        </div>
      </main>

      <div className="firsttitle">
        <h1 style={{ fontSize: "45px" }}>Requirements to be Immigrants</h1>
        <p style={{ color: "gray", fontSize: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt
        </p>
        <p style={{ color: "gray", fontSize: "20px" }}>
          ut labore et dolore magna aliqua.
        </p>
      </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"}}>
    <input onChange={(e)=>{handleChange(e)}} className="search" type="search" name="search" placeholder="Search" />
    </div>
      <section className="card">
        {datas &&
          datas.filter((item)=>{
            if(item===''){
              return datas
            }
            else if(item.name.toLowerCase().trim().includes(input.toLowerCase().trim())){
              return item
            }
          }).map((d) => (
            <Card
              md={8}
              sm={24}
              xs={24}
              lg={8}
              xl={8}
              key={d._id}
              className="cards"
              hoverable="true"
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={d.imageURL} />}
            >
              <Link to={`/detail/${d._id}`}><p
              className="inp"
                style={{
                  width: "100px",
                  height: "30px",
                  border: "1px solid black",
                  backgroundColor: "black",
                  color: "white",
                  padding: "3px 6px",
                }}
              >
                {d.name}
              </p></Link>
              <p >Price: {d.price}</p>
              <p className="desc">{d.desc}</p>
              <button onClick={()=>handleDelete(d._id)} className="btndelete">DELETE</button>
              <div style={{ display: "flex", gap: "20px" }}></div>
            </Card>
          ))}
      </section>

      <div className="firsttitle">
        <h1 style={{ fontSize: "35px" }}>
          Our Unique Features that can impress you
        </h1>
        <p style={{ color: "gray", fontSize: "20px" }}>
          Who are in extremely love with eco friendly system.
        </p>
      </div>

      <section className="boxess">
        <Card md={8} sm={24} xs={24} lg={8} xl={8} hoverable="true">
          <h3><i class="fa-regular fa-user"></i> Expert Technicians</h3>
          <p>Usage of the Internet is becoming more</p>
          <p>common due to rapid advancement of</p>
          <p>technology and power.</p>
        </Card>
        <Card md={8} sm={24} xs={24} lg={8} xl={8} hoverable="true">
          <h3><i class="fa-regular fa-newspaper"></i> Professional Service</h3>
          <p>Usage of the Internet is becoming more</p>
          <p>common due to rapid advancement of</p>
          <p>technology and power.</p>
        </Card>
        <Card md={8} sm={24} xs={24} lg={8} xl={8} hoverable="true">
          <h3><i class="fa-solid fa-blender-phone"></i> Great Support</h3>
          <p>Usage of the Internet is becoming more</p>
          <p>common due to rapid advancement of</p>
          <p>technology and power.</p>
        </Card>
        <Card md={8} sm={24} xs={24} lg={8} xl={8} hoverable="true">
          <h3><i class="fa-solid fa-rocket"></i> Technical Skills</h3>
          <p>Usage of the Internet is becoming more</p>
          <p>common due to rapid advancement of</p>
          <p>technology and power.</p>
        </Card>
        <Card md={8} sm={24} xs={24} lg={8} xl={8} hoverable="true">
          <h3><i class="fa-solid fa-parachute-box"></i> Highly Recomended</h3>
          <p>Usage of the Internet is becoming more</p>
          <p>common due to rapid advancement of</p>
          <p>technology and power.</p>
        </Card>
        <Card md={8} sm={24} xs={24} lg={8} xl={8} hoverable="true">
          <h3><i class="fa-regular fa-comment"></i> Positive Reviews</h3>
          <p>Usage of the Internet is becoming more</p>
          <p>common due to rapid advancement of</p>
          <p>technology and power.</p>
        </Card>
      </section>

      <div className="firsttitle">
        <h1 style={{ fontSize: "40px" }}>How Our Customers Treat Us</h1>
        <p style={{ color: "gray", fontSize: "18px" }}>
          Who are in extremely love with eco friendly system.
        </p>
      </div>

      {/* TWOCARDS */}

      <section className="twocards">
        <Card
          md={8}
          sm={24}
          xs={24}
          lg={8}
          xl={8}
          hoverable="true"
          style={{
            width: 440,
          }}
          cover={
            <img
              alt="example"
              src="https://preview.colorlib.com/theme/immigration/img/b1.jpg"
            />
          }
        >
          <div>
          <div className="btndiv">
            <button className="btn">Travel</button>
            <button className="btn">Life Style</button>
          </div>
            <h3 style={{fontSize:"20px"}}>Portable latest Fashion for young women</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
            <p>tempor incididunt ut labore et dolore.</p>
            <p>31st January, 2018</p>
          </div>
        </Card>
        <Card
          md={8}
          sm={24}
          xs={24}
          lg={8}
          xl={8}
          hoverable="true"
          style={{
            width: 440,
          }}
          cover={
            <img
              alt="example"
              src="https://preview.colorlib.com/theme/immigration/img/b2.jpg"
            />
          }
        >
          <div className="btndiv">
            <button className="btn">Travel</button>
            <button className="btn">Life Style</button>
          </div>
          <h3 style={{fontSize:"20px"}}>Portable latest Fashion for young women</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </p>
          <p>tempor incididunt ut labore et dolore.</p>
          <p>31st January, 2018</p>
        </Card>
      </section>
    </>
  );
}

export default Home;
