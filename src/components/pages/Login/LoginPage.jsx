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
  A,
  Div,
} from './LoginPage.styled';
const SignInFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
    .required('Required'),
  password: Yup.string().min(7, 'Too short! At least 2').required('Required'),
});

export const LoginPage = () => {
  return (
    <Wrap>
      <Corgi />
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
          Don’t have an account? <A href="/register">Register</A>
        </DownText>
      </Div>
    </Wrap>
  );
};
