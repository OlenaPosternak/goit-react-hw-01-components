import styled from '@emotion/styled';

export const FriendListStyle = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  width: 450px;
  align-items: center;

  border: 1px solid gray;
  border-radius: 25px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Name = styled.p`
  margin-left: 50px;
`;

export const Status = styled.span`
  margin-right: 30px;
  color: ${p => {
    if (p.props) {
      return `green`;
    } else {
      return `red`;
    }
  }};
`;
