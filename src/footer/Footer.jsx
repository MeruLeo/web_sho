import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const helpFulLinks = [
  {
    icon: <i className="fi fi-tr-house-blank"></i>,
    href: "#",
    title: "صفحه اصلی",
  },
  {
    icon: <i class="fi fi-tr-guide-alt"></i>,
    href: "#",
    title: "درباره ما",
  },
  {
    icon: <i class="fi fi-tr-customer-service"></i>,
    href: "#",
    title: "ارتباط با پشتیبانی",
  },
  {
    icon: <i className="fi fi-tr-bugs"></i>,
    href: "#",
    title: "گزارش باگ",
  },
];
const devingLinks = [
  {
    icon: <i className="fi fi-tr-square-terminal"></i>,
    href: "#",
    title: "دوینگ",
  },
  {
    icon: <i className="fi fi-tr-square-terminal"></i>,
    href: "#",
    title: "...",
  },
  {
    icon: <i className="fi fi-tr-square-terminal"></i>,
    href: "#",
    title: "...",
  },
];
const socialLinks = [
  {
    icon: <i className="fi fi-brands-instagram"></i>,
    href: "#",
    title: "اینستاگرم",
  },
  {
    icon: <i className="fi fi-brands-telegram"></i>,
    href: "#",
    title: "تلگرام",
  },
  {
    icon: <i className="fi fi-brands-discord"></i>,
    href: "#",
    title: "دیسکورد",
  },
  {
    icon: <i className="fi fi-brands-youtube"></i>,
    href: "#",
    title: "یوتیوب",
  },
];

const FooterLink = ({ href, title, icon }) => (
  <li className="flex items-center footer-link">
    {icon}
    <a
      href={href}
      className="no-underline text-gray-400 mr-2 transition-all hover:text-purple-org"
    >
      {title}
    </a>
  </li>
);
const FooterLinkWrapper = ({ title, links }) => (
  <ul className="relative m-0 p-4">
    <h5>{title}</h5>
    {links.map((link, index) => (
      <FooterLink
        key={index}
        href={link.href}
        title={link.title}
        icon={link.icon}
      />
    ))}
  </ul>
);

const scrollToTop = () => {
  window.scrollTo({ top: 0 });
};

const Footer = () => {
  return (
    <>
      <footer className="relative sm:mb-0 mb-56 top-24 rounded-3xl justify-center items-center bg-bg-dark text-white h-auto p-4 flex flex-col">
        <button
          onClick={scrollToTop}
          href="#"
          className="bg-org-yellow border-2 border-bg-dark text-org-dark w-11 h-11 rounded-full left-0 absolute ml-4 -top-5"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <img
          src="src/assets/img/websho.png"
          className="absolute w-11 h-11 right-0 mr-4 -top-5"
          alt=""
        />
        {/* <div className="flex items-center justify-center"></div> */}
        <div className="flex flex-col justify-between flex-wrap items-center w-full">
          <div className="flex justify-between relative top-12 sm:top-0">
            <FooterLinkWrapper title={"لینک های مفید"} links={helpFulLinks} />
            <FooterLinkWrapper title={"ما"} links={devingLinks} />
            <FooterLinkWrapper title={"راه های ارتباطی"} links={socialLinks} />
          </div>

          <div className="flex bg-org-dark rounded-[2rem] border-2 border-org-yellow relative top-12 justify-between flex-col p-4">
            <h3 className="text-center text-2xl mb-2">عضویت در خبرنامه</h3>
            <p className="text-gray-400">
              با عضویت در خبرنامه از آخرین اخبار وب شو ،آپدیت ها و ... مطلع
              بشوید.
            </p>
            <div className="my-4 w-full flex bg-bg-dark items-center justify-between p-2 rounded-full">
              <input
                type="text"
                className="outline-none w-full bg-transparent p-2"
                placeholder="ایمیل خود را وارد کنید"
              />
              <button className="bg-org-yellow text-org-dark p-2 w-20 rounded-full">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
