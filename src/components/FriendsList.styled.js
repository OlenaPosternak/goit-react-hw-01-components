import styled from '@emotion/styled';

export const FriendListStyle = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  text-align: center;
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
