import Paginator from './components/Paginator';
import ButtonExample from './examples/ButtonExample';
import DropzoneExample from './examples/DropzoneExample';
import MonthPickerExample from './examples/MonthPickerExample';

function App() {
  return (
    <div className="min-h-0 min-w-0">
      <Paginator>
        <DropzoneExample />
        <ButtonExample />
        <MonthPickerExample />
      </Paginator>
    </div>
  );
}

export default App;
