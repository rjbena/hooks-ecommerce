import React, { createContext, useState, useEffect } from "react";
import {storeProducts, detailProduct} from './data'
import Client from "./config/Contentful";
export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [store, setStore] = useState({
    products:[],
    detailProduct,
    cart: [],
    cartSubTotal: 0,
    cartTax:0,
    cartTotal: 0,
    company: "",
    maxPrice: 0,
    minPrice: 0,
  });

  const setProducts =() => {
    let tempProducts = [];
    storeProducts.forEach((item) =>{
      const singleItem = {...item};
      tempProducts= [...tempProducts, singleItem]
    });
    //console.log(tempProducts);
    setStore({
      ...store,
      products: tempProducts
    }

    );

  }

  useEffect(() => {
    setProducts();

  }, [])
  // const getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "products",
  //     });
  //     //console.log(response.items);
  //     let items = formatData(response.items);
  //     setStore(...items);
  //     //console.log(products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const formatData = (items) => {
  //   let tempItems = items.map((item) => {
  //     let images = item.fields.images.map((image) => image.fields.file.url);
  //     let product = { ...item.fields, images };
  //     return product;
  //   });
  //   //console.log(tempItems);
  //   return tempItems;
  // };



  const getProduct = (slug) => {

    let tempProducts = store.products;

    let product = tempProducts.find(p => p.slug === slug);
    return {...product};
  };

  return (
    <StoreContext.Provider value={{ store, getProduct }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
