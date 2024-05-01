"use client"
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import useFormSubmit from "../../hooks/UseFormSubmit";
import useFormSubmit from "@/app/_hooks/UseFormSubmit";
// import NewsLetterFormValidation from "../../validation/NewsLetterApiIntegration";
import NewsLetterFormValidation from "@/app/_validation/NewsLetterApiIntegration";
import { toast } from "react-hot-toast";

const NewsLetterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(NewsLetterFormValidation) });

  const { loading, error, submitData, setSuccess, success } =
    useFormSubmit("/newsletter/");

  const onsubmit = async (data) => {
    console.log(data, 'dataaaaaaaa');
    submitData(data);
    // reset();
  };

  useEffect(() => {
    if (success === true) {
      toast.success("Congratulations! You've successfully unlocked access to our exclusive news and insights!")
      setSuccess(false);
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  //   console.log(loading,'loading',error,'error');

  return (
    <form onSubmit={handleSubmit(onsubmit)}>

      <div className="input-icon mb-lg-5 mb-3">
        <div className="newsletter-design">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <input
              type="email"
              name="email"
              className="d-block"
              placeholder="Enter you email address"
              {...register("email")}
            />
            <button className="newsletter-button"><i className="bi bi-arrow-right-circle-fill" /></button>
          </div>
        </div>
        {errors.email && <p className="text-danger mt-2">{errors.email.message}</p>}
      </div>
    </form>
  );
};

export default NewsLetterForm;
