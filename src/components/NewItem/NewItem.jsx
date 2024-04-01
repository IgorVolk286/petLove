import {
  Img,
  Title,
  Text,
  Button,
  Span,
  Div,
  Li,
  List,
} from '../NewItem/NewItem.styled';

export const NewItem = ({ oneNew }) => {
  const { imgUrl, title, text, date, url } = oneNew;
  const dateNews = new Date(date);
  const day = dateNews.getDate();
  const month = dateNews.getMonth() + 1;
  const year = dateNews.getFullYear();
  const formatDay = day < 10 ? '0' + day : day;
  const formatMonth = month < 10 ? '0' + month : month;
  const newsDate = `${formatDay}/${formatMonth}/${year}`;

  return (
    <Li>
      <List>
        <li>
          <Img src={imgUrl} alt="picture" />
        </li>
        <li>
          <Title>{title}</Title>
        </li>
        <li>
          <Text>{text}</Text>
        </li>
      </List>
      <Div>
        <Span>{newsDate}</Span>
        <Button href={url} target="_blank">
          Read more
        </Button>
      </Div>
    </Li>
  );
};
