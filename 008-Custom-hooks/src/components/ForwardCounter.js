import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  useCounter();

  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
