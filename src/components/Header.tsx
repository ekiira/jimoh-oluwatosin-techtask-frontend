import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="text-white text-center bg-royal w-full py-3 flex justify-center">
        <Link to="/" className="flex items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
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
