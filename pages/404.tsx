import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl">This page does not exist.</h1>
      <span className="mt-2 text-sm italic">(and it probably never will)</span>
      <Link href="/">
        <a className="group mt-4 text-xl">
          <span className="ml-2 flex items-end">
            Go back home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 duration-150 ease-in-out group-hover:translate-x-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </Link>
    </div>
  );
}
