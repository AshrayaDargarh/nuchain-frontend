"use client"
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import useFormSubmit from "@/app/_hooks/UseFormSubmit";
// import ApplyJobFormValidation from "../../validation/ApplyJobFormValidation";
import ApplyJobFormValidation from "@/app/_validation/ApplyJobFormValidation";
import toast from "react-hot-toast";
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { useSearchParams,useRouter } from "next/navigation";
const ApplyJobForm = () => {
    // const { state } = useLocation();
    const router=useRouter();
    const searchParams = useSearchParams()
    const state = searchParams.get('title')
    console.log(state, 'state.............');
    const [resume, setResume] = useState(null)
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ApplyJobFormValidation) });
    const { loading, error, submitData, submitResumeData, setSuccess, success } = useFormSubmit('/applicants/');
    console.log(state, 'state.............');
    useEffect(() => {
        if (state === null) {
            router.push('/careers')
        }
    }, [router,state])

    const onsubmit = async (data) => {
        let formData = new FormData();
        console.log(formData, 'ddddddataa');
        if (state) {
            let jobtitle = state;
            console.log(jobtitle, 'JobTTitlestate');

            // Append fields to formData
            Object.keys(data).forEach(key => {
                if (key !== 'resume') {
                    formData.append(key, data[key]);
                    // Log formData entries
                    for (let pair of formData.entries()) {
                        console.log(pair[0] + ', ' + pair[1]);
                    }
                }
            });

            // Append file to formData
            formData.append('resume', data.resume[0]);

            // Append additional fields
            formData.append('job_title', jobtitle);
            formData.append('job_type', 'Full Time');
            formData.append('place', 'Gurugram-India');

            // Log formData entries
            for (let pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
            console.log(formData, 'formData');
            submitResumeData(formData);
            return;
        }
    };
    useEffect(() => {
        if (success === true) {
            toast.success("Thanks for reaching out! We&apos;ve got your message and will be in touch shortly!")
            setSuccess(false)
            router.push('/careers')
            reset()
        }
    }, [success,router])

    console.log(errors, "errors");
    const phoneNumber = watch('contact_number');

    useEffect(() => {
        console.log('Phone number:', phoneNumber);
        register('contact_number');
    }, [phoneNumber, register]);
    useEffect(() => {
        console.log(resume, 'resume..........');
    }, [resume]);
    return (
        <form onSubmit={handleSubmit(onsubmit)} enctype='multipart/form-data'>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">
                    Your Name
                </label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="formGroupExampleInput"
                    {...register("name")}
                />
                {errors.name && (
                    <p className="text-danger">{errors.name.message}</p>
                )}
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                    Your Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                )}
            </div>

            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">
                    Your Contact Number
                </label>
                <PhoneInput
                    className='form-control'
                    international
                    defaultCountry="IN"
                    value={phoneNumber}
                    onChange={value => setValue('contact_number', value)}
                    name="contact_number"
                />

                {errors.contact_number && (
                    <p className="text-danger">{errors.contact_number.message}</p>
                )}
            </div>

            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">
                    Upload Your Resume
                </label>

                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    name="resume"
                    // className="form-control" 
                    {...register("resume")}
                    required
                // onChange={handleFileChange}
                />
                {errors.resume && (
                    <p className="text-danger">{errors.resume.message}</p>
                )}
            </div>


            <button
                type="submit" className="btn-pink mt-4">
                Apply
            </button>
        </form>
    );
};

export default ApplyJobForm;
