import { useEffect, useState } from 'react';
import { Icon, Button, Input, Title, List } from '../News/NewsPage.styled';
import { NewItem } from '../../../components/NewItem/NewItem';
import axios from 'axios';
export const NewsPage = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          'https://petlove.b.goit.study/api/news'
        );
        const data = await response.data;
        setNews(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getNews();
  }, []);

  return (
    <div>
      <Title>News</Title>
      <form>
        <Input type="text" placeholder="Search" />
        <Button type="submit">
          <Icon />
        </Button>
      </form>

      <List>
        {news.map(newItem => (
          <NewItem oneNew={newItem} key={newItem._id} />
        ))}
      </List>
    </div>
  );
};
