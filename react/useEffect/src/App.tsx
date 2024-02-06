import { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  //infinite loop
  //useEffect(()=>{});

  //יעבוד בטעינה הראשונה של הקומפוננטה
  useEffect(() => {
    console.log('hii');
  }, []);

  //ישתנה count יעבוד על פעם שהערך של 
  //[count] --> deps array
  useEffect(() => {
    console.log('count', count)
    if (count % 7 == 0)
      alert("BOOM!")
  }, [count]);

  return (
    <>
      <h1>Hello World!</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default App
