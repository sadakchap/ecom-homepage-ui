import { toast } from "react-toastify";

const { default: axios } = require("axios");
const { createContext, useState, useEffect, useContext } = require("react");

const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_MOCK_API_ENDPOINT}/products`;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        setIsLoading(false);
      });
  }, []);

  const filterProducts = (text) => {
    const regex = new RegExp(text, "i");
    if (text.trim() === "") {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(
        products.filter(
          (product) =>
            regex.test(product.name) || regex.test(product.description)
        )
      );
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, isLoading, filterProducts, filteredProducts }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
export default ProductContextProvider;
