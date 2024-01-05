import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaRegUser, FaSearch, } from "react-icons/fa";
const Navbar = () => {


    const [openMenu, setOpenMenu] = useState(false)
    console.log(openMenu)
    // const handleOpenMenu = () =>{
    //     setOpenMenu(true)
    // }

    return (
        <div className="flex justify-between items-center">
            <div>
                <h4 className="text-4xl font-bold">pti.</h4>
            </div>
            <div className="flex">
                <div className="relative">
                    <input type="text" placeholder="Search audiobook" name="" id="" className="py-2 pl-8 mr-2 rounded-lg w-[400px]" />
                    <FaSearch className="absolute top-3 left-3 text-[#f99f1c]"></FaSearch>
                </div>
                <div className="relative">
                    <div onClick={() => setOpenMenu(!openMenu)} className="bg-[#fefefe] pr-24 pl-4 py-2 rounded-lg">
                        <p className="cursor-pointer">MENU</p>
                        {openMenu ? <FaAngleUp className="absolute top-3 right-6 text-[#f99f1c]"></FaAngleUp> :
                            <FaAngleDown className="absolute top-3 right-6 text-[#f99f1c]"></FaAngleDown>}
                    </div>
                    {openMenu && <div className="absolute top-12 left-0 bg-[#fefefe] list-none py-2 w-[10rem] rounded-lg">
                        <li className="hover:text-[#fd6011] hover:bg-[#eeeff0] cursor-pointer py-1 pl-1 w-full">Home</li>
                        <li className="hover:text-[#fd6011] hover:bg-[#eeeff0] cursor-pointer py-1 pl-1 w-full">Details</li>
                        <li className="hover:text-[#fd6011] hover:bg-[#eeeff0] cursor-pointer py-1 pl-1 w-full">Category</li>
                        <li className="hover:text-[#fd6011] hover:bg-[#eeeff0] cursor-pointer py-1 pl-1 w-full">My Favorites</li>
                        <li className="hover:text-[#fd6011] hover:bg-[#eeeff0] cursor-pointer py-1 pl-1 w-full">Profile</li>
                        <li className="hover:text-[#fd6011] hover:bg-[#eeeff0] cursor-pointer py-1 pl-1 w-full">Log In/Sign Up</li>
                    </div>}
                </div>
            </div>
            <div className="bg-[#fd6011] p-3 rounded-full">
                <FaRegUser className="text-2xl text-white"></FaRegUser>
            </div>
        </div>
    )
}

export default Navbar