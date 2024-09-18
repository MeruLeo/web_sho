import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowLeft,
  faCross,
  faEllipsis,
  faPhone,
  faTrashAlt,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://websho-59d3e-default-rtdb.firebaseio.com/users.json",
        );
        const data = response.data;

        const usersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        setUsers(usersArray);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="absolute rounded-full bg-org-yellow text-org-dark p-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        در حال بارگذاری...
      </div>
    );
  if (error)
    return (
      <div className="absolute rounded-full bg-org-yellow text-org-dark p-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        خطا در بارگذاری داده‌ها: {error}
      </div>
    );

  const handleDelete = async (phone) => {
    try {
      const res = await axios.get(
        "https://websho-59d3e-default-rtdb.firebaseio.com/users.json",
      );

      const data = res.data;

      const userKey = Object.keys(data).find(
        (key) => data[key].phone_number === phone,
      );

      if (userKey) {
        axios.delete(
          `https://websho-59d3e-default-rtdb.firebaseio.com/users/${userKey}.json`,
        );

        setUsers(users.filter((user) => user.phone_number !== phone));
      } else {
        console.log(`خطا در حذف کاربر`);
      }
    } catch {
      console.log(error);
    }
  };

  const User = ({ user }) => (
    <li
      key={user.id}
      className="p-3 rounded-3xl w-full my-2 bg-org-dark text-bg-light flex justify-between items-center"
    >
      <div className="flex flex-col justify-center">
        <p className="">
          {user.user_name}
          <span> </span>
          {user.last_name}
        </p>
        <p className="mt-4">{user.phone_number}</p>
      </div>
      <div className="sm:flex hidden flex-col justify-center">
        <p className="bg-org-dark p-2 rounded-full">{user.email}</p>
      </div>
      <div className="sm:flex hidden items-center">
        <p className=" text-org-yellow ">سرویس‌ها:</p>
        <ul className="ml-4 hidden w-[20rem] sm:flex flex-wrap justify-center items-center list-disc">
          {user.services.map((service, index) => (
            <li
              key={index}
              className="list-none text-lg bg-org-yellow text-bg-dark mx-1 p-2  rounded-full my-1 text-center"
            >
              {service.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex sm:hidden flex-col justify-center items-center">
        <button
          className="p-1 flex justify-between items-center rounded-full w-full text-org-dark bg-org-yellow"
          onClick={() => setSelectedUser(user)}
        >
          سرویس‌ها
          <FontAwesomeIcon
            icon={faEllipsis}
            className="bg-org-dark w-5 h-5 text-bg-light p-1 rounded-full"
          />
        </button>
        <p className="bg-org-dark p-2 rounded-full">{user.email}</p>
      </div>
      <button
        onClick={() => handleDelete(user.phone_number)}
        className="bg-red-600 flex justify-center items-center transition-all duration-200 hover:scale-95 w-10 h-10 rounded-full"
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );

  const PopUp = ({ user, onClose }) => {
    if (!user) return null;

    const Service = ({ label }) => (
      <li className="bg-org-yellow border-1 border-bg-dark text-bg-dark m-2 rounded-full p-2">
        {label}
      </li>
    );

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-org-dark text-bg-light rounded-[2rem] w-10/12 sm:w-1/3">
          <header className="flex justify-between p-2 items-center">
            <span>
              سرویس های {user.user_name} {user.last_name}{" "}
            </span>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-red-500 flex justify-center items-center text-sm rounded-full"
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </header>
          <main className="pb-2 px-2">
            <ul className="flex justify-center items-center flex-wrap p-4">
              {user.services.map((service, index) => (
                <Service key={index} label={service.label} />
              ))}
            </ul>
            <a
              href={`tel:${user.phone_number}`}
              className="bg-gradient-to-r from-[#1f93ff] to-[#68c401] text-bg-light w-full transition-all duration-200 hover:scale-95 justify-center items-center flex mt-2 rounded-full p-3"
            >
              باهاش تماس بگیر
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
            </a>
          </main>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`p-4 bg-bg-dark sm:h-[40rem] h-screen border-3 border-org-dark w-full sm:w-[90%] absolute overflow-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-none sm:rounded-[3rem] ${
        selectedUser ? "overflow-hidden" : ""
      }`}
    >
      <header className="flex justify-between items-center sm:items-start">
        <h1 className="text-xl sm:text-3xl font-Graphik text-bg-light sm:mt-7 sm:mr-2">
          لیست کاربران وب شو
        </h1>
        <Link
          to={"/"}
          className="bg-org-yellow text-sm flex justify-center items-center transition-all duration-200 hover:scale-95 p-4 rounded-full"
        >
          بازگشت به صفحه اصلی
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        </Link>
      </header>
      <ul className="mt-12 flex flex-col p-4 rounded-3xl justify-center items-center">
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </ul>
      <PopUp user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
};

export default Admin;
