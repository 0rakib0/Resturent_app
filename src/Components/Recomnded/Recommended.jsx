import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../NextArrow/NextArrow";
import PreArrow from "../PreviuseArrow/PewArrow";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

const Recommended = () =>{
    const [items, setItems] = useState([])



    useEffect(() => {
        fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            .then(res => res.json())
            .then(data => {
                const Items = data.Items
                setItems(Items)
            })
    }, [])


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PreArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="mt-24 relative">
            <div className="w-11/12 flex items-center justify-between">
                <p className="mb-6 text-2xl font-semibold">Popular</p>
                <button className="bg-none text-[#fd6011] mb-4 md:mr-0 mr-6">Add New</button>
            </div>
            <Slider {...settings}>
                {
                    items.map(item => <Card key={item.Id} item={item}></Card>)
                }
            </Slider>
        </div>
    )
}

export default Recommended