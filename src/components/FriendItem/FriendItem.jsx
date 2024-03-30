import {
  Img,
  Title,
  Text,
  A,
  Button,
  Span,
  Div,
  Li,
  Card,
  CardUl,
} from '../FriendItem/FriendItem.styled';

export const FriendItem = ({ oneFriend }) => {
  const {
    title,
    date,
    url,
    addressUrl,
    workDays,
    imageUrl,
    address,
    phone,
    email,
  } = oneFriend;
  console.log(oneFriend.workDays);
  // const dateNews = new Date(date);
  // const day = dateNews.getDate();
  // const month = dateNews.getMonth() + 1;
  // const year = dateNews.getFullYear();
  // const formatDay = day < 10 ? '0' + day : day;
  // const formatMonth = month < 10 ? '0' + month : month;
  // const newsDate = `${formatDay}/${formatMonth}/${year}`;

  return (
    <Card>
      <Img src={imageUrl} alt="picture" />
      <CardUl>
        <li>
          {/* {oneFriend.workDays.map(
            day => {
              console.log(day);
            } */}
          {/* // <span>{day.from}</span>
          )} */}
        </li>
        <li>
          <Title>{title}</Title>
        </li>
        <Li>
          <A href="mailto:${email}"> Email </A>
          {email ? <Text>:{email}</Text> : <Text>: Website only</Text>}
        </Li>

        <Li>
          <A href="${addressUrl}">Adress</A>
          {address ? <Text>:{address}</Text> : <Text>: Website only</Text>}
        </Li>
        <Li>
          <A href="tel:+${phone}">Phone</A>
          {phone ? <Text>:{phone}</Text> : <Text>: Website only</Text>}
        </Li>
      </CardUl>
    </Card>
  );
};
