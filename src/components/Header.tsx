interface InputProps {
  updateTheme: (num: number) => void;
  theme: number;
}

const Header: React.FC<InputProps> = ({ updateTheme, theme }) => {
  return (
    // <div className="header-row">
    //   <div className="header-row-title font-press-start">calc</div>
    //   <div className="header-row-theme-container">
    //     <div className="theme">Theme</div>
    //     <div className="theme-switcher-container">
    //       <div className="theme-numbers">
    //         <div className="theme-numbers__number">1</div>
    //         <div className="theme-numbers__number">2</div>
    //         <div className="theme-numbers__number">3</div>
    //       </div>
    //       {/* <div className="theme-switcher"> */}
    //       <input
    //         type="range"
    //         min={1}
    //         max={3}
    //         defaultValue={theme}
    //         onChange={(e) => updateTheme(+e.target.value)}
    //         className="theme-switcher"
    //       />
    //       {/* <button onClick={() => updateTheme(1)}>theme 1</button>
    //         <button onClick={() => updateTheme(2)}>theme 2</button>
    //         <button onClick={() => updateTheme(3)}>theme 3</button> */}
    //       {/* </div> */}
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-between items-center w-full transition">
      <div className="text-3xl font-press-start text-header transition">
        calc
      </div>
      <div className="flex justify-end gap-4">
        <div className="font-press-start text-xs text-header uppercase self-end mb-1 transition">
          Theme
        </div>
        <div className="w-2/6">
          <div className="flex justify-around">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="font-press-start text-xs text-header transition"
              >
                {i}
              </div>
            ))}
          </div>
          <input
            type="range"
            min={1}
            max={3}
            defaultValue={theme}
            onChange={(e) => updateTheme(+e.target.value)}
            className="theme-switcher transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
