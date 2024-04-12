import * as React from "react";
export type TextEditorProps = {
    style?: React.CSSProperties;
    text?: string;
    setText?: (text: string) => void;
};
export default function TextEditor(props: TextEditorProps): React.JSX.Element;
