import { Input, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { useDispatch, useSelector } from "react-redux";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

import { setSearch } from "../Redux/actions/actions";
const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { basket } = useSelector((cart) => cart.cartReducer);

  function debounced(e) {
    dispatch(setSearch({ value: e.target.value }));
  }
  function handleClick() {
    setOpen(() => !open);
  }

  return (
    <header className="Header">
      <div style={{ height: !open ? "0" : "600px" }} className="open">
        {open && <p>filter</p>}
      </div>

      <button onClick={handleClick} className="hamburger">
        <MenuOpenOutlinedIcon />
      </button>

      <Link to="/">
        <h1 className="Logo">Shop</h1>
      </Link>
      <div className="find">
        <Input
          onChange={(e) => debounced(e)}
          placeholder="Search for product........."
          className="Input"
        />
        <div className="search">
          <Button>
            <SearchIcon />
          </Button>
        </div>
      </div>
      <nav>
        <Link to="/checkout">
          <div className="Nav">
            <span>{basket.length}</span>
            <ShoppingCartOutlinedIcon />
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
