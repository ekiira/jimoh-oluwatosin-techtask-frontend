import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CardList from "../Card/CardList";

interface IObj {
  [key: string]: string | boolean | any;
}

interface IProps {
  open: boolean;
  setOpen: (props: boolean) => void;
  data: Array<IObj>;
  addToFavorites: (id: string, index: number) => void;
}

function FavoritesModal({ open, setOpen, data, addToFavorites }: IProps) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-sky-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-sky-50 px-5 lg:px-10 pt-8 pb-14">
                <div>
                  <div>
                    <button onClick={() => setOpen(false)}>{`< Back`}</button>
                  </div>
                  {data.length ? (
                    <div className="py-10 grid lg:grid-cols-2 lg:gap-6">
                      {data?.map((el, index) => (
                        <CardList
                          addToFavorite={() =>
                            addToFavorites(el.shortName, el.index)
                          }
                          key={index}
                          name={el.name}
                          createdDate={el.created}
                          isFavorite={el.isFav}
                          image={el.image}
                        />
                      ))}
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-center text-xl py-10">
                        {" "}
                        No bot has been added to favorites{" "}
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default FavoritesModal;
