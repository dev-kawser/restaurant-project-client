
import { useForm } from "react-hook-form";
import SectionHeading from "../../../Components/Shared/SectionHeading/SectionHeading";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const image_upload_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_upload_key}`

const AddItems = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = async data => {

        const name = data.name;
        const category = data.category;
        const price = data.price;
        const recipe = data.recipe;
        const imageFile = { image: data.image[0] };

        console.log(name, category, price, recipe, imageFile);

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: name,
                category: category,
                price: price,
                recipe: recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.post("/menu", menuItem)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else{
                alert("Please add an image")
            }
        }
        
    }

    return (
        <div className="mt-10">
            <SectionHeading
                subHeading={"---add item---"}
                heading={"Add An Item"}
            ></SectionHeading>

            <div className="mt-10">
                <div className="flex items-center justify-center p-12">
                    <div className="mx-auto w-full max-w-[550px]">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="mb-5">
                                <label
                                    htmlFor="guest"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Recipe name*
                                </label>
                                <input
                                    type="text"
                                    name="guest"
                                    id="guest"
                                    placeholder="Recipe name"
                                    min="0"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    {...register("name")}
                                />
                            </div>

                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="fName"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Category*
                                        </label>
                                        <select
                                            defaultValue={"null"}
                                            {...register("category")}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                            <option disabled value={"null"}>Select a category</option>
                                            <option value="salad">Salad</option>
                                            <option value="soup">Soup</option>
                                            <option value="dessert">Dessert</option>
                                            <option value="pizza">Pizza</option>
                                            <option value="drinks">Drinks</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="lName"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Price*
                                        </label>
                                        <input
                                            type="text"
                                            name="lName"
                                            id="lName"
                                            placeholder="Price"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            {...register("price")}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="-mx-3 flex flex-wrap">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Recipe*</label>
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." {...register("recipe")}></textarea>
                            </div>

                            <div className="mb-5">
                                <div className="mb-6 pt-4">
                                    <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                        Upload File
                                    </label>

                                    <div className="mb-8">
                                        <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                >
                                    Add Item
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddItems;