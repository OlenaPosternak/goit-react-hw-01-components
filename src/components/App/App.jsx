import user from '../../data/user.json';
import stats from '../../data/data.json';
import friends from '../../data/friends.json';
import items from '../../data/transactions.json';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendsList/FriendList';
import { Transactions } from '../TransactionHistory/TransactionHistory';
import { Style } from './App.styled';

export const App = () => {
  return (
    <Style>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      
      <Statistics stats={stats}></Statistics>
      <FriendList friends={friends}></FriendList>
      <Transactions items={items}></Transactions>
    </Style>
  );
};
