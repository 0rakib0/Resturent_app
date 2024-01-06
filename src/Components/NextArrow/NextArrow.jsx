import { FaAngleRight } from "react-icons/fa";

const NextArrow = (props) =>{
    const {onClick} = props
    return (
        <div onClick={onClick} className="absolute -top-12 right-0 text-gray-700">
            <FaAngleRight className="text-2xl"></FaAngleRight>
        </div>
    )
}

export default NextArrow