import menu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import person from "../assets/image-avatar.png";

const Nav = () => {
  return (
    <nav className="p-5 flex justify-between z-999">
      <div className="flex items-center">
        <img src={menu} alt="menu-icon" className="w-5 h-5" />
        <img src={logo} alt="logo" className="w-full ml-4" />
      </div>
      <div className="flex items-center">
        <img src={cart} alt="cart" className="w-6 h-6" />
        <img src={person} alt="person" className="w-8 h-8 ml-4 rounded-full" />
      </div>
    </nav>
  );
};

export default Nav;
