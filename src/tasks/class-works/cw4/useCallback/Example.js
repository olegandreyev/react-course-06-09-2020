import React, { useState, useCallback, useMemo } from 'react';

// Генерируем случайный цвет для кнопки
const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);


// Мемоизированная кнопка с случайным цветом
const Button = React.memo((props) =>
  <button onClick={props.onClick} style={{background: randomColour()}}>
    {props.children}
  </button>
);

// Будем сохранять все новосозданные функции в множество.
const functions = new Set();


const Example = () => {
  const [delta, setDelta] = useState(1);
  const [c, setC] = useState(0);

  const incrementDelta = useCallback(() => setDelta(delta => delta + 1), []);
  const increment = useCallback(() => setC(c => c + delta), [delta]);

  const heavyValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += delta;
    }
    return result
  }, [delta]);


  // Регистрируем функции чтобы посчитать их
  functions.add(incrementDelta);
  functions.add(increment);

  return (
    <div>
      <div> Delta is {delta} </div>
      <div> Counter is {c} </div>
      <div>Heavy value is {heavyValue}</div>
      <br/>
      <div>
        <Button onClick={incrementDelta}>Increment Delta</Button>
        <Button onClick={increment}>Increment Counter</Button>
      </div>
      <br/>
      <div> Newly Created Functions: {functions.size - 2} </div>
    </div>
  )
};

export default Example;
