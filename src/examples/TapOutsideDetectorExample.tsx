import { useState, FC, Dispatch, SetStateAction } from 'react';
import Button from '../components/Button';
import ExampleWithTitle from '../components/ExampleWithTitle';
import MonthPicker, { SelectedObj } from '../components/MonthPicker';
import TapOutsideDetector from '../components/TapOutsideDetector';

interface PopoverWithTriggerProps {
  isPopOverVisible: boolean;
  setIsPopOverVisible: Dispatch<SetStateAction<boolean>>;
}

const PopoverWithTrigger: FC<PopoverWithTriggerProps> = ({
  isPopOverVisible,
  setIsPopOverVisible,
}) => {
  return (
    <div className="relative w-fit mt-8">
      {isPopOverVisible && (
        <div className="absolute -top-9 text-sm p-1 rounded border border-gray-300 bg-gray-200 whitespace-nowrap">
          This is popover, tap below to close it.
        </div>
      )}

      <button onClick={() => setIsPopOverVisible((p) => !p)}>
        Click here!
      </button>
    </div>
  );
};

interface ModalWithContentProps {
  isModalVisible: boolean;
  onClose: () => void;
}

const ModalWithContent: FC<ModalWithContentProps> = ({
  isModalVisible,
  onClose,
}) => {
  return isModalVisible ? (
    <div className="absolute top-0 w-full h-full bg-black bg-opacity-50 grid place-content-center text-gray-900">
      <button onClick={onClose} className="ml-auto mb-2 text-gray-100">
        close
      </button>

      <TapOutsideDetector triggererId="modal-triggerer" onTapOutside={onClose}>
        <div id="content" className="bg-gray-300 rounded-md p-4">
          Some modal content
        </div>
      </TapOutsideDetector>
    </div>
  ) : null;
};

const TapOutsideDetectorExample = () => {
  const [isPopOverVisible, setIsPopOverVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="flex flex-col w-full relative">
      <ModalWithContent
        isModalVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />

      <ExampleWithTitle title="Without `triggererId`">
        <TapOutsideDetector onTapOutside={() => setIsPopOverVisible(false)}>
          <PopoverWithTrigger
            isPopOverVisible={isPopOverVisible}
            setIsPopOverVisible={setIsPopOverVisible}
          />
        </TapOutsideDetector>
      </ExampleWithTitle>

      <ExampleWithTitle title="With `triggererId`">
        <button
          id="modal-triggerer"
          className="text-left"
          onClick={() => setIsModalVisible(true)}
        >
          Click here to open modal!
        </button>
      </ExampleWithTitle>

      {/* footer padder, there should be a better way */}
      <div className="pb-6"></div>
    </div>
  );
};

export default TapOutsideDetectorExample;
