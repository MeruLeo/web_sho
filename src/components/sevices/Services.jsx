import Slider from "../about_us/Carousel";
import data from "../about_us/data";
import Btn from "../btn/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import RegForm from "./form/Form";
import { useEffect, useState } from "react";

const Services = () => {
  const [showRegForm, setShowRegForm] = useState(false);

  const webPlans = [
    {
      title: "اقتصادی",
      desc: "",
      price: "۱۲/۰۰۰/۰۰۰",
      options: [
        {
          title: "تست",
          status: true,
        },
        {
          title: "تست",
          status: false,
        },
        {
          title: "تست",
          status: false,
        },
        {
          title: "تست",
          status: false,
        },
      ],
    },
    {
      title: "حرفه ای",
      desc: "",
      price: "۲۰/۰۰۰/۰۰۰",
      options: [
        {
          title: "تست",
          status: true,
        },
        {
          title: "تست",
          status: true,
        },
        {
          title: "تست",
          status: false,
        },
        {
          title: "تست",
          status: false,
        },
      ],
    },
    {
      title: "وب شو !",
      desc: "",
      price: "۴۵/۰۰۰/۰۰۰",
      options: [
        {
          title: "تست",
          status: true,
        },
        {
          title: "تست",
          status: true,
        },
        {
          title: "تست",
          status: true,
        },
        {
          title: "تست",
          status: true,
        },
      ],
    },
  ];

  const Plan = ({ title, desc, options, price }) => {
    const isWebShow = title === "وب شو !";
    return (
      <li
        className={`rounded-3xl w-72 border-2 m-2 p-4 ${
          isWebShow
            ? "bg-org-yellow border-bg-dark text-black"
            : "bg-bg-dark border-org-yellow text-white"
        }`}
      >
        <h3 className="text-xl mb-4">{title}</h3>
        <div>
          <span
            className={`mt-4 font-Graphik text-3xl ${
              isWebShow ? "text-black" : "text-org-yellow"
            }`}
          >
            {price} ت
          </span>
          <span>{desc}</span>
        </div>
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className={`flex p-2 rounded-full justify-between items-center mt-4 ${
                isWebShow
                  ? "bg-org-dark text-org-yellow"
                  : "bg-org-dark text-org-yellow"
              }`}
            >
              <span>{option.title}</span>
              <FontAwesomeIcon icon={option.status ? faCheck : faXmark} />
            </li>
          ))}
        </ul>
      </li>
    );
  };

  const handleShowRegForm = () => {
    setShowRegForm(true);
  };
  const handleHideRegForm = () => {
    setShowRegForm(false);
  };

  useEffect(() => {
    if (showRegForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showRegForm]);

  return (
    <div className="text-center mt-12 flex flex-col justify-center items-center">
      <h2 className="font-Graphik text-3xl text-bg-dark">خدمات ما</h2>
      <p className="max-w-[20rem] sm:max-w-[30rem] text-xl my-5">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
      <Slider data={data} activeSlide={2} />
      <ul className="flex sm:flex-row flex-col justify-between items-center w-full mt-5">
        {webPlans.map((plan, index) => (
          <Plan
            key={index}
            title={plan.title}
            price={plan.price}
            options={plan.options}
          />
        ))}
      </ul>
      <div className="mt-5">
        <Btn
          title={`ارسال فرم`}
          icon={
            <i className="fi fi-tr-clipboard-list flex justify-center items-center"></i>
          }
          clickEvent={handleShowRegForm}
        />
      </div>
      {showRegForm && (
        <>
          <div className="fixed inset-0 bg-black transition-all duration-200 opacity-50 z-40"></div>

          <div className="fixed inset-0 z-50 transition-all duration-200 flex items-center justify-center">
            <RegForm onClose={handleHideRegForm} />
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
