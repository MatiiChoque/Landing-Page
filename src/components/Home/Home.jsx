import React from "react";
import { useState } from "react";
import { validationEmail } from "./Validate";
import styles from "./Home.module.scss";

import urlAxios from "../../utils/clientAxios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });

  const newUser = {
    email: form.email,
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleInputBlur = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "email") {
      setErrors({ ...validationEmail({ ...form, [name]: value }, errors) });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      console.log(newUser);
      const response = await urlAxios.post("/landing", newUser);
      setIsLoading(false);
      setForm({
        email: "",
      });
      console.log(response, "response");
      console.log(form, "form");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="home" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.main_text}>
          <p>Play, </p>
          <p>Dominate, </p>
          <p>Inspire.</p>
        </div>
        <form className={styles.first_form}>
          <input
            className={styles.inputForm}
            type="email"
            name="email"
            value={form.email}
            autoComplete="email"
            placeholder="Your email"
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            required
          />
          <button
            className={styles.buttonForm}
            type="submit"
            disabled={isLoading}
          >
            Register for beta
          </button>
        </form>
        {errors.email && <p className={styles.errorText}>{errors.email}</p>}
      </div>
    </div>
  );
};

export default Home;
