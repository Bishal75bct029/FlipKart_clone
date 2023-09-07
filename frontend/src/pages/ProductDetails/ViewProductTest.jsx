import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { fetchProduct } from '../../../../server/controller/fetchProduct';

const ViewProductTest = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const apiUrl = `http://localhost:8000/getProduct/${id ? id : ""}`;

      try {
        const response = await axios.get(apiUrl);
        console.log("haha");
        const jsonData = await response.data;
        //   console.log(jsonData);
        await setProduct((product) => ({ ...product, ...jsonData }));
        // return jsonData
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    console.log(product, "Iam");
  }, [product]);
  return <div>{JSON.stringify(product)} </div>;
};

export default ViewProductTest;
