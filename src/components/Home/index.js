import Footer from "../Layouts/Footer"
import Navbar from "../Layouts/Navbar"
import ProductList from "../ProductList"
import HeroSection from "./HeroSection"

const Home = () => {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <ProductList />
        <Footer />
      </div>
    );
}

export default Home
