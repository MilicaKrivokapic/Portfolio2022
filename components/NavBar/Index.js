import DesktopNav from "./DesktopNav"
import Image from "next/image"
import Bunny from "../../public/darkbunny.png"
const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center pt-3">
      <h1 className=" mx-7 font-Quick font-bold text-jazzberry-jam text-xl hidden">
        <Image src={Bunny} aria-hidden="true" /> Milican portfolio
      </h1>
      <DesktopNav />
    </nav>
  )
}

export default NavBar
