import { Link } from "react-router-dom";

import Star from "../StarIcon";

interface ICardGridProps {
  image: string;
  name: string;
  plan: string;
  slug: string;
  isFavorite: boolean;
  addToFavorite: () => void;
}

function CardGrid(props: ICardGridProps) {
  const { image, name, plan, isFavorite, slug, addToFavorite } = props;

  return (
    <div className="py-5 bg-white shadow-md h-auto rounded-lg px-5 text-center">
      <div>
        <Star isActive={isFavorite} onClick={addToFavorite} />
      </div>
      <div className="pt-5">
        <Link to={slug}>
          <img
            src={image}
            alt="avatar"
            className="rounded-full w-28 h-28 object-top object-cover mx-auto"
          />
        </Link>
      </div>
      <div className="mt-4">
        <p className="font-semibold capitalize">{name}</p>
      </div>
      <div>
        <p className="text-sm text-gray-600 capitalize">{plan}</p>
      </div>
    </div>
  );
}

export default CardGrid;
