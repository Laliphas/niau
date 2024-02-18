import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <nav>
            <div className={styles.navbar}>
            </div>
            <Link href="/home" className={styles.data1}>
                Home
            </Link>
            <Link href="/recommended" className={styles.data2}>
                Recommended
            </Link>
            <Link href="/search" className={styles.data3}>
                Search
            </Link>
            <Link href="/profile" className={styles.data4}>
                Profile
            </Link>
            <Link href="/home" className={styles.icon1}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                width={50} height={50} alt="not found"/>
            </Link>
            <Link href="/recommended" className={styles.icon2}>
                <img src="https://icon-library.com/images/thin-1480_light_bulb_lighting_idea-512.png"
                width={50} height={50} alt="not found"/>
            </Link>
            <Link href="/search" className={styles.icon3}>
                <img src="https://static.thenounproject.com/png/209393-200.png"
                width={50} height={50} alt="not found"/>
            </Link>
            <Link href="/profile" className={styles.icon4}>
                <img src="https://static-00.iconduck.com/assets.00/profile-icon-512x512-w0uaq4yr.png"
                width={50} height={50} alt="not found"/>
            </Link>
            
        </nav>
    )
}