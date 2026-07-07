import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-950 text-white flex gap-3.5 p-4 justify-end">
            <Link href={"/"}>Home</Link>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
        </nav>
    )
}