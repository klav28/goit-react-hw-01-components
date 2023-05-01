import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 400px;
  margin: 0 auto;
`;

Wrapper.Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
  margin-top: 30px;
  list-style: none;
`;

Wrapper.Li = styled.li`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;

Wrapper.Name = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-left: 20px;
`;

Wrapper.IsActive = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  margin-right: 30px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 50%;
`;

Wrapper.Avatar = styled.img`
  margin-right: 20px;
  width: 100px;
  border-radius: 10%;
  box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.5);
  outline: 1px solid #ddd;
  padding: 5px;
  object-fit: contain;
`;

export default Wrapper;
