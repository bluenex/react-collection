import { useMemo } from 'react';
import { DropzoneState } from 'react-dropzone';
import { BiUpload, BiX } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

/**
 * @see https://react-dropzone.js.org/
 */

interface DropzoneProps {
  dropzoneState: DropzoneState;
  selectedFilesWithPreview: (File & { preview: string })[];
  onRemoveFile: (index: number) => void;
}

const Dropzone = ({
  dropzoneState,
  selectedFilesWithPreview,
  onRemoveFile,
}: DropzoneProps) => {
  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } =
    dropzoneState;

  const containerClassName = twMerge(
    // required by react-dropzone
    'dropzone',
    'w-full bg-gray-200 rounded-lg p-8',
    isDragAccept ? 'bg-green-200' : '',
    isDragReject ? 'bg-red-200' : ''
  );

  return (
    <div className="flex flex-col gap-6">
      <section
        {...getRootProps({
          className: containerClassName,
        })}
      >
        <input {...getInputProps()} />

        <div className="w-full border border-dashed border-gray-400 rounded-lg flex justify-center items-center p-4">
          {isDragReject ? (
            <span className="py-10">ไม่รองรับไฟล์นามสกุลนี้</span>
          ) : (
            <button
              className="bg-sky-100 rounded-md p-4 flex flex-col justify-center items-center gap-2 hover:bg-sky-300"
              onClick={open}
            >
              <BiUpload className="text-2xl" />
              <span className="text-sm">อัปโหลดไฟล์</span>
            </button>
          )}
        </div>
      </section>

      {selectedFilesWithPreview?.length > 0 && (
        <section>
          <h3 className="mb-2">ภาพที่อัพโหลด</h3>
          <div className="flex flex-wrap gap-2 w-full">
            {selectedFilesWithPreview.map((file, ind) => (
              <div className="flex items-center justify-center relative">
                <button
                  className="absolute -top-3 -right-3 bg-gray-200 bg-opacity-60 rounded-full p-1 hover:opacity-80 active:scale-95"
                  onClick={() => onRemoveFile(ind)}
                >
                  <BiX className="text-2xl text-red-500" />
                </button>

                <img className="h-28 object-contain" src={file.preview} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Dropzone;
