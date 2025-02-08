import { useState } from "react";
import CardComponent from "../components/Card/Card";
import Layout from "../layouts/layout";
import food1 from "../assets/img/food/food1.png";
import food2 from "../assets/img/food/food2.png";
import food3 from "../assets/img/food/food3.png";
import food4 from "../assets/img/food/food4.png";
import food5 from "../assets/img/food/food5.png";

import mov1 from "../assets/img/movies/img1.jpg";
import mov2 from "../assets/img/movies/img2.jpg";
import mov3 from "../assets/img/movies/img3.jpg";
import mov4 from "../assets/img/movies/img4.jpg";
import mov5 from "../assets/img/movies/img5.png";
import mov6 from "../assets/img/movies/img6.png";

import img1 from "../assets/img/cat-jump.gif";
import HeartButton from "../components/HeartButton/HeartButton";
import { pink } from "../components/interfaces/HeartButton.interface";
import HeartSlider from "../components/Heart/Heart";
import { useNavigate } from "react-router";

const Date = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "food"
  );
  const navigate = useNavigate();

  const handleCardClick = (index: number) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(
        selectedCards.filter((cardIndex) => cardIndex !== index)
      );
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const getTitle = () => {
    switch (selectedCategory) {
      case "food":
        return "What do you want to eat ?";
      case "movie":
        return "What do you want to see first ?";
      default:
    }
  };

  const nextQuestion = () => {
    if (selectedCategory === "rate") {
      navigate("/thankyou");
    } else {
      if (selectedCategory === "movie") {
        setSelectedCategory("rate");
      } else {
        setSelectedCategory("movie");
      }
    }
    setSelectedCards([]);
  };

  const foodData = [
    {
      title: "TOKYO TOKYO",
      image: food1,
    },
    {
      title: "POPEYES",
      image: food2,
    },
    {
      title: "McDONALDS",
      image: food3,
    },
    {
      title: "KFC",
      image: food4,
    },
    {
      title: "CHOWKING",
      image: food5,

    },
  ];

  const movieData = [
    {
          title: "Oceanarium",
      image: mov1,
    },
    {
      title: "Trails to Antartica",
      image: mov2,
    },
    {
        title: "World of Creepy Crawlies",
      image: mov3,
    },
    {
        title: "Stingray Dry Encounter",
      image: mov4,
    },
    {
      title: "Sea Lion Show",
      image: mov5,
    },
    {
        title: "All Star Bird Show",
      image: mov6,
    },
  ];

  return (
    <Layout>
      <h1 style={{ color: pink }}>{getTitle()}</h1>
      <main className="d-flex flex-wrap justify-content-center mt-3">
        {selectedCategory === "food" &&
          foodData.map((card, index) => (
            <div key={index} className="m-2">
              <CardComponent
                title={card.title}
                image={card.image}
                isSelected={selectedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        {selectedCategory === "movie" &&
          movieData.map((card, index) => (
            <div key={index} className="m-2">
              <CardComponent
                title={card.title}
                image={card.image}
                isSelected={selectedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        {selectedCategory === "rate" && (
          <>
            <div className="d-flex flex-column justify-content-center">
              <img
                className="m-auto"
                src={img1}
                alt="Image 1"
                style={{
                  width: "300px",
                  marginBottom: "20px",
                  borderRadius: "15px",
                }}
              />
              <h1 style={{ color: pink }} className="py-3">
                              Rate how exited are you? (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ
              </h1>
            </div>
            <HeartSlider></HeartSlider>
          </>
        )}
      </main>
      <HeartButton
        style={{
          width: "100%",
          maxWidth: "300px",
          margin: "0 auto",
          marginTop: "2rem",
        }}
              text="Continue ( > 〰 < )♡"
        onClick={nextQuestion}
      />
    </Layout>
  );
};

export default Date;
