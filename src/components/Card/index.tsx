import { ReactNode } from "react";

interface ICardProps {
  children: ReactNode;
}
function Card({ children }: ICardProps) {
  return (
    <div className="py-10 bg-white shadow-md rounded-lg px-5 lg:px-10 text-center h-full">
      {children}
    </div>
  );
}

export default Card;
