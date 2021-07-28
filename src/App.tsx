import { useState, useCallback } from "react";
import { Header, DisplayBox, Keypad } from "./components";

function App() {
  const [theme, setTheme] = useState(1);

  const updateTheme = (num: number) => setTheme(num);

  const renderThemeClassname = useCallback(() => {
    let className = "theme-";
    switch (theme) {
      case 1:
        className += "one";
        break;
      case 2:
        className += "two";
        break;
      default:
        className += "three";
    }

    return className;
  }, [theme]);

  return (
    <div className={renderThemeClassname()}>
      <div className="flex justify-center items-center h-screen bg-main transition">
        <div className="flex w-2/6 flex-col">
          <Header updateTheme={updateTheme} theme={theme} />
          <DisplayBox />
          <Keypad />
        </div>
      </div>
    </div>
  );
}

export default App;
