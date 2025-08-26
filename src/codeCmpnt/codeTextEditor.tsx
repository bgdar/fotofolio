import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  dracula,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { useGlobalState } from "../globalState";

type CodeTextEditorProps = {
  code?: string;
  language?: string; // Optional, can be used to specify the language for syntax highlighting
};

const CodeTextEditor = ({ code, language }: CodeTextEditorProps) => {
  const { theme } = useGlobalState();

  return (
    <div className="w-full h-60 p-4 rounded-lg overflow-auto scrollbar-hide  ">
      <div
        className="w-full h-full max-h-56 p-4 rounded-lg bg-[#282c34] shadow-lg overflow-auto scrollbar-hide  text-sm"
        style={{
          fontSize: "1rem", // optional, menyesuaikan ukuran font
        }}
      >
        <SyntaxHighlighter
          language={language}
          style={theme === "dark" ? oneDark : dracula} // Use oneDark for dark theme, or default for light
          customStyle={{
            background: "transparent",
            margin: 0,
            padding: 0,
            whiteSpace: "pre", // biar tidak wrapping
            minHeight: "100%",
          }}
        >
          {code || "Not have code to display"}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeTextEditor;
