import React, { useContext } from "react";
import { StoreContext } from "../context";
import { PageNotFound } from "./PageNotFound";
import { FaMinus, FaPlus } from "react-icons/fa";
import "../css/ProductPage.css";
export const ProductPage = (props) => {
  const { getProduct } = useContext(StoreContext);
  const { slug } = props.match.params;
  const product = getProduct(slug);
  console.log(product);
  //console.log(slug);
  if (!(Object.getOwnPropertyNames(product).length === 0)) {
    const {
      title,
      company,
      count,
      id,
      img,
      inCart,
      info,
      price,
      total,
    } = product;
    console.log(img);
    return (
      <div className="container" id="product-section">
        <div className="row">
          <div className="col-md-6">
            <img className="image-responsive" src={`/${img}`} alt="product" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h1>{title}</h1>
                <div className="row">
                  <div className="col-md-12">
                    <span className="label label primary">{company}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="description">{info}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 bottom-rule">
                    <h2 className="product-price">${price}</h2>
                  </div>
                </div>
                <div className="row add-to-cart">
                  <div className="col-md-12">
                    <FaMinus />
                    <input className="btn btn-default btn-lg btn-qty" placeholder="1" />
                    <FaPlus/>
                    <div className="col-md-4">
                      <button className="btn-lg btn-brand btn-full-width">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <PageNotFound />;
  }
};
