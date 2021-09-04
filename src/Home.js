import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_2x._CB667161802_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123456"
          title="Crime and Punishment (Wordsworth Classics)"
          price={4.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41AM6pjaZhL.jpg"
        />
        <Product
          id="123456"
          title="Anna Karenina (Wordsworth Classics)"
          price={17.45}
          rating={4}
          image="https://m.media-amazon.com/images/I/61hlBIot81L._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123456"
          title="Peter Pan"
          price={12.55}
          rating={4}
          image="https://m.media-amazon.com/images/I/41kEZFlkgoL._AC_UY218_.jpg"
        />
        <Product
          id="123456"
          title="Dracula: Unabridged and Fully Illustrated"
          price={7.15}
          rating={5}
          image="https://m.media-amazon.com/images/I/71EFaIUUbfL._AC_UY218_.jpg"
        />
        <Product
          id="123456"
          title="Crime and Punishment (Dover Thrift Editions)"
          price={15.95}
          rating={3}
          image="https://kbimages1-a.akamaihd.net/c8f66724-16c7-4e30-ab42-2e205435eb20/1200/1200/False/crime-and-punishment-by-fyodor-dostoyevsky.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123456"
          title="The Diary Of Anne Frank"
          price={8.75}
          rating={5}
          image="https://m.media-amazon.com/images/I/91PJMiZ-rfL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
