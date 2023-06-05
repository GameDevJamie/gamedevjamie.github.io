import React from 'react';

type Props = {
  test: string;
};
const Home = ({ test = 'test' }: Props) => {
  return <></>;
};

export default Home;
