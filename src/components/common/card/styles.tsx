import styled from "styled-components";

const Card = styled.div`
  width: auto;
  height: auto;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 1px 1px 1px black;
`;

const CardHeader = styled.div`
  border-bottom: 1px;
  border-color: black;
`;

const CardContent = styled.div``;

const CardFooter = styled.div`
  border-top: 1px;
  border-color: black;
`;

export { Card, CardHeader, CardContent, CardFooter };
