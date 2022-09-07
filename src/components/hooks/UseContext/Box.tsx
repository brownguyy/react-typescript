import { ThemeContext } from "./UseContext";
import { useContext } from "react";
export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ background: theme.primary.main, color: theme.primary.text }}>
      Hello
    </div>
  );
};
