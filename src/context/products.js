import { toast } from "react-toastify";

const { default: axios } = require("axios");
const { createContext, useState, useEffect, useContext } = require("react");

const ProductContext = createContext();

const ProductContextProvider = (props) => {
    
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

    return (
        <ProductContext.Provider value={{products, isLoading}}  >
            {props.children}
        </ProductContext.Provider>
    )
};

export const useProductContext = () => useContext(ProductContext);
export default ProductContextProvider;