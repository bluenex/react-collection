import { useState, FC, Dispatch, SetStateAction } from 'react';
import ExampleWithTitle from '../components/ExampleWithTitle';
import TapOutsideDetector from '../components/TapOutsideDetector';

interface PopoverWithTriggerProps {
  isPopoverVisible: boolean;
  setIsPopoverVisible: Dispatch<SetStateAction<boolean>>;
}

const PopoverWithTrigger: FC<PopoverWithTriggerProps> = ({
  isPopoverVisible,
  setIsPopoverVisible,
}) => {
  return (
    <div className="relative w-fit">
      {isPopoverVisible && (
        <div className="absolute -top-9 text-sm p-1 rounded border border-gray-300 bg-gray-200 whitespace-nowrap">
          This is a popover, tap anywhere to close it.
        </div>
      )}

      <button onClick={() => setIsPopoverVisible((p) => !p)}>
        Click here to open a popover!
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
        <div id="content" className="bg-gray-100 rounded-md p-4">
          Some modal content
        </div>
      </TapOutsideDetector>
    </div>
  ) : null;
};

const TapOutsideDetectorExample = () => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="flex flex-col w-full relative">
      {JSON.stringify(TapOutsideDetector, null, 2)}

      <ModalWithContent
        isModalVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />

      <ExampleWithTitle title="Without `triggererId`">
        <TapOutsideDetector onTapOutside={() => setIsPopoverVisible(false)}>
          <PopoverWithTrigger
            isPopoverVisible={isPopoverVisible}
            setIsPopoverVisible={setIsPopoverVisible}
          />
        </TapOutsideDetector>
      </ExampleWithTitle>

      <ExampleWithTitle title="With `triggererId`">
        <button
          id="modal-triggerer"
          className="text-left"
          onClick={() => setIsModalVisible(true)}
        >
          Click here to open a modal!
        </button>
      </ExampleWithTitle>

      {/* footer padder, there should be a better way */}
      <div className="pb-6"></div>
    </div>
  );
};

export default TapOutsideDetectorExample;
