import "./Header.css";
import { BiSearch,BiHeart,BiStore } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"


function header(){
  return(
    <div id="header">
      <header>
        <h1><Link to={"/"}><img src={Logo} alt="logo"/></Link></h1>
        <ul className="List">
          <li><Link to={"/src/page/Shop"}>Shop</Link></li>
          <li>About</li>
          <li>Sustainability</li>
        </ul>
        <ul className="Member">
          <li>Login <b>/</b></li>
          <li>Join</li>
          <li><BiSearch /></li>
          <li><BiHeart /></li>
          <li><BiStore /></li>
        </ul> 
      </header>
    </div>
  )
}

export default header;