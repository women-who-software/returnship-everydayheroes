import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby"
import * as Yup from "yup";
//import Alert from 'react-bootstrap/Alert'

import formStyles from './form.module.scss'

//This RegEx(regular expression) can easily check whether a user has entered something that looks like a valid US phone number.
const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// Using lib YUP here to validate the rest of the form inputs.
// Specifying if a input is required and what message is displayed if validation fails.
const ShareYourStorySchema = Yup.object().shape({
    fullName: Yup.string().required(' Please enter your full name'),
    location: Yup.string().required(' Please enter your location'),
    email: Yup.string().email('Must be a valid email address').required('Please enter your email'),
    phone: Yup.string().matches(phoneRegExp, {message: 'Phone number is not valid', excludeEmptyString:true }).required('Please enter your phone'),
    story: Yup.string().required('Please enter your story that features an everyday hero'),

  });

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

export default function StoryForm() {
  const { register, handleSubmit, formState, errors, reset } = useForm({
  validationSchema: ShareYourStorySchema,
    mode: 'onChange',
  });
    const [state, setState] = React.useState({})
    const [feedbackMsg, setFeedbackMsg] = useState(null)
    const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })

    const onSubmit = (data,e) => {
      // use this to test out form locally
      //alert(JSON.stringify(data));

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "share-your-story", ...state })
        })
            .then(response => {

              navigate("/success/")
              setFeedbackMsg(`Thank you for submitting your everyday heroes story. We'll get back to you soon.`)
              reset()
              console.log(response)

            })
            .catch(error => {
            setFeedbackMsg("Oops, something went wrong. The form could not be submitted. Please try again or send us an email at cv19eh@gmail.com ")
            console.log(error)
            })
          e.preventDefault();
  };

  return (
      <div className={formStyles.row}>
        <div className={formStyles.flex_container}>

            <form onSubmit={handleSubmit(onSubmit)}
            name="share-your-story"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success/">
            <input type="hidden" name="bot-field" aria-label= "Hidden botfield input" />
            <input type="hidden" name="form-name" value="share-your-story" aria-label= "Hidden form name "/>

            <h3 className={formStyles.logo_title}>SHARE YOUR STORY</h3>

            {console.log(feedbackMsg)}

            <div className={formStyles.row} >
                <div className={formStyles.col_50}>
                    <div className="Fullname_area">
                        <label htmlFor="fullName"> Full Name</label>
                        <input
                        type="text"
                        className={
                            !JSON.stringify(formState.touched.fullName)
                            && !errors.fullName ? ""
                            :JSON.stringify(formState.touched.fullName)
                              && !errors.fullName ? "is-valid" :"is-invalid"
                          }
                        name="fullName"
                        id = "fullName"
                        placeholder="Jane Smith"
                        onChange={handleChange}
                        ref={register}
                        aria-label="Enter your full name"
                         />
                        {errors.fullName && <p className={formStyles.error_text}>{errors.fullName.message}</p>}
                    </div>

                    <div className="Location_area">
                        <label htmlFor="location">Location</label>
                        <input
                        type="text"
                        className={
                            !JSON.stringify(formState.touched.location)
                            && !errors.location ? ""
                            :JSON.stringify(formState.touched.location)
                              && !errors.location ? "is-valid" :"is-invalid"
                          }
                        name="location"
                        id="location"
                        placeholder = " Denver, CO"
                        onChange={handleChange}
                        ref={register}
                        aria-label="Enter your location"
                         />
                        {errors.location && <p className={formStyles.error_text}>{errors.location.message}</p>}
                    </div>
                </div>

                <div className={formStyles.col_50}>
                    <div className="Email_area">
                        <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        className={
                            !JSON.stringify(formState.touched.email)
                            && !errors.email ? ""
                            :JSON.stringify(formState.touched.email)
                              && !errors.email ? "is-valid" :"is-invalid"
                          }
                        name="email"
                        placeholder="janesmith@email.com"
                        onChange={handleChange}
                        ref={register}
                        aria-label="Enter your email"
                         />
                        {errors.email && <p className={formStyles.error_text}>{errors.email.message}</p>}
                    </div>
                    <div className="Phone_area">
                        <label htmlFor="phone">Phone Number </label>
                        <input
                        type="tel"
                        className={
                            !JSON.stringify(formState.touched.phone)
                            && !errors.phone ? ""
                            :JSON.stringify(formState.touched.phone)
                              && !errors.phone ? "is-valid" :"is-invalid"
                          }
                        name="phone"
                        placeholder="123 456 5555"
                        onChange={handleChange}
                        ref={register}
                        aria-label= "Enter your phone number"
                        />
                        {errors.phone && <p className={formStyles.error_text}>{errors.phone.message}</p>}
                    </div>
                </div>

                </div>

                <div className="Zoom_area">
                    <label htmlFor="zoom_option">Are you willing to share your story over zoom?</label>
                    <select
                    className={formStyles.select_css}
                    name="zoom_option"
                    id="zoom_option"
                    defaultValue="undecided"
                    onChange={handleChange}
                    ref={register} >
                        <option value= "undecided" >Undecided</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="Story_area">
                    <label htmlFor="story">Share your story...</label>
                    <textarea
                    className={
                        !JSON.stringify(formState.touched.story)
                        && !errors.story ? ""
                        :JSON.stringify(formState.touched.story)
                          && !errors.story ? "is-valid" :"is-invalid"
                      }
                    name="story"
                    id="story"
                    rows="6"
                    placeholder="My story..."
                    onChange={handleChange}
                    ref={register}
                    aria-label= " Enter your everyday hero COVID19 Story"
                     />
                    {errors.story && <p className={formStyles.error_text}>{errors.story.message}</p>}
                </div>



                <div className="actions">
                <input type="submit" value="Submit" className="special" aria-label= "submit your share story form" />
                </div>


            </form>

        </div>
    </div>
  );
}
