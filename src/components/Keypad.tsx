const buttons = [
  "7",
  "4",
  "1",
  ".",
  "8",
  "5",
  "2",
  "0",
  "9",
  "6",
  "3",
  "/",
  "DEL",
  "+",
  "-",
  "x",
];

const Keypad = () => {
  return (
    <div className="h-3/5 bg-toggle transition rounded-md">
      <div className="grid grid-flow-rows grid-cols-4 grid-rows-4 gap-3 p-4">
        {buttons.map((btn, i) => (
          <div
            className={`key main-key-shadow ${
              btn === "DEL" ? "bg-reset text-white" : "bg-key text-keyMain"
            }`}
            key={i}
          >
            {btn}
          </div>
        ))}
      </div>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-3 px-4 pb-4">
        <div className="key key-shadow bg-reset reset-key-shadow text-white transition">
          RESET
        </div>
        <div className="key result-key-shadow bg-result result-key-shadow text-keyResult transition">
          =
        </div>
      </div>
    </div>
  );
};

export default Keypad;
