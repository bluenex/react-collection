import { ReactNode, useMemo, useState } from 'react';
import { Children } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

const Paginator = ({ children }: { children: ReactNode }) => {
  const childrenArr = useMemo(() => Children.toArray(children), [children]);
  const [currentInd, setCurrentInd] = useState(0);

  return (
    <div className="flex">
      {/* left panel */}
      <ul className="h-screen overflow-y-auto flex flex-col flex-shrink-0 border-r border-sky-300 text-gray-600 text-xs">
        {childrenArr.map((child, index) => {
          const liClassName = twMerge(
            'border-b border-sky-300',
            currentInd === index ? 'bg-sky-700 text-white' : ''
          );

          const componentType = (child as any).type;

          return (
            <li className={liClassName} key={`${componentType.name}+${index}`}>
              <Button
                className="px-2.5 py-1 rounded w-full text-left"
                onClick={() => {
                  setCurrentInd(index);
                }}
              >
                {componentType.name}
              </Button>
            </li>
          );
        })}
      </ul>

      {/* component area */}
      <div className="h-screen w-full overflow-y-auto flex justify-center py-8 px-4">
        {childrenArr[currentInd]}
      </div>
    </div>
  );
};

export default Paginator;
