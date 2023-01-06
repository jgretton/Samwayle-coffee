import Link from "next/link";

export default function Nav() {
  return (
    <header className=" min-w-full bg-red-100 ">
      <div className="container mx-auto flex flex-row justify-between">
        <h1 className="font-cursive">Samwayle</h1>

        <nav className="flex flex-row space-x-4 ">
          <Link href="/">About us</Link>
          <Link href="/">Promotion</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Contacts</Link>
          <button>Contact us</button>
        </nav>
      </div>
    </header>
  );
}
