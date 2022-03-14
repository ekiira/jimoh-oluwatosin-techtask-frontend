import { Link } from "react-router-dom";

import Star from "../StarIcon";

interface ICardListProps {
  image: string;
  name: string;
  slug: string;
  isFavorite: boolean;
  createdDate: Date | string | any;
  addToFavorite: () => void;
}

function CardList(props: ICardListProps) {
  const { image, name, isFavorite, slug, createdDate, addToFavorite } = props;
  return (
    <div className="flex items-center w-full mb-5">
      <div className="mr-3 md:mr-5">
        <Star isActive={isFavorite} onClick={addToFavorite} />
      </div>
      <div className="py-3 bg-white shadow-md h-auto w-full rounded-lg px-5 text-center md:flex items-center justify-between">
        <div className="flex items-center">
          <div className=" mr-4">
            <Link to={slug}>
              <img
                src={image}
                alt="avatar"
                className="rounded-full w-12 h-12 object-top object-cover mx-auto"
              />
            </Link>
          </div>
          <div>
            <p className="font-semibold capitalize text-sm md:text-base">
              {name}
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-3 md:mt-0">
          <p className="text-xs md:text-sm text-gray-600">
            Created: {createdDate.split("T")[0].replace(/-/g, "/")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardList;
