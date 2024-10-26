import { useState } from "react";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardsContainer from "./components/CardsContainer";
import Selected from "./components/Selected";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [price, setPrice] = useState([parseInt(0)]);
  const [tabs, setTabs] = useState("AvailablePlayer");

  const handleClaimCredits = () => {
    setPrice(parseInt(price) + parseInt(80000));
    toast.success("Congratulations, You Got Some Credits!", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
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
      toast.warn(`${player.name} Already Selected`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    if (selectionLimit) {
      toast.warn("Sorry, Maximum Selection Reached!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    if (price < player.biddingPrice) {
      toast.warn("Sorry, You Have Insufficient Credits", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
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
        setTabs={setTabs}
        handleIsActiveState={handleIsActiveState}
      ></CardsContainer>

      {tabs === "AvailablePlayer" ? (
        <Cards addPlayerToSelected={addPlayerToSelected}></Cards>
      ) : (
        <Selected
        handleIsActiveState={handleIsActiveState}
          handleDelete={handleDelete}
          setTabs={setTabs}
          selectedPlayers={selectedPlayers}
        ></Selected>
      )}

      {/* <Newsletter></Newsletter> */}
      {/* Footer */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
