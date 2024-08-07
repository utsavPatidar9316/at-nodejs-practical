import Joi from "joi";

const UserValidationSchema = Joi.object({
  userName: Joi.string().min(3).max(30).required().messages({
    "string.base": "Username should be a type of text",
    "string.empty": "Username cannot be an empty field",
    "string.min": "Username should have a minimum length of {#limit}",
    "string.max": "Username should have a maximum length of {#limit}",
    "any.required": "Username is a required field",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Email must be a valid email",
      "any.required": "Email is a required field",
    }),
  password: Joi.string().min(6).required().messages({
    "string.base": "Password should be a type of text",
    "string.empty": "Password cannot be an empty field",
    "string.min": "Password should have a minimum length of {#limit}",
    "any.required": "Password is a required field",
  }),
});

export { UserValidationSchema };
