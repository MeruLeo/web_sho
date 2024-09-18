import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const contactItems = [
    {
      title: "تلگرام",
      icon: <FontAwesomeIcon icon={faTelegram} />,
      bg: "bg-gradient-to-l from-[#387FD7] to-[#02CDFC]",
      link: "",
    },
    {
      title: "اینستاگرام",
      icon: <FontAwesomeIcon icon={faInstagram} />,
      bg: "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] ",
      link: "",
    },
    {
      title: "ایمیل",
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      bg: "bg-gradient-to-r from-[#22c1c3] to-[#fdbb2d]",
      link: "",
    },
    {
      title: "شماره تماس",
      icon: <FontAwesomeIcon icon={faPhone} />,
      bg: "bg-gradient-to-r from-[#1f93ff] to-[#68c401]",
      link: "tel:09927808606",
    },
  ];

  const ContactItem = ({ title, link, bg, icon }) => (
    <li className="m-2 text-bg-light">
      <a
        href={link}
        className={`${bg} p-5 transition-all border-2 border-bg-dark duration-200 hover:scale-105 text-xl items-center rounded-full w-48 flex`}
      >
        <span className="ml-3">{icon}</span>
        <span>{title}</span>
      </a>
    </li>
  );

  return (
    <div className="text-center mt-12 flex flex-col justify-center items-center">
      <h2 className="font-Graphik text-3xl text-bg-dark">ارتباط با ما</h2>
      <p className="max-w-[20rem] sm:max-w-[30rem] text-xl my-5">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>

      <div className="w-full flex flex-col justify-center items-center">
        <section className="flex flex-col items-center justify-center ">
          <ul className="flex-wrap flex sm:flex-row flex-col justify-center items-center sm:w-[35rem]">
            {contactItems.map((contact, index) => (
              <ContactItem
                key={index}
                title={contact.title}
                icon={contact.icon}
                bg={contact.bg}
                link={contact.link}
              />
            ))}
          </ul>
          <div className="bg-org-dark border-3 border-org-yellow text-bg-light p-4 rounded-3xl">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-org-yellow text-3xl"
            />
            <div>
              <h5 className="text-org-yellow font-bold text-2xl">آدرس</h5>
              <p className="max-w-52">
                اصفهان. نجف آباد. خیابان ۲۲ بهمن. روبروی بیمارستان منتظری. زیر
                مطب دکتر فاضل
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
