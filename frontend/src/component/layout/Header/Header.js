import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { Fragment } from "react";
// import {Link} from "react-router-dom";


const options = {
  burgerColor: "black",
  burgerColorHover: "grey",
  logo,
  logoWidth: "20vmax",
  navColor1: "rgba(240, 240, 240, 0.8)",
  logoHoverSize: "3px",
  logoHoverColor: "rgba(200, 225, 188,0.3)",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Search",
  link4Text: "Login",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/search",
  link4Url: "/login",
  link1Size: "2.8vmax",
  link1Color: "black",
  nav1justifyContent: "flex-end",
  nav1alignItems: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav3alignItems: "flex-start",
  nav4justifyContent: "flex-start",
  nav4alignItems: "flex-end",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return (
    <Fragment>
      <ReactNavbar {...options} className="headi" />
      {/* <div>
            <p>
              <Link className="link" to="/Login">
                LOGIN
              </Link>
            </p>
            <p>
              <Link className="link" to="/Search">
                SEARCH
              </Link>
            </p>
      </div> */}
    </Fragment>
  )
};

export default Header;
