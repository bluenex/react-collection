const monthMap = [
  'ม.ค.',
  'ก.พ.',
  'มี.ค.',
  'เม.ย.',
  'พ.ค.',
  'มิ.ย.',
  'ก.ค.',
  'ส.ค.',
  'ก.ย.',
  'ต.ค.',
  'พ.ย.',
  'ธ.ค.',
];

const now = new Date();
const currentYear = now.getUTCFullYear();
const currentMonth = now.getUTCMonth();

const supportYears = [currentYear, currentYear - 1];

const MonthPicker = () => {
  return (
    <div className="w-fit h-fit p-4 rounded-xl shadow-lg shadow-neutral-400 grid gap-y-4">
      {supportYears.map((y) => {
        return (
          <div>
            <h3 className="text-lg font-bold mb-2">{y}</h3>
            <div className="grid grid-cols-4 grid-rows-3 gap-x-6 gap-y-2 mb-4">
              {monthMap.map((m) => {
                return <button>☑ {m}</button>;
              })}
            </div>
            <hr />
          </div>
        );
      })}
      <button className="place-self-end bg-green-600 px-5 py-2 rounded-xl text-white text-bold">
        ยืนยัน
      </button>
    </div>
  );
};

export default MonthPicker;
