import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { IoMdCart } from "react-icons/io";
import { StoreContext } from "../../context";
import "../../css/Navbar.css";

export const Navbar = () => {
  const context = useContext(StoreContext);
  const { getSlug, products } = context;
  const [search, setSearch] = useState("");
  console.log(products);
  const handleSearch = (e) => {
    e.preventDefault();
    //http://localhost:3000/products?
    let slug = getSlug(search);
    console.log(search);
     window.location.href = `http://localhost:3000/products/${slug}`;
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link to="/">
          <img src={logo} alt="home" />
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/">
              <h4 className="nav-link">
                Home <span className="sr-only">(current)</span>
              </h4>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/products">
              <h4 className="nav-link">
                Products <span className="sr-only">(current)</span>
              </h4>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/cart">
              <h4 className="nav-link">
                <IoMdCart />
                <span className="sr-only">(current)</span>
              </h4>
            </Link>
          </li>
          <li className="nav-item active"></li>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
          <input
            id="color"
            list="suggestions"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <datalist id="suggestions">
            {products.map((product) => {
              return <option key={product.id}>{product.title}</option>;
            })}
          </datalist>
          {/* <input
            className="form-control mr-sm-2"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onSubmit={(e) => handleSearch(e)}
            placeholder="Search"
            aria-label="Search"
          /> */}
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
