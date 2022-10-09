import user from '../../src/user.json';
import stats from '../../src/data.json';
import friends from '../../src/friends.json';
import items from '../../src/transactions.json';

import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { Transactions } from './TransactionHistory';


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user}></Profile>
      <Statistics stats={stats}></Statistics>
      <FriendList friends={friends}></FriendList>
      <Transactions items={items}></Transactions>
    </div>
  );
};