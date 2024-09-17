import Link from "next/link";

export default function Navbar() {
  return ( 
  <div>
    <div className="flex bg-red-300 justify-center gap-x-5 text-xl font-bold py-[30px] w-full absolute">
      <Link href="">About</Link>
      <Link href="">Projects</Link>
      <Link href="">CV</Link>
      <Link href="">Blog</Link>
    </div>
  </div>
  );
}
