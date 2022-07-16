import { BiUpload } from 'react-icons/bi';

const Dropzone = () => {
  return (
    <div className="w-full bg-gray-200 rounded-lg p-8">
      <div className="w-full border border-dashed border-gray-400 rounded-lg flex justify-center items-center p-4">
        <button className="bg-sky-100 rounded-md p-4 flex flex-col justify-center items-center gap-2 hover:bg-sky-300">
          <BiUpload className="text-3xl" />
          <span className="text-sm">อัปโหลดไฟล์</span>
        </button>
      </div>
    </div>
  );
};

export default Dropzone;
