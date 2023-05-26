import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";

import user from "../../src/user";
import data from "../../src/data";
import friends from "../../src/friends";
import css from "./App.module.css";


export const App = () => {
  return (
    <div className={css.container}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
        avatar={user.avatar}
        stats ={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <Statistics stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>

      </div>
  );
};
