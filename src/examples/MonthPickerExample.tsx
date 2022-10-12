import { useState } from 'react';
import Button from '../components/Button';
import ExampleWithTitle from '../components/ExampleWithTitle';
import MonthPicker, { SelectedObj } from '../components/MonthPicker';

const MonthPickerExample = () => {
  const [fullOptionsState, setFullOptionsState] = useState<SelectedObj>({});
  const [isPickerVisible, setIsPickerVisible] = useState(false);

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

      <ExampleWithTitle title="As a popover">
        <div id="container" className="relative">
          <Button
            className="bg-green-300 px-4 rounded-xl"
            onClick={() => setIsPickerVisible((p) => !p)}
          >
            Toggle Picker: {JSON.stringify(fullOptionsState, null, 2)}
          </Button>

          {isPickerVisible && (
            <MonthPicker
              className="absolute top-12 left-0"
              selectedValue={fullOptionsState}
              onSelectedChange={(value) => {
                setFullOptionsState(value);
              }}
            />
          )}
        </div>
      </ExampleWithTitle>

      {/* footer padder, there should be a better way */}
      <div className="pb-6"></div>
    </div>
  );
};

export default MonthPickerExample;
