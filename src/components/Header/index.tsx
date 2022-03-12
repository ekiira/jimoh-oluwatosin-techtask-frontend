import { Link } from "react-router-dom";
import { ChatIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="text-white text-center bg-royal w-full py-3 flex justify-center">
        <Link to="/" className="flex items-center">
          <div>
            <ChatIcon className="h-6 w-6" />
          </div>

          <span className="ml-2 text-2xl font-medium tracking-wide uppercase">
            Blip
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
