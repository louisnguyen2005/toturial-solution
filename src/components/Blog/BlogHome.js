import React from "react";

import Slide from "../slide/Slide";
import Card from "./Card";
import Footer from "../footer/Footer";
import CardTow from "./CardTow";

const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "YOU CAN CHANGE THE WORLD",
      titletwo: "STRONG STYLE",
      paraOne: "How Women are Redirecting Hollywood",
      paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
      name: "By Jasmin Smith",
      subTitle: "How to Shop Mindfully",
      qrCode: "/images/qrcode.png",
      cover: "/Images/blog5.jpg",
    },
  ];
  return (
    <>
      <section className="home">
        <div className="left-content">
          {data.map((value) => {
            return (
              <div className="content">
                <div className="logo">
                  <h1>W</h1>
                </div>

                <div className="home-img">
                  <img src={value.cover} />
                </div>

                <div className="text">
                  <h1>{value.titleOne}</h1>
                  <p>{value.paraOne}</p>
                  <span>{value.name}</span>
                </div>

                <div className="text text2">
                  <h1>{value.titletwo}</h1>
                  <p>{value.paraTwo}</p>
                  <span>{value.subTitle}</span>
                </div>

                <div className="qrcode">
                  <img
                    src={value.qrCode}
                    style={{
                      width: "13%",
                      height: "13%",
                      border: "5px solid white",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-content">
          <Slide />
          <Card />
          <CardTow />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default BlogHome;
