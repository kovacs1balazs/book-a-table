import "../App.css";
import Introduction from "../components/IntroductionComponent";
import Header from "../components/Header";
import BackgroundSwitcher from "../components/BackgroundComponent";
import OrderButton from "../components/BookingButtonComponent";
import Menu from "../components/Menu";
import Data from "../data";


// const data = MenuData;

function Home() {
  const pizza = Data.map((item) => {
    return <Menu key={item.id} {...item} />;
  });

  return (
    <div>      
      <Header />
      <div className="flexDiv">
        <Introduction />
        <h1 className="menu-title">MENÜ</h1>
        <section className="menu-container">{pizza}</section>
        <OrderButton />
      </div>
    </div>
  );
}

export default Home;
