import Footer from "../../footer/Footer";
import AboutUs from "../about_us/About_us";
import Btn from "../btn/Btn";
import Contact from "../contact/Contact";
import Services from "../sevices/Services";
import "../header/Header.css";

const Main = () => {
  const Header = () => {
    const headerLinks = [
      {
        title: "خانه",
        icon: <i className="fi fi-tr-house-blank"></i>,
        path: "#home",
      },
      {
        title: "درباره ما",
        icon: <i className="fi fi-tr-employees"></i>,
        path: "#about_us",
      },
      {
        title: "خدمات ما",
        icon: <i className="fi fi-tr-customer-care"></i>,
        path: "#our_services",
      },
      {
        title: "ارتباط با ما",
        icon: <i className="fi fi-tr-customer-service"></i>,
        path: "#contact_us",
      },
    ];

    const HeaderLink = ({ title, icon, path }) => (
      <li className="m-2 rounded-full">
        <a
          href={path}
          className="sm:py-[20px] flex flex-col sm:flex-row justify-center items-center sm:px-[10px]"
        >
          <span className="ml-2">{icon}</span>
          <span>{title}</span>
        </a>
      </li>
    );

    return (
      <>
        {/* desktop mode */}
        <header className="p-2 font-Vazir fixed w-full top-0 z-50 glass justify-between items-center flex">
          <img
            src="src/assets/img/websho.png"
            className="w-12 h-12"
            alt="logo"
          />
          <nav className="sm:block hidden">
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
            <a href="tel:09927808606" className="boton-elegante font-Vazir">
              تماس
              <span className="mr-4">
                <i className="fi fi-tr-phone-call items-center justify-center flex"></i>
              </span>
            </a>
          </div>
        </header>

        {/* mobile mode */}
        <header className="p-2 font-Vazir fixed w-full bottom-0 z-50 glass justify-between items-center flex sm:hidden">
          <nav className="sm:hidden w-full block">
            <ul className="flex w-full justify-between items-center rounded-full">
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
        </header>
      </>
    );
  };

  const Start = ({ title, icon, deg }) => (
    <div className="flex flex-col justify-center items-center mt-12">
      <span className="bg-org-yellow w-28 flex justify-center items-center h-28 border-2 border-org-dark rounded-full">
        {icon}
      </span>
      <h2 className="text-org-dark font-Graphik text-3xl mt-5">{title}</h2>
      <img
        src="src/assets/img/arrow.png"
        className={`w-24 mt-12 mb-5 ${deg} h-24`}
        alt=""
      />
    </div>
  );

  return (
    <div className=" flex flex-col justify-center items-center">
      <Header />
      <div
        className="relative flex flex-col justify-center items-center top-32"
        id="home"
      >
        <h1 className="font-Graphik text-[1.8rem] sm:text-5xl text-center">
          با وب شو فروش‌ت رو چند برابر کن !
        </h1>
        <p className="mt-10 text-xl font-Vazir text-center max-w-[20rem] sm:max-w-[30rem]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <Start
          title={`ما برات سایت طراحی میکنیم`}
          icon={
            <i className="fi fi-tr-web-design text-7xl flex justify-center items-center"></i>
          }
          deg={`-rotate-180`}
        />
        <Btn
          title={`کافیه بهمون بگی`}
          icon={
            <i className="fi fi-tr-introduction flex justify-center items-center"></i>
          }
        />
      </div>

      <div id="about_us" className="mt-12">
        <AboutUs />
      </div>
      <div id="our_services" className="mt-12">
        <Services />
      </div>
      <div id="contact_us" className="mt-12">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
