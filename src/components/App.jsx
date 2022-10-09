import { Profile } from './Profile';
import user from '../../src/user.json';
import data from '../../src/data.json';
import { StatisticsInfo } from './Statistics';

console.log(data);

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
      <StatisticsInfo data={data}></StatisticsInfo>
    </div>
  );
};