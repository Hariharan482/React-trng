// import style from  './style.module.css';
import Header from '../components/headerComponent/headerComp';
import Footer from '../components/footerComponent/footerComp';
import ManyWonders from '../components/explorerComp/explorer';
import TouristClass from '../components/cardComponent/touristComp';


function Homepage() {
    return (
      <> 
        <Header/>
        <ManyWonders/>
        <TouristClass/>
        <Footer/>
      </>
    );
}

export default Homepage;
