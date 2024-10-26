import PropTypes from "prop-types";
export default function CardsContainer({ handleIsActiveState, isActive }) {
  return (
    <div>
      <div className="flex items-center justify-between mt-6 mx-2 lg:mx-20">
        <h1 className="text-base lg:text-2xl font-semibold">
          Available Players
        </h1>
        <div className="flex">
          <button
            onClick={() => handleIsActiveState("card")}
            className={`${
              isActive.card
                ? "rounded-l-lg border-l-2 border-y-2 border-yellow-400 bg-yellow-400 px-3 py-2"
                : "rounded-l-lg border-l-2 border-y-2 border-yellow-400 px-3 py-2"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActiveState("selected")}
            className={`${
              isActive.card
                ? "rounded-r-lg border-r-2 border-y-2 border-yellow-400 px-3 py-2"
                : "rounded-r-lg border-r-2 border-y-2 border-yellow-400 px-3 py-2 bg-yellow-400"
            }`}
          >
            Selected
          </button>
        </div>
      </div>
    </div>
  );
}
CardsContainer.propTypes = {
  handleIsActiveState: PropTypes.func,
  isActive: PropTypes.func,
};
