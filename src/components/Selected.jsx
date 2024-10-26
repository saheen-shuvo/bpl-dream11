import PropTypes from "prop-types";
export default function Selected({ selectedPlayers, handleDelete }) {
  return (
    <div className="mt-6 mx-2 lg:mx-20">
      Selected Players: {selectedPlayers.length}
      <div>
        {selectedPlayers.map((player, index) => (
          <div
            key={index}
            className="border-2 rounded-lg my-3 flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <img
                className="w-24 h-24 rounded-lg m-2 object-cover object-top"
                src={player.image}
                alt=""
              />
              <div>
                <h4 className="text-xl font-semibold">{player.name}</h4>
                <h4 className="text-sm">{player.role}</h4>
              </div>
            </div>
            <div className="mr-8">
              <button onClick={() => handleDelete(player.playerId)}>
                <i className="fa-regular fa-trash-can text-2xl text-red-700"></i>
              </button>
            </div>
          </div>
        ))}
        <button className="bg-green-900 mt-5 py-3 px-4 rounded-xl text-white outline outline-2 outline-green-900 outline-offset-4 font-semibold">
          Add More Player
        </button>
      </div>
    </div>
  );
}

Selected.propTypes = {
  selectedPlayers: PropTypes.func,
  handleDelete: PropTypes.func,
};
