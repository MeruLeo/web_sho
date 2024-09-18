import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AnimatedMulti from "./select/Select";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const RegForm = ({ onClose }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("آدرس ایمیل نامعتبر است.")
      .required("این فیلد اجباری است"),
    user_name: Yup.string()
      .min(2, "لطفا حداقل دو حرف وارد کنید.")
      .required("این فیلد اجباری است"),
    last_name: Yup.string()
      .min(2, "لطفا حداقل دو حرف وارد کنید.")
      .required("این فیلد اجباری است"),
    phone_number: Yup.string()
      .min(10, "لطفا شماره تماس معتبر وارد کنید")
      .max(10, "لطفا شماره تماس معتبر وارد کنید")
      .required("این فیلد اجباری است"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const url = `https://websho-59d3e-default-rtdb.firebaseio.com/users.json`;

    const filteredServices = selectedServices.map((service) => ({
      value: service.value,
      label: service.label,
    }));

    const dataToSend = {
      ...values,
      services: filteredServices,
    };

    axios
      .post(url, dataToSend)
      .then((response) => {
        console.log("Data saved successfully:", response.data);
        alert("اطلاعات با موفقیت ارسال شد");
        setSubmitting(false);
        onClose();
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("ارسال اطلاعات با مشکل مواجه شد");
        setSubmitting(false);
      });
  };

  return (
    <div className="bg-bg-light border-2 border-org-dark p-8 rounded-3xl fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg w-[95%] sm:max-w-md mx-auto mt-20">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold my-6 text-center text-gray-800">
          فرم همکاری با وب شو!
        </h1>
        <button
          onClick={onClose}
          className="absolute border-1 border-bg-dark text-bg-light m-4 bg-red-500 w-8 rounded-full p-2 flex items-center justify-center h-8 -left-3 -top-3"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <Formik
        initialValues={{
          email: "",
          user_name: "",
          last_name: "",
          phone_number: "",
          services: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <Field
                type="text"
                name="user_name"
                placeholder="نام"
                className="w-full p-3 border border-gray-300 rounded-full"
              />
              <ErrorMessage
                name="user_name"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="text"
                name="last_name"
                placeholder="نام خانوادگی"
                className="w-full p-3 border border-gray-300 rounded-full"
              />
              <ErrorMessage
                name="last_name"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="number"
                name="phone_number"
                placeholder="شماره تماس"
                className="w-full p-3 border border-gray-300 rounded-full"
              />
              <ErrorMessage
                name="phone_number"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="ایمیل"
                className="w-full p-3 border border-gray-300 rounded-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <AnimatedMulti onChange={(value) => setSelectedServices(value)} />
              <ErrorMessage
                name="services"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-2 bg-org-yellow text-bg-dark border-1 border-bg-dark rounded-full hover:bg-yellow-600 transition duration-200"
              >
                ارسال
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegForm;
