import React, { useContext } from "react";
import { StoreContext } from "../context";
import { PageNotFound } from "./PageNotFound";

export const ProductPage = (props) => {
  const { getProduct } = useContext(StoreContext);
  const { slug } = props.match.params;
  const product = getProduct(slug);
  console.log(product.id);
  //console.log(slug);
  if (product !== null) {
    const { title}  = product;

    return <div>Hello from product page slug {title}</div>;
  } else {
      return (
          <PageNotFound/>
      )
  }
};

