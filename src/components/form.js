import React, { useState } from "react"
// import { Link } from "gatsby"

import styled from "styled-components"

import "../components/style/form.css"

const Form = styled.form`
`;

const FormRow = styled.div`
`;

const FormLabel = styled.label`
`;

const FormInput = styled.input`
`;
const TextInput = styled.textarea`
`;

const Button = styled.button`
`;


const NetlifyForm = () => {

  const [formState, setFormState] = useState ({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleChange = e =>{
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }

    return (
      <Form 
        name="Contact Form" 
        method="POST" 
        netlify-honeypot="bot-field" 
        data-netlify="true" 
        onSubmit={handleSubmit}
        action="/thankyou">

        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="Contact Form" />

        <FormRow className="formrow">
          <FormInput 
            type="text" 
            name="name"
            onChange={handleChange}
            value={formState.name}
            // placeholder="Name" 
          />
          <FormLabel htmlFor="name">Name:</FormLabel>
        </FormRow>

        <FormRow className="formrow">
          <FormInput 
            type="email" 
            name="email"
            onChange={handleChange}
            value={formState.email}
            // placeholder="Email"
            required="true"
          />
          <FormLabel htmlFor="email">Email:</FormLabel>
        </FormRow>

        <FormRow className="formrow">
          <FormInput 
            type="phone"
            name="phone" 
            onChange={handleChange}
            value={formState.phone}
            // placeholder="Phone"
          />
          <FormLabel htmlFor="phone">Contact Number:</FormLabel>
        </FormRow>

        <FormRow className="formrow">
          <TextInput
            type="textarea" 
            name="message"
            onChange={handleChange}
            value={formState.message}
            // placeholder="Leave a message"
          />
          <FormLabel htmlFor="message">Message:</FormLabel>
        </FormRow>

        <FormRow className="formrow">
          <Button type="submit">Send</Button>
        </FormRow>
      </Form>
    )

}

export default NetlifyForm
