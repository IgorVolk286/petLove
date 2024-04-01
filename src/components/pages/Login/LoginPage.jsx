import { Corgi } from 'components/petBlock/petBlock';
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
} from './LoginPage.styled';
import { Rich } from '../../Rich/Rich';
import { useMediaQuery } from 'react-responsive';
const SignInFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
    .required('Required'),
  password: Yup.string().min(7, 'Too short! At least 2').required('Required'),
});

export const LoginPage = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return (
    <Wrap>
      <Corgi />
      {isTablet && <Rich />}
      <Div>
        <Title>Log in</Title>
        <P>Welcome! Please enter your credentials to login to the platform: </P>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInFormSchema}
          //   onSubmit={values => logIn(values)}
        >
          <Form>
            <label>
              <Input name="email" placeholder="Email" type="email" />
              <ErrorMes name="email" component="div" />
            </label>
            <label>
              <Input name="password" placeholder="Password" type="password" />
              <ErrorMes name="password" component="div" />
            </label>
            <Button type="submit">LOG IN</Button>
          </Form>
        </Formik>
        <DownText>
          Don’t have an account? <NavLinka to="/register">Register</NavLinka>
        </DownText>
      </Div>
    </Wrap>
  );
};
