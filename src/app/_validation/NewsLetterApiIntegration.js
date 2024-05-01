import * as yup from "yup";

const NewsLetterFormValidation = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
});

export default NewsLetterFormValidation;