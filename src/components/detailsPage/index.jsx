import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { imageList } from "../../screens/Home";
import ImageContentCard from "../card/imageContentCard/imageContentCard";
import FullWidthSlider from "../slider/fullWidthSlider";
import "./index.scss";
import Jai_Bhim from "../../assets/images/jai-bhim-official.webp";
import ImageCard from "../card/imageCard/imageCard";

const DetailsPage = () => {
  //   const [data, setData] = useState();

  const { id } = useParams();
  let list = imageList.filter((item) => item.id === id);
  //   setData(list);
  const data = list[0].data;
  console.log(list, "data");
  //   setData(list);
  const imageContentList = [
    {
      image: Jai_Bhim,
      number: "COMEDY",
      title: "The Problem With Jon",
      subTitle: "Drama",
    },
    {
      image: Jai_Bhim,
      number: "KIDS AND FAMILY",
      title: "Hello! Jack",
      subTitle: "Drama",
    },
    {
      image: Jai_Bhim,
      number: "DRAMA",
      title: "The Problem With Jon",
      subTitle: "Drama",
    },
    {
      image: Jai_Bhim,
      number: "COMEDY",
      title: "Hello! Jack",
      subTitle: "Drama",
    },
    {
      image: Jai_Bhim,
      number: "KIDS AND FAMILY",
      title: "The Problem With Jon",
      subTitle: "Drama",
    },
    {
      image: Jai_Bhim,
      number: "DRAMA",
      title: "Hello! Jack",
      subTitle: "Drama",
    },
    {
      image: Jai_Bhim,
      number: "KIDS AND FAMILY",
      title: "The Problem With Jon",
      subTitle: "Drama",
    },
    {
      image: Jai_Bhim,
      number: "DRAMA",
      title: "Hello! Jack",
      subTitle: "Drama",
    },
    {
      image: Jai_Bhim,
      number: "COMEDY",
      title: "The Problem With Jon",
      subTitle: "Drama",
    },
    {
      image: Jai_Bhim,
      number: "KIDS AND FAMILY",
      title: "Hello! Jack",
      subTitle: "Drama",
    },
    {
      image: Jai_Bhim,
      number: "COMEDY",
      title: "The Problem With Jon",
      subTitle: "Drama",
    },
    {
      image: Jai_Bhim,
      number: "KIDS AND FAMILY",
      title: "Hello! Jack",
      subTitle: "Drama",
    },
  ];
  return (
    <div className="detailsContainer">
      <div className="detailsImage">
        <img src={list[0].image} />
        <div className="detailsImageData">
          <div className="detailsButtonContainer">
            <div className="detailsButton">Play Free Episode</div>
            <div className="detailsButton">Get Apple Tv+</div>
            <div className="detailsButton">+ Add to Up Next</div>
          </div>
          <div className="imageData">{data.content}</div>
          <div className="imageData">{data.subContent}</div>
        </div>
      </div>
      <div>
        <FullWidthSlider id="slide2" title="Season 1">
          {imageContentList.map((item) => (
            <ImageContentCard data={item} />
          ))}
        </FullWidthSlider>
      </div>

      <div>
        <FullWidthSlider id="slide1" title="Related">
          {imageList.map((item) => (
            <ImageCard img={item.image} data={item.data} id={item.id} />
          ))}
        </FullWidthSlider>
      </div>
      <div className="CastContainer">
        <div style={{ paddingLeft: "30px", fontWeight: "bold" }}>
          Cast & Crew
        </div>
        <div className="detailsCastContainer">
          {data.cast.map((item) => {
            return (
              <div className="detailsCast">
                <img src={item.img} />
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
