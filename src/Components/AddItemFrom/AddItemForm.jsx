
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItemForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        if (data) {
            toast("Item Successfully added")
        }
    };

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full mb-3">
                    <div className="label">
                        <span className="label-text">Item Name*</span>
                    </div>
                    <input {...register("name", { required: 'Item Name is required' })} type="text" placeholder="Item Name" className="input input-bordered w-full" />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </label>
                <label className="form-control w-full mb-3">
                    <div className="label">
                        <span className="label-text">Items Description</span>
                    </div>
                    <input {...register("description")} type="text" placeholder="Item Description" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full mb-3">
                    <div className="label">
                        <span className="label-text">Item Price</span>
                    </div>
                    <input {...register("price")} type="number" placeholder="Item Price" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full mb-3">
                    <input type="submit" value='Add Task' className="input input-bordered w-full hover:bg-[#fd6011] bg-[#f99f1c] text-white" />
                </label>
            </form>
        </div>
    );
};

export default AddItemForm;
