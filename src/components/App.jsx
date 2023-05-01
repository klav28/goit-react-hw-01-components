import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import FriendList from './friendlist/friendlist';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
