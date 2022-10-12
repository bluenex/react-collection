import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import CheckIcon from '../MonthPicker/CheckIcon';

type SelectedObj = {
  // key as year, value as selected months
  // 0 = Jan, 11 = Dev
  [year: number]: number[];
};

const selectedCounter = (stateObj: SelectedObj) =>
  Object.entries(stateObj).reduce((acc, [, v]) => {
    return acc + v.length;
  }, 0);

const Checkbox = ({ active }: { active?: boolean }) => {
  return (
    <div
      className={twMerge(
        'w-4 h-4 rounded border border-neutral-300 mt-0.5 p-0.5',
        active && 'border-green-500 bg-green-500'
      )}
    >
      {active && <CheckIcon className="fill-white" />}
    </div>
  );
};

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
  const maxSelected = 2;
  const [selected, setSelected] = useState<SelectedObj>({});

  const isMaxSelected = selectedCounter(selected) >= maxSelected;

  return (
    <div className="w-fit h-fit p-4 rounded-xl shadow-lg shadow-neutral-400 grid gap-y-4 text-neutral-700">
      {supportYears.map((y) => {
        return (
          <div key={y}>
            <h3 className="text-lg font-bold mb-2">{y}</h3>
            <div className="grid grid-cols-4 grid-rows-3 gap-x-6 gap-y-2 mb-4">
              {monthMap.map((m, ind) => {
                const isActive = selected?.[y]?.includes(ind);
                const isCurrentMonth =
                  y === currentYear && ind === currentMonth;

                return (
                  <button
                    key={`${y}-${m}`}
                    className={twMerge(
                      'flex gap-1.5 items-center',
                      isActive && 'font-semibold text-green-600',
                      isCurrentMonth && 'text-green-500',
                      isMaxSelected &&
                        !isActive &&
                        'cursor-default text-neutral-300'
                    )}
                    onClick={() => {
                      setSelected((p) => {
                        const selectedMonths = p?.[y];

                        // if already checked, remove
                        if (selectedMonths?.includes(ind)) {
                          return {
                            ...p,
                            [y]: selectedMonths.filter((x) => x !== ind),
                          };
                        }

                        // -- limit number of selection
                        if (selectedCounter(p) >= maxSelected) {
                          return p;
                        }
                        // --

                        // if never select months of this year at all, just add
                        if (!selectedMonths) {
                          return { ...p, [y]: [ind] };
                        }

                        // if there is other month in this year selected, update
                        return {
                          ...p,
                          [y]: [...selectedMonths, ind],
                        };
                      });
                    }}
                  >
                    <Checkbox active={isActive} />
                    {m}
                  </button>
                );
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
