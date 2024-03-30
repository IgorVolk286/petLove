import { useEffect, useState } from 'react';
import {
  Icon,
  Button,
  Input,
  Title,
  List,
  Div,
} from '../OurFriends/OurFriends.styled';
import { FriendItem } from '../../../components/FriendItem/FriendItem';
import axios from 'axios';
export const OurFriendsPage = () => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const response = await axios.get(
          'https://petlove.b.goit.study/api/friends/'
        );
        const data = await response.data;
        console.log(data);
        setFriend(data);
      } catch (error) {
        console.error(error);
      }
    };
    getFriends();
  }, []);
  console.log(friend);
  return (
    <Div>
      <Title>Our friends</Title>

      <List>
        {friend.map(friendsItem => (
          <FriendItem oneFriend={friendsItem} key={friendsItem._id} />
        ))}
      </List>
    </Div>
  );
};
