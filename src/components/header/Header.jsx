import "./header.css";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";
import { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <TopHeader setToggle={setToggle} />
      <MiddleHeader />
      <Navbar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Header;
