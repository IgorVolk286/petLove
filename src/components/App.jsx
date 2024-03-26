import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/Main/MainPage';
import { LoginPage } from './pages/Login/LoginPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <LoginPage />
    </div>
  );
};
