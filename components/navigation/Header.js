import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-14 px-5 bg-white">
      <nav className="w-full h-full max-w-[1920px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-2">
        <Link href="/" className="uppercase font-bold text-2xl tracking-widest">
          CRUD
        </Link>
        <Link href="/favorites" className="">
          Favoritos
        </Link>
      </nav>
    </header>
  )
}
