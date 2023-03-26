import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
    <div className="home">
      <main>
        <h1>Immoonn</h1>
        <p>Solution to all your problem</p>
      </main>
    </div>
    <div className="home2">
      <img src={"https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="graphics" />
      <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatum, atque voluptas. Error nam adipisci animi delectus maxime at totam.
            laboriosam vel! Aliquid rerum aspernatur eaque tempore animi
            quisquam dicta alias.
            </p>
      </div>
    </div>
    </>
  );
};

export default Home;
