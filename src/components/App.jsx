import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../components/pages/Main/MainPage';
import { LoginPage } from '../components/pages/Login/LoginPage';
import { Layout } from '../components/Layout/Layout';
import { RegistrationPage } from '../components/pages/RegistrationPage/RegistrationPage';
import { HomePage } from '../components/pages/Home/HomePage';
import { NewsPage } from '../components/pages/News/NewsPage';
import { OurFriendsPage } from '../components/pages/OurFriends/OurFriendsPage';
import { Page404 } from '../components/pages/Page404/Page404';
import { FindPetPage } from '../components/pages/FindPet/FindPetPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
export const App = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const getNotices = async () => {
      try {
        const response = await axios.get(
          'https://petlove.b.goit.study/api/notices'
        );
        const data = await response.data;
        console.log(data);
        setNotices(data);
      } catch (error) {
        console.error(error);
      }
    };
    getNotices();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="main" element={<MainPage />} />
        <Route path="/home" index element={<HomePage />}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="/login" index element={<LoginPage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/friends" element={<OurFriendsPage />}></Route>
          <Route
            path="/notites"
            element={<FindPetPage notites={notices} />}
          ></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
