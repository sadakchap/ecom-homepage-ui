import ProductContextProvider from "../../context/products"
import Footer from "../Layouts/Footer"
import Navbar from "../Layouts/Navbar"
import ProductList from "../ProductList"
import HeroSection from "./HeroSection"

const Home = () => {
    return (
      <div>
        <Navbar />
        <ProductContextProvider>
          <HeroSection />
          <ProductList />
        </ProductContextProvider>
        <Footer />
      </div>
    );
}

export default Home
