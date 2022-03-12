import { Fragment, useState } from "react";

import { Menu, Transition } from "@headlessui/react";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { ViewGridIcon, ViewListIcon } from "@heroicons/react/solid";

import CardGrid from "../../components/Card/CardGrid";
import CardList from "../../components/Card/CardList";

import { chatList } from "../../data";

function ChatList() {
  const [viewType, setViewType] = useState<string>("grid");
  const filters = ["order by name", "order by creation"];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="pt-10 pb-20 md:py-20">
      <div className="w-11/12 lg:w-4/5 container mx-auto">
        <div className="md:flex justify-between pb-10">
          <div>
            <h3 className="text-3xl md:text-4xl text-gray-800 font-medium mb-10 md:mb-0 text-center md:text-left">
              {" "}
              My Chatbots
            </h3>
          </div>
          <div className="md:flex items-center">
            <div className="md:mr-5">
              <input className="input" placeholder="search..." />
            </div>
            <div className="flex justify-end items-baseline mt-3 md:mt-0">
              <button
                onClick={() => setViewType("grid")}
                className={`mr-1 ${
                  viewType === "grid" ? `text-gray-600` : `text-gray-400`
                }`}
              >
                <ViewGridIcon className="h-8 w-8" />
              </button>

              <button
                onClick={() => setViewType("list")}
                className={`mr-1 ${
                  viewType === "list" ? `text-gray-600` : `text-gray-400`
                }`}
              >
                <ViewListIcon className="h-8 w-8" />
              </button>
              <Menu as="div" className="inline-block text-left relative">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full text-sm text-gray-600 focus:outline-none">
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
                      {filters.map((item, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <div
                              // onClick={() => setOption(item)}
                              className={`text-sm p-3 capitalize cursor-pointer ${classNames(
                                active
                                  ? "bg-royal text-white"
                                  : "text-gray-700",
                                "block"
                              )}`}
                            >
                              {item}
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        {viewType === "grid" ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {chatList?.map((el, index) => (
              <CardGrid
                key={index}
                name={el.name}
                slug={el.shortName}
                plan={el.plan}
                isFavorite={false}
                image={el.image}
              />
            ))}
          </div>
        ) : null}
        {viewType === "list" ? (
          <div className="">
            {chatList?.map((el, index) => (
              <CardList
                key={index}
                name={el.name}
                slug={el.shortName}
                createdDate={el.created}
                isFavorite={false}
                image={el.image}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ChatList;
