import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-14 px-5 bg-white">
      <nav className="w-full h-full max-w-[1920px] mx-auto flex justify-center items-center">
        <Link href="/" className="uppercase font-bold text-2xl tracking-widest">
          CRUD
        </Link>
      </nav>
    </header>
  )
}
