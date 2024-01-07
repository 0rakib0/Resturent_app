import { FaArrowRight, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-3/4 mx-auto md:flex justify-between items-center">
            <div>
                <div className="relative py-4">
                    <input type="text" placeholder="Enter your email" className="md:w-[25rem] w-full px-4 py-3 rounded-2xl" />
                    <button className="flex items-center gap-2 bg-[#fc6011] px-6 py-[6px] text-white rounded-xl absolute top-[22px] right-3 hover:bg-white hover:border hover:border-[#fc6011] hover:text-black duration-100">Subscribe <FaArrowRight></FaArrowRight></button>
                </div>
                <div className="md:mt-16 flex items-center justify-between flex-col-reverse md:flex-row">
                    <div className="text-center md:text-start mt-4 md:mt-0">
                        <h4 className="text-4xl font-bold">pti<span className="text-[#fc6011]">.</span></h4>
                        <p className="mt-4 pb-4 md:pb-0">Coryright&copy;Tripp.All Right Reserved</p>
                    </div>
                    <div className="flex md:gap-6 gap-4 mt-12">
                        <div className="bg-white p-2 rounded-full text-[#fc6011] hover:bg-transparent hover:border">
                            <FaGoogle></FaGoogle>
                        </div>
                        <div className="bg-white p-2 rounded-full text-[#fc6011] hover:bg-transparent hover:border">
                            <FaTwitter></FaTwitter>
                        </div>
                        <div className="bg-white p-2 rounded-full text-[#fc6011] hover:bg-transparent hover:border">
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:inline">
                <img src="https://raw.githubusercontent.com/0rakib0/Resturent_app/main/src/assets/Image2.png" className="h-[300px]" alt="" />
            </div>
        </div>
    )
}

export default Footer