import { Link } from "react-router-dom";
import Btn from "../btn/Btn";
import "./Header.css";

const Header = () => {
  const headerLinks = [
    {
      title: "خانه",
      icon: <i className="fi fi-tr-house-blank"></i>,
      path: "/home",
    },
    {
      title: "درباره ما",
      icon: <i className="fi fi-tr-employees"></i>,
      path: "/about_us",
    },
    {
      title: "خدمات ما",
      icon: <i className="fi fi-tr-customer-care"></i>,
      path: "/our_services",
    },
    {
      title: "ارتباط با ما",
      icon: <i className="fi fi-tr-customer-service"></i>,
      path: "/contact_us",
    },
  ];

  const HeaderLink = ({ title, icon, path }) => (
    <li className="m-2 rounded-full">
      <Link to={path} className="py-[20px] px-[10px]">
        <span className="ml-2">{icon}</span>
        <span>{title}</span>
      </Link>
    </li>
  );

  return (
    <header className="p-2 font-Vazir fixed w-full z-50 glass justify-between items-center flex">
      <img src="src/assets/img/websho.png" className="w-12 h-12" alt="logo" />
      <nav className="">
        <ul className="flex rounded-full">
          {headerLinks.map((link, index) => (
            <HeaderLink
              key={index}
              title={link.title}
              icon={link.icon}
              path={link.path}
            />
          ))}
        </ul>
      </nav>
      <div>
        <Btn
          title={`تماس `}
          icon={
            <i className="fi fi-tr-phone-call items-center justify-center flex"></i>
          }
        />
      </div>
    </header>
  );
};

export default Header;
