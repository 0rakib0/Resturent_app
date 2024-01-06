import { FaAngleLeft } from "react-icons/fa"

const PreArrow = ({ onClick }) => {
    return (
        <div onClick={onClick} className="absolute -top-12 right-8">
            <FaAngleLeft className="text-2xl text-gray-700"></FaAngleLeft>
        </div>
    )
}

export default PreArrow