const Card = ({ item }) => {
    const { Name, Price, ImageUrl } = item
    return (
        <div className="ml-2 h-230px] overflow-hidden px-2">
            <div className="">
                <img src={ImageUrl} alt=""  className="md:h-[250px] h-[200px] w-full rounded-xl"/>
                <p className="text-center my-2 text-xl">{Name}</p>
            </div>
        </div>
    )
}

export default Card