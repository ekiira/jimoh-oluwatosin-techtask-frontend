import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { AdjustmentsIcon } from "@heroicons/react/outline";

interface IObj {
  value: string;
  label: string;
}
interface IDropdownProps {
  options: Array<IObj>;
  me: (p: string) => void;
}
function DropDown({ options, me }: IDropdownProps) {
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <Menu as="div" className="inline-block text-left relative">
      <div>
        <Menu.Button className="inline-flex justify-center w-full text-sm text-gray-600 focus:outline-none" title="Filter" name='filter'>
          <AdjustmentsIcon className="h-8 w-8" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <div
                    onClick={() => me(item.value)}
                    className={`text-sm p-3 capitalize cursor-pointer ${classNames(
                      active ? "bg-royal text-white" : "text-gray-700",
                      "block"
                    )}`}
                  >
                    {item.label}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropDown;
