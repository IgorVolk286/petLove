import { Cat } from 'components/petBlock cat/petBlockCat';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Title,
  P,
  Input,
  Wrap,
  ErrorMes,
  DownText,
  NavLinka,
  Div,
} from '../RegistrationPage/Regisstration.styled';
import { Jack } from '../../Jack/Jack';
import { useMediaQuery } from 'react-responsive';
const RegisrationFormSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
    .required('Required'),
  password: Yup.string().min(7, 'Too short! At least 2').required('Required'),
});

export const RegistrationPage = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return (
    <Wrap>
      <Cat />
      {isTablet && <Jack />}
      <Div>
        <Title>Registration</Title>
        <P>Thank you for your interest in our platform.</P>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmpasswrd: ' ',
          }}
          validationSchema={RegisrationFormSchema}
          //   onSubmit={values => logIn(values)}
        >
          <Form>
            <label>
              <Input name="name" placeholder="Name" type="text" />
              <ErrorMes name="name" component="div" />
            </label>
            <label>
              <Input name="email" placeholder="Email" type="email" />
              <ErrorMes name="email" component="div" />
            </label>
            <label>
              <Input name="password" placeholder="Password" type="password" />
              <ErrorMes name="password" component="div" />
            </label>
            {/* <label>
              <Input
                name="confirmpassword"
                placeholder="Confirm password"
                type="password"
              />
              <ErrorMes name="confirmpassword" component="div" />
            </label> */}
            <Button type="submit">REGISTRATION</Button>
          </Form>
        </Formik>
        <DownText>
          Already have an account? <NavLinka to="/login">Login</NavLinka>
        </DownText>
      </Div>
    </Wrap>
  );
};
