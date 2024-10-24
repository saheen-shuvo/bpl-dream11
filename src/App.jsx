import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Players from "./components/Players";

const App = () => {
  return (
    <div>
      {/* Nav Bar */}
      <Navbar></Navbar>
      {/* Banner */}
      <Banner></Banner>
      {/* Players */}
      <Players></Players>
      {/* Cards */}
      <Cards></Cards>
    </div>
  );
};

export default App;
