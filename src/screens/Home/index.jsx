import React from "react";
import LandingPage from "../../components/LandingPage";
import FullWidthSlider from "../../components/slider/fullWidthSlider";
import "./index.scss";
import Jai_Bhim from "../../assets/images/jai-bhim-official.webp";
import ImageCard from "../../components/card/imageCard/imageCard";
import ImageContentCard from "../../components/card/imageContentCard/imageContentCard";
import ListingCard from "../../components/card/listingCard/listingCard";
import Surya from "../../assets/images/surya.jpg";
import rajisha from "../../assets/images/rajisha.jpg";
import drBrain from "../../assets/images/drBrain.jpg";
export const imageList = [
  {
    id: "1",
    image: drBrain,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "2",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "3",
    image: Jai_Bhim,
    data: {
      content: `
    The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "4",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "5",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "6",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "7",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "8",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "9",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "10",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "11",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "12",
    image: Jai_Bhim,
    data: {
      content: `
    The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "13",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "14",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "15",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "16",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "17",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "18",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "19",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
  {
    id: "20",
    image: Jai_Bhim,
    data: {
      content: `
      The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives`,
      cast: [
        { img: Surya, name: "Surya" },
        {
          img: rajisha,
          name: "Rajisha",
        },
        {
          img: Surya,
          name: "Surya",
        },
      ],
      subContent: `Starring Lee Sun-Kyun, You-young Lee, Park Hee-soon`,
    },
  },
];
// const imageContentList = [
//   {
//     image: Jai_Bhim,
//     number: 1,
//     title: "See",
//     subTitle: "Drama",
//   },
//   {
//     image: Jai_Bhim,
//     number: 2,
//     title: "See",
//     subTitle: "Drama",
//   },
//   {
//     image: Jai_Bhim,
//     number: 3,
//     title: "See",
//     subTitle: "Drama",
//   },
//   {
//     image: Jai_Bhim,
//     number: 4,
//     title: "See",
//     subTitle: "Drama",
//   },
//   {
//     image: Jai_Bhim,
//     number: 5,
//     title: "See",
//     subTitle: "Drama",
//   },
//   {
//     image: Jai_Bhim,
//     number: 6,
//     title: "See",
//     subTitle: "Drama",
//   },
//   {
//     image: Jai_Bhim,
//     number: 7,
//     title: "See",
//     subTitle: "Drama",
//   },
//   {
//     image: Jai_Bhim,
//     number: 8,
//     title: "See",
//     subTitle: "Drama",
//   },
//   {
//     image: Jai_Bhim,
//     number: 9,
//     title: "See",
//     subTitle: "Drama",
//   },
//   {
//     image: Jai_Bhim,
//     number: 10,
//     title: "See",
//     subTitle: "Drama",
//   },
//   {
//     image: Jai_Bhim,
//     number: 11,
//     title: "See",
//     subTitle: "Drama",
//   },
//   {
//     image: Jai_Bhim,
//     number: 12,
//     title: "See",
//     subTitle: "Drama",
//   },
// ];
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
const listingCard = [
  {
    content: [
      {
        image: Jai_Bhim,
        number: 1,
        title: "See",
        subTitle: "Drama",
      },
      { image: Jai_Bhim, number: 2, title: "See", subTitle: "Drama" },
      {
        image: Jai_Bhim,
        number: 3,
        title: "See",
        subTitle: "Drama",
      },
    ],
  },
  {
    content: [
      {
        image: Jai_Bhim,
        number: 4,
        title: "See",
        subTitle: "Drama",
      },
      { image: Jai_Bhim, number: 5, title: "See", subTitle: "Drama" },
      {
        image: Jai_Bhim,
        number: 6,
        title: "See",
        subTitle: "Drama",
      },
    ],
  },
  {
    content: [
      {
        image: Jai_Bhim,
        number: 7,
        title: "See",
        subTitle: "Drama",
      },
      { image: Jai_Bhim, number: 8, title: "See", subTitle: "Drama" },
      {
        image: Jai_Bhim,
        number: 9,
        title: "See",
        subTitle: "Drama",
      },
    ],
  },
  {
    content: [
      {
        image: Jai_Bhim,
        number: 10,
        title: "See",
        subTitle: "Drama",
      },
      { image: Jai_Bhim, number: 11, title: "See", subTitle: "Drama" },
      {
        image: Jai_Bhim,
        number: 12,
        title: "See",
        subTitle: "Drama",
      },
    ],
  },
];
const HomePage = () => {
  return (
    <div className="homeContainer">
      <div>
        <LandingPage />
      </div>
      <div>
        <FullWidthSlider id="slide1" title="Watch Premieres for Free">
          {imageList.map((item) => (
            <ImageCard img={item.image} data={item.data} id={item.id} />
          ))}
        </FullWidthSlider>
      </div>
      <div>
        <FullWidthSlider id="slide3" title="Most Popular Now">
          {listingCard.map((item) => (
            <ListingCard data={item} />
          ))}
        </FullWidthSlider>
      </div>
      <div>
        <FullWidthSlider id="slide2" title="Watch Entire Season">
          {imageContentList.map((item) => (
            <ImageContentCard data={item} />
          ))}
        </FullWidthSlider>
      </div>
    </div>
  );
};

export default HomePage;
