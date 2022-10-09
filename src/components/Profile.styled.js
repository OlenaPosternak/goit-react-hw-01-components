import styled from '@emotion/styled';

export const Container = styled.div`
  color: grey;
  text-align: center;
`;

export const Name = styled.p`
  font-size: 80px;
  color: darkgray;
  font-weight: bold;
  margin: 0px;
`;

export const Tag = styled.p`
  text-align: center;
  margin: 10px;
`;

export const Location = styled.p`
  text-align: center;
  margin: 10px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  margin:0px;
  padding:0px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 1px solid gray;
    width: 200px;
  }
`;
