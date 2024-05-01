import * as yup from "yup";

const ApplyJobFormValidation = yup.object().shape({
    name: yup.string().required("Full name is required"),
    resume: yup.mixed().required("Resume is required").test('fileSize', 'File size is too large', (value) => {
        if (!value || !value[0]) return true;
        return value[0].size <= 1024 * 1024 * 5;
    }).test('fileFormat', 'Invalid file format', (value) => {
        if (!value || !value[0]) return true;
        return ['application/pdf', 'application/msword'].includes(value[0].type);
    }),
    email: yup.string().email("Invalid email").required("Email is required"),
    contact_number: yup.string().required("Phone number is required"),
});

export default ApplyJobFormValidation;