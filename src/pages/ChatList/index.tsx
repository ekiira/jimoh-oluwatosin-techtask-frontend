import { useEffect, useState, FormEvent } from "react";

import { ViewGridIcon, ViewListIcon } from "@heroicons/react/solid";

import CardGrid from "../../components/Card/CardGrid";
import CardList from "../../components/Card/CardList";
import DropDown from "../../components/Dropdown";
import FavoritesModal from "../../components/Modal";

import { chatList } from "../../data";

const filters = [
  { value: "name", label: "order by name" },
  { value: "date", label: "order by creation" },
];
interface IObj {
  [key: string]: string | boolean | any;
}
function ChatList() {
  const [data, setData] = useState<Array<IObj>>(chatList);
  const [viewType, setViewType] = useState<string>("grid");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [newData, setNewData] = useState<Array<IObj>>([]);
  const favorites = newData?.filter((al) => al.isFav);

  useEffect(() => {
    // add isFav and index property to data objects
    const buildData = () => {
      const arr: Array<IObj> = [];
      chatList?.forEach((item: IObj) => {
        arr.push({ ...item, isFav: false });
      });
      return arr;
    };
    setData(buildData());
    setNewData(buildData());
  }, []);

  const addToFavorites = (slug: string) => {
    const favNewData = newData.map((a) => {
      return a.shortName === slug ? { ...a, isFav: !a.isFav } : a;
    });
    const favData = data.map((a) => {
      return a.shortName === slug ? { ...a, isFav: !a.isFav } : a;
    });
    setNewData(favNewData);
    setData(favData);
  };

  const onSearchFilter = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearch(value);
    if (value.length) {
      const filtered = newData.filter((item) =>
        item.name.toLowerCase().startsWith(value.toLowerCase().trim())
      );
      setNewData(filtered);
    } else {
      setNewData(data);
    }
  };

  const orderFilter = (value: string) => {
    if (value === "date") {
      const date = newData?.slice()?.sort((a, b): any => {
        return +new Date(a.created) - +new Date(b.created);
      });
      setNewData(date);
    } else if (value === "name") {
      const name = newData?.slice()?.sort((a, b): any => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      setNewData(name);
    }
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
              <input
                className="input"
                placeholder="search..."
                value={search}
                onChange={onSearchFilter}
              />
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
              <DropDown options={filters} me={orderFilter} />
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
        <>
          {newData.length ? (
            <div>
              {viewType === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {newData.map((el, index) => (
                    <CardGrid
                      addToFavorite={() => addToFavorites(el.shortName)}
                      key={index}
                      name={el.name}
                      plan={el.plan}
                      isFavorite={el.isFav}
                      image={el.image}
                    />
                  ))}
                </div>
              ) : null}
              <div>
                {viewType === "list" ? (
                  <div>
                    {newData?.map((el, index) => (
                      <CardList
                        addToFavorite={() => addToFavorites(el.shortName)}
                        key={index}
                        name={el.name}
                        createdDate={el.created}
                        isFavorite={el.isFav}
                        image={el.image}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="md:text-xl lg:text-2xl text-center font-medium capitalize py-10">
                No results found!
              </h2>
            </div>
          )}
        </>
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
