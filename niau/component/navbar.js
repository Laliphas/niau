import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <nav>
                <div className="logo">
                    <Image src="/niaulogo.png" width={70} height={50} alt="logo"/>
                </div>
                <Link href="/">home</Link>
                <Link href="/about">About Us</Link>
        </nav>
    )
}