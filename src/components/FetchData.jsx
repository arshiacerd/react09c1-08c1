import { useEffect, useState } from "react";

const FetchData = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setproducts(data.products));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <h3>{product.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
