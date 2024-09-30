import * as yup from 'yup';

const LoginSchema = yup.object({
  phoneNumber: yup.string().trim().required('msg_error_input_require'),
  password: yup.string().trim().required('msg_error_input_require'),
  captchaToken: yup.string().trim().required('Is your Robot'),
});

export { LoginSchema };
