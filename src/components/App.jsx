import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../components/pages/Main/MainPage';
import { LoginPage } from '../components/pages/Login/LoginPage';
import { Layout } from '../components/Layout/Layout';
import { RegistrationPage } from '../components/pages/RegistrationPage/RegistrationPage';
import { HomePage } from '../components/pages/Home/HomePage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="main" element={<MainPage />} />
        <Route path="/home" index element={<HomePage />}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="/login" index element={<LoginPage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>

          {/* <Route path="*" element={<HomePage />} /> */}
        </Route>
      </Routes>
    </div>
  );
};