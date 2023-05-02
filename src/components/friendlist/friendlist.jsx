import React from 'react';
import Wrapper from './friendlist.component';
import PropTypes from 'prop-types';
import { FriendListItem } from './friendlistitem';

export const FriendList = ({ friends }) => {
  return (
    <section>
      <h2>
        Task #03 - Friend List
        <span className="subheader"> | using Styled Components</span>
      </h2>
      <Wrapper>
        <Wrapper.Ul>
          {friends.map ( el => {
            return (
              <FriendListItem id={el.id} avatar={el.avatar} name={el.name} isOnline={el.isOnline}></FriendListItem>
            );
          })
        }
        </Wrapper.Ul>
      </Wrapper>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.object.isRequired,
};
