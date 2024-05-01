import * as yup from "yup";

const ContactUsFormValidation = yup.object().shape({
    full_name: yup.string().required("Full name is required"),
    organization: yup.string().required("Organization is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    contact_number: yup.string().required("Contact number is required"),
    sector: yup.string().required("Sector is required"),
    message: yup.string().required("Message is required"),
    website: yup.string().required("Website is required"),
});

export default ContactUsFormValidation;