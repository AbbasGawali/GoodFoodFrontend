import {
  faCartShopping,
  faHandshakeAngle,
  faMagnifyingGlass,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <nav className="py-4 shadow-lg px-8 flex items-center justify-between">
      <div className="logo flex  items-center cursor-pointer">
        <img className="w-14" src="/images/logo.jpg" alt="" />
        <h2 className="font-bold text-xl">Good Food</h2>
      </div>
      <ul className="links flex items-center font-bold  gap-8">
        <li className="hover:text-orange-500 hover:underline">
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
          </a>
        </li>
        <li className="hover:text-orange-500 hover:underline">
          <a href="#">
            <FontAwesomeIcon icon={faTag} /> Offers
          </a>
        </li>
        <li className="hover:text-orange-500 hover:underline">
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faHandshakeAngle} /> Help
          </a>
        </li>
        <li className="hover:text-orange-500 hover:underline">
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faUser} /> Sign In
          </a>
        </li>
        <li className="hover:text-green-500 hover:underline">
          <a href="#">
            <FontAwesomeIcon icon={faCartShopping} /> Cart
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
