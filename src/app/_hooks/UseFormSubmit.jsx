import { useState } from "react";
// import axios from "../_axios/Axios";
import axios from "@/app/_axios/Axios";
import { toast } from "react-hot-toast";

const useFormSubmit = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitData = async (formData) => {
    setLoading(true);
    setError(null);

    const toastId = toast.loading("Submitting your data...");

    try {
      console.log('enter hereeeeeeeeeeeeeeeeeeeeee');
      const response = await axios.post(url, formData);
      toast.dismiss(toastId);
      // toast.success("Submitted Successfully");
      setSuccess(true);
      setLoading(false)

      console.log("Response:", response.data);
    } catch (error) {
      console.log(error, "error==");
      setLoading(false)

      toast.dismiss(toastId);
      if (error.response.data.email) {
        toast.error(error.response.data.email[0]);
      } else if (error.response.data.error) {
        toast.error("something went wrong");
      } else if (error.message) {
        if (error.message === "Network Error") {
          toast.error("Network Error");
        }
      } else {
        toast.error("something went wrong");
      }

      setError(error.message || "An error occurred");
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };
  const submitResumeData = async (formData) => {
    setLoading(true);
    setError(null);

    const toastId = toast.loading("Submitting your data...");

    try {
      console.log('enter hereeeeeeeeeeeeeeeeeeeeee');
      const response = await axios({
        method: 'post',
        url: url,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data' }
        });
      console.log('response..........',response)
      toast.dismiss(toastId);
      setSuccess(true);
      setLoading(false)
      console.log("Response:", response.data);
    } catch (error) {
      console.log(error, "error==");
      setLoading(false)
      toast.dismiss(toastId);
      if (error.response.data.email) {
        toast.error(error.response.data.email[0]);
      } else if (error.response.data.error) {
        toast.error("something went wrong");
      } else if (error.message) {
        if (error.message === "Network Error") {
          toast.error("Network Error");
        }
      } else {
        toast.error("something went wrong");
      }

      setError(error.message || "An error occurred");
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };
  return { loading, error, submitData,submitResumeData, success, setSuccess };
};

export default useFormSubmit;
