import { useState } from 'react';

import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);


  const handleClick = () => {
    setCount((prev: number) => prev + 1);
  }

  return (
    <div>
      <div className={classes.div}>
        Count: {count}
      </div>

      <button onClick={handleClick} className={classes.red}>
        increment
      </button>
    </div>
  )
}