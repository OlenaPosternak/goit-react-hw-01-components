import styled from '@emotion/styled';

export const Container = styled.section`
margin-top: 10px;
`;

export const StatList = styled.ul`
display:flex;
list-style: none;
padding:0;`

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 25px;
border: 1px solid gray;
border-radius: 10px;

background-color:
${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }}
`

export const Title = styled.h2`
text-align: center`