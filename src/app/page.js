import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="box">
      <h1>Home Page</h1>
      <Link href={'/users'}>click here to see users list</Link>
    </div>
  );
}
