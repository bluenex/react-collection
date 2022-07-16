import Dropzone from '../components/Dropzone';
import ExampleWithTitle from '../components/ExampleWithTitle';

const DropzoneExample = () => {
  return (
    <div className="flex flex-col w-full">
      <ExampleWithTitle title="Plain">
        <div className="w-full">
          <Dropzone />
        </div>
      </ExampleWithTitle>
    </div>
  );
};

export default DropzoneExample;
