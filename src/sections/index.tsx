import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 1200px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const HomeSection = () => {
  return (
    <Section>
      <div>Test</div>
      <div>Test 2</div>
    </Section>
  );
};

export { HomeSection };
