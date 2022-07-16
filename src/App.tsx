import Paginator from './components/Paginator';
import ButtonExample from './examples/ButtonExample';
import DropzoneExample from './examples/DropzoneExample';

function App() {
  return (
    <div className="min-h-0 min-w-0">
      <Paginator>
        <DropzoneExample />
        <ButtonExample />
      </Paginator>
    </div>
  );
}

export default App;
