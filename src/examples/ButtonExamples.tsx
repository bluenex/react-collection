import { BsArrowUpSquareFill } from 'react-icons/bs';
import Button from '../components/Button';
import ButtonWithIcon from '../components/Button/ButtonWithIcon';
import ExampleWithTitle from '../components/ExampleWithTitle';

const ButtonExample = () => {
  return (
    <div className="flex flex-col">
      <ExampleWithTitle title="Plain">
        <Button>Click me!</Button>
      </ExampleWithTitle>

      <ExampleWithTitle title="With icon">
        <ButtonWithIcon position="right" icon={<BsArrowUpSquareFill />}>
          Go up
        </ButtonWithIcon>
      </ExampleWithTitle>

      <ExampleWithTitle title="Styled">
        <div className="flex gap-2 flex-wrap">
          <Button>Click me!</Button>
          <Button className="bg-sky-300">Click me!</Button>
          <ButtonWithIcon
            className="bg-orange-500 rounded-full text-gray-50 font-bold"
            position="right"
            icon={
              <BsArrowUpSquareFill className="text-sm ml-0.5 animate-bounce" />
            }
          >
            Go up
          </ButtonWithIcon>
        </div>
      </ExampleWithTitle>

      <ExampleWithTitle title="Disabled">
        <div className="flex gap-2 flex-wrap">
          <Button disabled>Click me!</Button>
          <Button className="bg-sky-300" disabled>
            Click me!
          </Button>
          <ButtonWithIcon
            disabled
            className="bg-orange-500 rounded-full text-gray-50 font-bold"
            position="right"
            icon={
              <BsArrowUpSquareFill className="text-sm ml-0.5 animate-bounce" />
            }
          >
            Go up
          </ButtonWithIcon>
        </div>
      </ExampleWithTitle>

      <ExampleWithTitle title="Loading">
        <div className="flex gap-2 flex-wrap">
          <Button className="bg-sky-300" isLoading>
            Click me!
          </Button>
          <Button className="bg-sky-300" isLoading disabled>
            Click me!
          </Button>
          <ButtonWithIcon
            isLoading
            className="bg-orange-500 rounded-full text-gray-50 font-bold"
            position="right"
            icon={
              <BsArrowUpSquareFill className="text-sm ml-0.5 animate-bounce" />
            }
          >
            Go up
          </ButtonWithIcon>
          <ButtonWithIcon
            isLoading
            disabled
            className="bg-orange-500 rounded-full text-gray-50 font-bold"
            position="right"
            icon={
              <BsArrowUpSquareFill className="text-sm ml-0.5 animate-bounce" />
            }
          >
            Go up
          </ButtonWithIcon>
        </div>
      </ExampleWithTitle>
    </div>
  );
};

export default ButtonExample;
