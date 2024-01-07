import { FaArrowRight, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-3/4 mx-auto flex justify-between items-center">
            <div>
                <div className="relative">
                    <input type="text" placeholder="Enter your email" className="w-[25rem] px-4 py-3 rounded-2xl" />
                    <button className="flex items-center gap-2 bg-[#fc6011] px-6 py-[6px] text-white rounded-xl absolute top-1.5 right-3 hover:bg-white hover:border-2 hover:border-[#fc6011] hover:text-black duration-100">Subscribe <FaArrowRight></FaArrowRight></button>
                </div>
                <div className="mt-16 flex items-center justify-between">
                    <div>
                        <h4 className="text-4xl font-bold">pti<span className="text-[#fc6011]">.</span></h4>
                        <p className="mt-4">Coryright&copy;Tripp.All Right Reserved</p>
                    </div>
                    <div className="flex gap-6 mt-12">
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
            <div>
                <img src="https://raw.githubusercontent.com/0rakib0/Resturent_app/main/src/assets/Image2.png" className="h-[300px]" alt="" />
            </div>
        </div>
    )
}

export default Footer