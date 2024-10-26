import PropTypes from "prop-types";
export default function CardsContainer({ handleIsActiveState, isActive, setTabs}) {
  return (
    <div>
      <div className="flex items-center justify-between mt-6 mx-2 lg:mx-20">
        <h1 className="text-base lg:text-2xl font-semibold">
        </h1>
        <div className="flex">
          <button
            onClick={() => {handleIsActiveState("card") ; setTabs("AvailablePlayer")}}
            className={`${
              isActive.card
                ? "rounded-l-lg border-l-2 border-y-2 border-green-900 bg-green-900 px-3 py-2 text-white font-semibold"
                : "rounded-l-lg border-l-2 border-y-2 border-green-900 px-3 py-2"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => {handleIsActiveState("selected") ; setTabs("selected")}}
            className={`${
              isActive.card
                ? "rounded-r-lg border-r-2 border-y-2 border-green-900 px-3 py-2"
                : "rounded-r-lg border-r-2 border-y-2 border-green-900 px-3 py-2 bg-green-900 text-white"
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
  setTabs: PropTypes.func,
};
