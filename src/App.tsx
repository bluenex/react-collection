import Paginator from './components/Paginator';
import ButtonExample from './examples/ButtonExample';
import DropzoneExample from './examples/DropzoneExample';
import MonthPickerExample from './examples/MonthPickerExample';
import TapOutsideDetectorExample from './examples/TapOutsideDetectorExample';

function App() {
  return (
    <div className="min-h-0 min-w-0">
      <Paginator>
        <DropzoneExample />
        <ButtonExample />
        <MonthPickerExample />
        <TapOutsideDetectorExample />
      </Paginator>
    </div>
  );
}

export default App;
