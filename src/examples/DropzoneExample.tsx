import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Dropzone from '../components/Dropzone';
import ExampleWithTitle from '../components/ExampleWithTitle';

const DropzoneExample = () => {
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);

  const dropzoneState = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpeg', '.jpg'],
    },
    maxFiles: 6,
    onDrop: (acceptedFiles) => {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
    noClick: true,
  });

  // clean up memory
  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div className="flex flex-col w-full">
      <ExampleWithTitle title="Image dropzone">
        <div className="w-full">
          <Dropzone
            dropzoneState={dropzoneState}
            selectedFilesWithPreview={files}
            onRemoveFile={(removedIndex) => {
              setFiles((p) => p.filter((_, ind) => ind !== removedIndex));
            }}
          />
        </div>
      </ExampleWithTitle>
    </div>
  );
};

export default DropzoneExample;
