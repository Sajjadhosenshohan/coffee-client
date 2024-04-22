import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const  {_id, name, quantity, supplier, taste, category, details, photo} = useLoaderData()

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const UpdateCoffee = {name, quantity, supplier, taste, category, details, photo}

        console.log(UpdateCoffee)

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(UpdateCoffee),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId.length > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }

            form.reset()
        })
    }
    return (
        <div className="bg-[#F4F3F0] md:p-24">
            <h1 className='text-4xl  font-bold text-center mb-5'>Update Coffee : {name}</h1>

            <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Name */}
                <div className="">
                    <label className="label">
                        <span>Name</span>
                    </label>
                    <input type="text" defaultValue={name} placeholder="Coffee name" name="name" className="input input-bordered w-full " />
                </div>

                {/* Quantity */}
                <div className="">
                    <label className="label">
                        <span>Quantity</span>
                    </label>
                    <input type="text" defaultValue={quantity} placeholder="Available quantity" name="quantity" className="input input-bordered w-full" />
                </div>

                {/* Supplier*/}
                <div className=" ">
                    <label className="label">
                        <span>Supplier</span>
                    </label>
                    <input type="text" defaultValue={supplier} placeholder="Supplier" name="supplier" className="input input-bordered w-full" />
                </div>

                {/* Taste*/}
                <div className=" ">
                    <label className="label">
                        <span>Taste</span>
                    </label>
                    <input type="text" defaultValue={taste} placeholder="Taste" name="taste" className="input input-bordered w-full" />
                </div>

                {/* Category*/}
                <div className=" ">
                    <label className="label">
                        <span>Category</span>
                    </label>
                    <input type="text" defaultValue={category} placeholder="Category" name="category" className="input input-bordered w-full" />
                </div>

                {/* Details*/}
                <div className=" ">
                    <label className="label">
                        <span>Details</span>
                    </label>
                    <input type="text" defaultValue={details} placeholder="Details" name="details" className="input input-bordered w-full" />
                </div>

                {/* Photo*/}
                <div className="  md:col-span-2">
                    <label className="label">
                        <span>Photo</span>
                    </label>
                    <input type="text" defaultValue={photo} placeholder="Photo url" name="photo" className="input input-bordered w-full" />
                </div>

                {/* button */}
                <div className=" w-full md:col-span-2 rounded-md">
                    <input type="submit" value="Update Coffee" className="btn bg-[#D2B48C] btn-block text-[#331A15] text-2xl" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;