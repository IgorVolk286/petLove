import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import {
  Div,
  Selected,
  Selected1,
  Input,
  Button,
  Icon,
  Form,
  DivSel,
  Radio,
  ReactSelect,
  IconLine,
} from '../Filter/NoticesFilters.styled';
// import { NotitecList } from 'components/NotitesList/NotitesList';
// import { Notice } from 'components/Notice/Notice';

export const NoticesFilters = ({ notites }) => {
  // const [notices, setNotices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sex, setSex] = useState([]);
  const [type, setType] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState([]);
  console.log(notites.results);

  const handleCityChange = selectedOption => {
    setSelectedCity(selectedOption);
  };

  const sel = cities.filter(
    item =>
      item.state.includes(selectedCity) || item.city.includes(selectedCity)
  );
  console.log(sel);
  console.log(selectedCity);
  // console.log(sel.map(item => item.state));
  const formatOptions = cities => {
    return cities.map(city => ({
      value: city.city,
      label: `${city.state},${city.city}`,
    }));
  };

  // useEffect(() => {
  //   const getNotices = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://petlove.b.goit.study/api/notices'
  //       );
  //       const data = await response.data;
  //       console.log(data);
  //       setNotices(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getNotices();
  // }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          'https://petlove.b.goit.study/api/notices/categories'
        );
        const data = await response.data;
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();

    const getSex = async () => {
      try {
        const response = await axios.get(
          'https://petlove.b.goit.study/api/notices/sex'
        );
        const data = await response.data;
        console.log(data);
        setSex(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSex();
    const getType = async () => {
      try {
        const response = await axios.get(
          'https://petlove.b.goit.study/api/notices/species'
        );
        const data = await response.data;
        console.log(data);
        setType(data);
      } catch (error) {
        console.error(error);
      }
    };
    getType();

    const getLocation = async () => {
      try {
        const response = await axios.get(
          'https://petlove.b.goit.study/api/cities'
        );
        const data = await response.data;
        const formData = data.map(location => ({
          city: location.cityEn,
          state: location.stateEn,
        }));
        console.log(formData);
        setCities(formData);
      } catch (error) {
        console.error(error);
      }
    };
    getLocation();
  }, []);

  const [select, setSelect] = useState('A to Z');
  return (
    <div>
      <Div>
        <Form>
          <Input type="text" name="search" id="position" placeholder="Search" />
          <Button type="submit">
            <Icon />
          </Button>
          <DivSel>
            <Selected type="text" name="category" id="category ">
              <option selected> Category </option>
              {categories.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Selected>
            <Selected type="text" name="by gender" id="sex">
              <option selected> By gender </option>

              {sex.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Selected>
          </DivSel>
          <Selected1 type="text" name="type" id="type">
            <option selected> By type</option>

            {type.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Selected1>
          <Select
            value={selectedCity}
            onChange={handleCityChange}
            onInputChange={handleCityChange}
            options={formatOptions(sel)}
            placeholder="Location"
            isSearchable={true}
          />
          <IconLine />
          <div>
            <Radio type="radio" name="" id="" placeholder="Popular" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
          </div>
        </Form>
      </Div>

      <div>
        <ul>
          {/* {notites.results.map(item => (
            <Notice item={item} />
          ))} */}
        </ul>
      </div>
    </div>
  );
};
