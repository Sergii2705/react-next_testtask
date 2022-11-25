import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen min-w-80">
      <h1 className="text-bold text-9xl text-red-600">
        404
      </h1>
      <Link href="/">
        <a>
          <div className="font-bold text-xl text-green-600 hover:text-blue-800">
            Go Back Home
          </div>
        </a>
      </Link>
    </div>
  )
} 