import React from 'react';
import Wrapper from './friendlist.component';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <section>
      <h2>
        Task #03 - Friend List
        <span className="subheader"> | using Styled Components</span>
      </h2>
      <Wrapper>
        <Wrapper.Ul>
          {friends.map(el => {
            return (
              <Wrapper.Li key={el.id}>
                <Wrapper.IsActive status={el.isOnline}></Wrapper.IsActive>
                <Wrapper.Avatar src={el.avatar} />
                <Wrapper.Name>{el.name}</Wrapper.Name>
              </Wrapper.Li>
            );
          })}
        </Wrapper.Ul>
      </Wrapper>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.object.isRequired,
};

export default FriendList;
