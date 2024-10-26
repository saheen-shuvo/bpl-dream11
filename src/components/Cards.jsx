import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Cards = ({addPlayerToSelected}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/playersData.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);

  return (
    <div id="available-section">
      <h1 className="mx-2 lg:mx-20 font-semibold text-sm lg:text-2xl mt-[-35px] mb-10">Available Players</h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mx-2 lg:mx-20">
      {players.map((player) => (
        <div key={player.id} className="card bg-base-100 shadow-xl border-2">
        <figure>
          <img className="w-full h-96 object-cover object-top rounded-lg m-4"
            src={player.image}
            alt="Players" />
        </figure>
        <div className="card-body pt-0 mt-0">
          <h2 className="card-title text-2xl font-bold"><i className="fa-regular fa-circle-user"></i>{player.name}</h2>
          <div className="flex justify-between">
          <h2 className="card-title text-sm text-gray-600"><i className="fa-solid fa-globe"></i>{player.country}</h2>
          <button className=" text-sm rounded-md px-3 py-2">{player.role}</button>
          </div>
          <hr />
          <h4 className="text-lg font-semibold">Rating</h4>
          <div className="flex justify-between">
            <h3 className="font-semibold">{player.battingType}</h3>
            <h3 className="font-medium">{player.bowlingType}</h3>
          </div>
          <div className="flex justify-between">
          <h3 className="font-medium">${player.biddingPrice}</h3>
          <button onClick={() => addPlayerToSelected(player)} className="border-2 border-green-900 hover:bg-slate-200 px-2 py-1 rounded-md text-sm font-semibold">Choose Player</button>
          </div>
        </div>
      </div>
      ))}
    </div>
    </div>
  );
};

Cards.propTypes ={
  addPlayerToSelected: PropTypes.func
}

export default Cards;
