import * as React from "react";

export type TextEditorProps = {
  style?: React.CSSProperties;
  text?: string;
  setText?: (text: string) => void;
};
export default function TextEditor(props: TextEditorProps) {
  const { text, setText, style } = props;
  return (
    <section
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <ul
        style={{
          display: "flex",
        }}
      >
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Help</li>
      </ul>
      <textarea
        value={text}
        onChange={(e) => {
          setText?.(e.target.value);
        }}
      ></textarea>
    </section>
  );
}
