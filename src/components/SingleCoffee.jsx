import Swal from "sweetalert2";
import PropTypes from 'prop-types'; // ES6
import { Link } from "react-router-dom";

const SingleCoffee = ({ singleCoffee }) => {

    const { _id, name, quantity, supplier, taste, photo } = singleCoffee

    const handleDelete = (_id) => {
        console.log(_id)


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                
                console.log('deleted confirm')
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl p-4 border-none">
            <figure className="w-1/3 h-60 "><img src={photo} alt="Movie" className="h-full object-cover w-full" /></figure>
            <div className="flex  text-left border justify-between items-center gap-4 p-4">

                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p >Supplier: {supplier}</p>
                    <p >Taste: {taste}</p>
                </div>

                <div className="flex flex-col space-y-3">
                    <button className="btn btn-info">View</button>

                    <Link to={`updateCoffee/${_id}`}><button className="btn btn-success">Edit</button></Link>
                    
                    <button className="btn btn-warning" onClick={()=>handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

SingleCoffee.propTypes = {
    singleCoffee: PropTypes.object
  };
export default SingleCoffee;