import { useEffect, useState } from "react";

import { ViewGridIcon, ViewListIcon } from "@heroicons/react/solid";

import CardGrid from "../../components/Card/CardGrid";
import CardList from "../../components/Card/CardList";
import DropDown from "../../components/Dropdown";

import { chatList } from "../../data";
import FavoritesModal from "../../components/Modal";

const filters = ["order by name", "order by creation"];
interface IObj {
  [key: string]: string | boolean | any;
}
function ChatList() {
  const [data, setData] = useState<Array<IObj>>(chatList);
  const [favorites, setFavorites] = useState<Array<IObj>>([]);
  const [viewType, setViewType] = useState<string>("grid");
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    // add isFav property to data objects
    const buildData = () => {
      const arr: Array<IObj> = [];
      chatList?.forEach((item: any) => {
        arr.push({ ...item, isFav: false });
      });
      return arr;
    };
    setData(buildData());
  }, []);

  const addToFavorites = (slug: string, index: number) => {
    if (!favorites?.some((el) => el.shortName === slug)) {
      // add item to favorites array
      data
        .filter((item) => item.shortName === slug)
        .forEach((value: IObj) => {
          setFavorites([
            ...favorites,
            { ...value, isFav: !value.isFav, index: index },
          ]);
        });
    } else {
      // remove item from favorites array
      setFavorites([...favorites.filter((item) => item.shortName !== slug)]);
    }

    let newData = [...data];
    newData[index] = { ...newData[index], isFav: !newData[index].isFav };
    setData(newData);
  };


  return (
    <div className="pt-10 pb-20 md:py-20">
      <div className="w-11/12 lg:w-4/5 container mx-auto">
        <div className="md:flex justify-between pb-5">
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
              <DropDown options={filters} />
            </div>
          </div>
        </div>
        <div className="flex justify-end pb-10">
          <button
            className="text-gray-600 text-xl"
            onClick={() => setOpenModal(true)}
          >
            View Favorites:
            <span className="font-semibold"> {favorites.length || 0}</span>
          </button>
        </div>
        {viewType === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.map((el, index) => (
              <CardGrid
                addToFavorite={() => addToFavorites(el.shortName, index)}
                key={index}
                name={el.name}
                slug={el.shortName}
                plan={el.plan}
                isFavorite={el.isFav}
                image={el.image}
              />
            ))}
          </div>
        ) : null}
        {viewType === "list" ? (
          <div className="">
            {data?.map((el, index) => (
              <CardList
                addToFavorite={() => addToFavorites(el.shortName, index)}
                key={index}
                name={el.name}
                slug={el.shortName}
                createdDate={el.created}
                isFavorite={el.isFav}
                image={el.image}
              />
            ))}
          </div>
        ) : null}
      </div>
      <FavoritesModal
        open={openModal}
        setOpen={setOpenModal}
        data={favorites}
        addToFavorites={addToFavorites}
      />
    </div>
  );
}

export default ChatList;
