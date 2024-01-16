import Container from "./components/Container";
import NavPage from "./components/NavPage";

import CircularProcessing from "./components/CircularProcessing";
import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

// import "./App.css";

function App() {
  const [scroll, setScroll] = useState(false);
  document.addEventListener("wheel", (e) => {
    if (e.deltaY < 0) {
      setScroll(true);
    } else if (e.deltaY > 0) {
      setScroll(false);
    }
  });
  return (
    <div className="h-[2000px]">
      {/* 네비게이션 */}
      <NavPage scroll={scroll} />
      <Container />
      <Button color="red">Button</Button>
      <Input type="text" label="username" />
      hello
      <CircularProcessing rate={80} />
      <CircularProcessing rate={65} />
      <CircularProcessing rate={45} />
    </div>
  );
}

export default App;
