import Image from "next/image"
import menu from "@/public/images/menu.png"
import heart from "@/public/images/heart.png"
export default function NavBar () {
    return (
        <header className="flex flex-col justify-center  gap-10">
            <p className="text-xs text-center">Order by 13 December to be sure of delivery before Christimas. Shop Here {">"}</p>

            <div className="flex justify-around items-center
             ">
               <Image  src={menu} alt="menu" className="h-7 w-7 object-cover"/>
               <img src="https://www.gudrunsjoden.com/storage/F4823EEF2BFCB6138A02D21248D3D128C9D1D49CCD4D52D347EB18A7FDBDED9A/725e143dcd32489ab11c5b11abed277e/png/media/adddaf4f38ed401c8b6abaed4eeb7f4f/new_logo_black_website.png" className="w-60" />
                <div className="flex gap-4  ">
                <Image  src={heart} alt="heart" className="w-7 h-7"/>
   
                </div>
            </div>
        </header>
    )
}