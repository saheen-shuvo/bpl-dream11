import { useState } from "react";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardsContainer from "./components/CardsContainer";
import Selected from "./components/Selected";

const App = () => {
  const [isActive, setIsActive] = useState({
    card: true,
    status: "active",
  });

  const handleIsActiveState = (status) => {
    if (status == "card") {
      setIsActive({
        card: true,
        status: "active",
      });
    } else {
      setIsActive({
        card: false,
        status: "selected",
      });
    }
  };

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [deletedPlayer, setDeletedPlayer] = useState([]);
  const [price, setPrice] = useState([parseInt(80000)]);

  const handleClaimCredits = (cre) => {
    setPrice(parseInt(price) + parseInt(cre));
    alert("Congratulations, You Got Some Credits!");
  };

  const handleIncreasePrice = (pr) => {
    setPrice(parseInt(price) - parseInt(pr));
  };
  const handleDecreasePrice = (id) => {
    const player = selectedPlayers.find((player) => player.playerId == id);
    setPrice(parseInt(player.biddingPrice) + parseInt(price));
  };

  console.log(price);

  const addPlayerToSelected = (player) => {
    const isExist = selectedPlayers.find(
      (previousPlayer) => previousPlayer.playerId === player.playerId
    );
    const selectionLimit = selectedPlayers.length > 5;
    if (isExist) {
      alert(`${player.name} Already Selected`);
      return;
    }
    if (selectionLimit) {
      alert("Sorry, Maximum Selection Reached!");
      return;
    }
    handleIncreasePrice(player.biddingPrice);
    setSelectedPlayers([...selectedPlayers, player]);
  };

  const handleDelete = (id) => {
    handleDecreasePrice(id);
    const deletedPlayers = selectedPlayers.find(
      (player) => player.playerId === id
    );

    const updatedPlayers = selectedPlayers.filter(
      (player) => player.playerId !== id
    );
    setSelectedPlayers(updatedPlayers);
    setDeletedPlayer([...deletedPlayer, deletedPlayers]);
  };

  return (
    <div>
      {/* Nav Bar */}
      <Navbar price={price}></Navbar>
      {/* Banner */}
      <Banner price={price} handleClaimCredits={handleClaimCredits}></Banner>
      {/* Cards */}
      <CardsContainer
        isActive={isActive}
        handleIsActiveState={handleIsActiveState}
      ></CardsContainer>
      <Cards addPlayerToSelected={addPlayerToSelected}></Cards>
      {/* Selected Players */}
      <Selected
        handleDelete={handleDelete}
        selectedPlayers={selectedPlayers}
      ></Selected>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;
