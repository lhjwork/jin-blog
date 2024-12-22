import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
        진이의<span className="text-primary">블로그</span>
      </Link>
    </nav>
  );
}
