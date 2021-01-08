import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby"
import * as Yup from "yup";
import formStyles from './contactform.module.scss'

const ContactSchema = Yup.object().shape({
    name: Yup.string().required(' Please enter your full name'),
    email: Yup.string().email('Must be a valid email address').required('Please enter your email'),
    contactmessage: Yup.string().required('Please enter your message and send to everyday hero covid19 podcast team'),
  });

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

function ContactFormFn() {
  const { register, handleSubmit, formState, errors, reset } = useForm({
    validationSchema: ContactSchema,
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
          body: encode({ "form-name": "contact", ...state })
      })
          .then(response => {

            navigate("/success/")
            setFeedbackMsg(`Thank you for contacting everyday heroes covid19 podcast team. We'll get back to you soon.`)
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
   
      <div className={formStyles.flex_container}>

        <form onSubmit={handleSubmit(onSubmit)} method="post" data-netlify-honeypot="bot-field" data-netlify="true"
            name="contact" action="/success/">
          <input type="hidden" name="bot-field" aria-label= "Hidden botfield input" />
          <input type="hidden" name="form-name" value="contact" aria-label= "Hidden form name " />
          
          {console.log(feedbackMsg)}
          <div className={formStyles.row}>
          <div className={formStyles.col_50}>

            <div className="Fullname_area">
              <label htmlFor="name">Full Name</label>
              <input type="text" className={!JSON.stringify(formState.touched.name) && !errors.name ? ""
                    :JSON.stringify(formState.touched.name) && !errors.name ? "is-valid" :"is-invalid"} name="name" id="name"
                    placeholder="Enter your full name" onChange={handleChange} ref={register} aria-label="Enter your full name" />
              {errors.name && <p className={formStyles.error_text}>{errors.name.message}</p>}
            </div>
            </div>
          </div>
          <div className="Email_area">
            <label htmlFor="email">Email address</label>
            <input type="email" className={!JSON.stringify(formState.touched.email) && !errors.email ? ""
                      :JSON.stringify(formState.touched.email) && !errors.email ? "is-valid" :"is-invalid"} name="email" id="email"
                      placeholder="Enter your email address" onChange={handleChange} ref={register} aria-label="Enter your email" />
            {errors.email && <p className={formStyles.error_text}>{errors.email.message}</p>}
          </div>
          <div className="Story_area">
            <label htmlFor="contactmessage">Your message</label>
            <textarea className={!JSON.stringify(formState.touched.contactmessage) && !errors.contactmessage ? ""
                      :JSON.stringify(formState.touched.contactmessage) && !errors.contactmessage ? "is-valid" :"is-invalid"}
                      name="contactmessage" id="contactmessage" rows="6" placeholder="Write your message" onChange={handleChange}
                      ref={register} aria-label= " Enter your message here" />
            {errors.contactmessage && <p className={formStyles.error_text}>{errors.contactmessage.message}</p>}
          </div>
          <div className="actions">
            <input type="submit" value="Submit" className="special" aria-label= "submit your share story form" />
          </div>
        </form>

      </div>
  
  );
}

export default ContactFormFn;
