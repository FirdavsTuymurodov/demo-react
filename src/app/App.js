import "./App.css";
import CardContainer from "../components/CardContainer/CardContainer";
import Feed from "../components/Feed/Feed";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Counter from "../components/Counter/Counter";
import Changer from "../components/Changer/Changer";
import { useState } from "react";

function App() {
  // const [showCard, setShowCard] = useState(true);
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Feed />
      <Changer showCounter={showCounter} setShowCounter={setShowCounter} />
      {showCounter ? <Counter /> : <CardContainer />}{" "}
      {/* Conditional Rendering*/}
      {/* <div className="cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
