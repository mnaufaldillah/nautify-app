import React from "react";
import Button from "../button";
import { FaSpotify } from "react-icons/fa";
import SearchBar from "../searchbar";
import Profile from "../profile";
import { redirect } from "../../../lib/auth";
import "./style.css";

const Navbar = ({userData, handleSearch}) => {
  const isAuth = userData?.access_token !== undefined;
  return (
    <div className="navbar">
    {!isAuth ? (
      <>
        <SearchBar handleSearch={handleSearch}/>
        <Profile userData={userData}/>
      </>
    ) : (
      <Button
        onClick={() => redirect()}
        leftIcon={<FaSpotify/>}
        > Login
      </Button>
  )}
     </div>
  );
};

export default Navbar;