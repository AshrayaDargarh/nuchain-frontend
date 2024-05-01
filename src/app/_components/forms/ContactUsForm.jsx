"use client"
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactUsFormValidation from "@/app/_validation/ContactUsFormValidation";
import useFormSubmit from "@/app/_hooks/UseFormSubmit";
import { toast } from 'react-hot-toast'
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ContactUsFormValidation) });

  const { loading, error, submitData, setSuccess, success } = useFormSubmit('/contact/us/');

  const onsubmit = async (data) => {
    let formData = data;
    if (data.sector === 'other') {
      formData = { ...data, sector: customSector }
      submitData(formData)
      return;
    }

    console.log(formData, 'formdaataaaaa');
    submitData(formData)
  };

  const [customSector, setCustomSector] = useState('')
  const phoneNumber = watch('contact_number');

  useEffect(() => {
    console.log('Phone number:', phoneNumber);
    register('contact_number');
  }, [phoneNumber, register]);
  useEffect(() => {
    if (success === true) {
      toast.success("Thanks for reaching out! We&apos;ve got your message and will be in touch shortly!")
      setSuccess(false)
      reset()
    }
  }, [success])

  const [showInput, setShowInput] = useState(false);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setShowInput(selectedValue === 'other');

    setValue("sector", selectedValue);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          name="full_name"
          className="form-control"
          id="formGroupExampleInput"
          {...register("full_name")}
        />
        {errors.full_name && (
          <p className="text-danger">{errors.full_name.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Your Organization
        </label>
        <input
          type="text"
          name="organization"
          className="form-control"
          id="formGroupExampleInput"
          {...register("organization")}
        />
        {errors.organization && (
          <p className="text-danger">{errors.organization.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="specificSizeSelect">
          Your Sector / Industry
        </label>
        <select
          className="form-select"
          name="sector"
          id="specificSizeSelect"
          onChange={handleSelectChange}
        >
          <option value="">Select Your Organization</option>
          <option value="E-governance">E-governance</option>
          <option value="Banking and Finance">Banking and Finance</option>
          <option value="Travel">Travel</option>
          <option value="RWA">RWA</option>
          <option value="Gaming & Entertainment">Gaming & Entertainment</option>
          <option value="Tokenization">Tokenization</option>
          <option value="other">Other</option>
        </select>
        {errors.sector && (
          <p className="text-danger">{errors.sector.message}</p>
        )}
      </div>

      {showInput && (
        <div className="mb-3">
          <label className="form-label" htmlFor="formGroupExampleInput">
            Enter Your Sector / Industry
          </label>
          <input
            type="text"
            required
            name="custom_sector"
            onChange={(e) => setCustomSector(e.target.value)}
            className="form-control"
            id="formGroupExampleInput"
          />

        </div>
      )}

      <div className="mb-3">
        <label className="form-label" for="specificSizeSelect">
          Your Website
        </label>
        <input
          type="text"
          name="website"
          className="form-control"
          id="formGroupExampleInput"
          {...register("website")}
        />
        {errors.website && (
          <p className="text-danger">{errors.website.message}</p>
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
          How can we help you?
        </label>
        <textarea
          type="textfield"
          name="message"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Briefly describe how we can help"
          rows="4"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-danger">{errors.message.message}</p>
        )}
      </div>

      <div className="mb-3 form-check d-flex">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Yes, please sign me up for NuChain newsletters.
        </label>
      </div>

      <button

        type="submit" className="btn-pink mt-4">
        Submit Form
      </button>
      <button
        disabled={true}
        className="btn-pink mt-4 ms-3">
        Book a Call
      </button>
    </form>
  );
};

export default ContactUsForm;
