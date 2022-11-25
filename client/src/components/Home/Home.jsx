import Cards from "../Cards/Cards";
import NavBar from "../NavBar/Navbar";
import Style from "./Home.module.css";

const Home = () => {
  return (
    <div className={Style.body}>
      <NavBar />
      <Cards />
    </div>
  );
};
export default Home;
