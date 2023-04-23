// import style from  './style.module.css';
import tourist from '../data/places.json';
import Header from '../components/headerComponent/headerComp';
import Footer from '../components/footerComponent/footerComp';
import ManyWonders from '../components/explorerComp/explorer';
import TouristClass from '../components/cardComponent/touristComp';

function Homepage() {
    console.log(tourist);
    return (
      <> 
        <Header/>
        <ManyWonders/>
        <TouristClass data={tourist}/>
        <Footer/>
      </>
    );
  }

export default Homepage;
