import React, { useState } from "react"; 

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [formData, setFormData] = useState({name: '', email: '',});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (formData.name.length <= 5) {
      errors.name = 'The name must have at least 6 characters';
      isValid = false;
    }

    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      errors.email = 'Please enter a valid e-mail address';
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log(formData);
      setSuccessMessage(`Thank you ${formData.name}, we will get in touch with you shortly`);
      setFormData({ name: '', email: '' });
      setErrors({});
    }
  };

  return (

    <div className="contact-form-container">
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Full name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
    {successMessage && <p className="success-message">{successMessage}</p>}
  </div>

  );
};

export default Form;
