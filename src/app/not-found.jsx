import Image from "next/image";
import Link from "next/link";
import notFoundImage from "../../public/not-found-page.png";
export default async function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center gap-2">
      <Image src={notFoundImage} alt="not found image" />
      <h1 className="font-bold text-5xl text-red-600">404</h1>
      <p className="italic text-xl">not found page</p>
      <Link href="/" className="btn btn-info text-base-100">
        go to home page
      </Link>
    </section>
  );
}
