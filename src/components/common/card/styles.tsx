import styled from "styled-components";

const Card = styled.div`
  width: auto;
  height: auto;
  border-radius: 5px;
  background-color: white;
  box-shadow: 1px 1px 2px 0px #585858;
`;

const CardHeader = styled.div`
  border-bottom: 1px solid black;
`;

const CardContent = styled.div``;

const CardFooter = styled.div`
  border-top: 1px solid black;
`;

export { Card, CardHeader, CardContent, CardFooter };
