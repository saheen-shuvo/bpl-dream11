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
    status: "active"
  })

  const handleIsActiveState = (status) => {
    if(status == "card"){
      setIsActive({
        card: true,
        status: "active"
      })
    }
    else{
      setIsActive({
        card: false,
        status: "selected"
      })
    }
  }

const [selectedPlayers, setSelectedPlayers] = useState([])
const [deletedPlayer, setDeletedPlayer] = useState([])

const addPlayerToSelected = player => {
  const isExist = selectedPlayers.find(previousPlayer => previousPlayer.playerId === player.playerId)
  if (!isExist){
    setSelectedPlayers([...selectedPlayers, player])
  }
  else{
    alert(`${player.name} Already Selected`)
  }
}

const handleDelete = id =>{
const deletedPlayers = selectedPlayers.find(player => player.playerId === id)

const updatedPlayers = selectedPlayers.filter(player => player.playerId !== id)
setSelectedPlayers(updatedPlayers)
setDeletedPlayer([...deletedPlayer, deletedPlayers])
}

  return (
    <div>
      {/* Nav Bar */}
      <Navbar></Navbar>
      {/* Banner */}
      <Banner></Banner>
      {/* Cards */}
      <CardsContainer isActive={isActive} handleIsActiveState={handleIsActiveState}></CardsContainer>
      <Cards addPlayerToSelected={addPlayerToSelected}></Cards>
      {/* Selected Players */}
      <Selected handleDelete={handleDelete} selectedPlayers={selectedPlayers}></Selected>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;
