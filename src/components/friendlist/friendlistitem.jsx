import React from 'react';
import Wrapper from './friendlist.component';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <Wrapper.Li key={id}>
            <Wrapper.IsActive status={isOnline}></Wrapper.IsActive>
            <Wrapper.Avatar src={avatar} />
            <Wrapper.Name>{name}</Wrapper.Name>
        </Wrapper.Li>
    );
};

