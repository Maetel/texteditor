import { createRoot } from "react-dom/client";
import TextEditor from "@/TextEditor";
import React from "react";

function TheApp() {
  const [text, setText] = React.useState("");
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <button
        onClick={() => {
          alert(text);
        }}
      >
        텍스트 내용 가져오기
      </button>
      <TextEditor text={text} setText={setText} />
    </div>
  );
}

const domNode = document.getElementById("theTextEditor");
const root = createRoot(domNode);
root.render(<TheApp></TheApp>);
