// import style from  './style.module.css';
import tourist from '../data/places.json';
import Header from '../components/headerComponent/headerComp';
import Footer from '../components/footerComponent/footerComp';
import SimilarDestinations from '../components/similiarDestComponent/similarDestinations';
import Details from '../components/detailsComponent/detailsComp';

function Detailspage() {
    return (
      <> 
        <Header/>
        <Details />
        <SimilarDestinations />
        <Footer/>
      </>
    );
  }

export default Detailspage;
