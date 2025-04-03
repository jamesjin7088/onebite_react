import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    console.log("update");
  });

  // 3. 언마운트 : 죽음
  // count가 바뀔 때마다 콜백함수가 변경됨
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);
  // 의존성 배열
  // dependency array
  // deps

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
