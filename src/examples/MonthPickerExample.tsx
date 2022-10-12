import { useState } from 'react';
import ExampleWithTitle from '../components/ExampleWithTitle';
import MonthPicker, { SelectedObj } from '../components/MonthPicker';

const MonthPickerExample = () => {
  const [fullOptionsState, setFullOptionsState] = useState<SelectedObj>({});

  return (
    <div className="flex flex-col w-full">
      <ExampleWithTitle title="Plain">
        <MonthPicker />
      </ExampleWithTitle>

      <ExampleWithTitle title="thisYear={2077}">
        <MonthPicker thisYear={2077} />
      </ExampleWithTitle>

      <ExampleWithTitle title="Full options">
        <p>{JSON.stringify(fullOptionsState, null, 2)}</p>
        <MonthPicker
          thisYear={2024}
          maxSelected={5}
          selectedValue={fullOptionsState}
          onSelectedChange={(value) => {
            setFullOptionsState(value);
          }}
        />
      </ExampleWithTitle>

      {/* footer padder, there should be a better way */}
      <div className="pb-6"></div>
    </div>
  );
};

export default MonthPickerExample;
