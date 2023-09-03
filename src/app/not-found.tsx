import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={"flex justify-center flex-col m-auto h-screen p-4 bg-primary"}
    >
      <div className={"rounded-box m-4 max-w-[540px]"}>
        <div className="alert alert-error text-neutral">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h2>404 - Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
