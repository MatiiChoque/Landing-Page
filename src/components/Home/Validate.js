export const validationEmail = (form, err) => {
  const errors = { ...err };
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.com(.\w{2})?$/.test(form.email) ||
    form.email === ""
  ) {
    errors.email = "";
  } else {
    errors.email = "Email invalido";
  }
  return errors;
};
