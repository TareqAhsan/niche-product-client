import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios("https://fast-ravine-78519.herokuapp.com/products").then((result) => {
      // console.log(result.data)
      setProducts(result.data);
    });
  }, [products]);
  return { products };
};

export default useProducts;
