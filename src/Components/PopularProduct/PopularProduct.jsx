import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../NextArrow/NextArrow";
import PreArrow from "../PreviuseArrow/PewArrow";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";



import AddItemForm from "../AddItemFrom/AddItemForm";



const PopularProduct = () => {


    const [items, setItems] = useState([])


    useEffect(() => {
        fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            .then(res => res.json())
            .then(data => {
                const Items = data.Items
                console.log(Items)
                const isPopuler = Items.filter(items => items.IsPopular == true)
                setItems(isPopuler)
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
                <button className="bg-none text-[#fd6011] mb-4 lg:mr-0 mr-6" onClick={() => document.getElementById('my_modal_1').showModal()}>Add New</button>
            </div>
            <Slider {...settings}>
                {
                    items.map(item => <Card key={item.Id} item={item}></Card>)
                }
            </Slider>

            {/* popup section */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-[#fd6011]">Add New Item</h3>
                    <AddItemForm></AddItemForm>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    )
}

export default PopularProduct