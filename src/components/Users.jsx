import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUser = useLoaderData();

    const [users, setUsers] = useState(loadedUser)

    const handleDelete = id => {
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
                fetch(`https://coffee-store-server-rekkhyg25-shohans-projects-b5403d71.vercel.app/user/${id}`, {
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

                    // remove from ui after deleted
                    const remaining = users.filter(u => u._id !== id)
                    setUsers(remaining)
                })
            }
        });
    }

    return (
        <div>
            <h2>user: {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => 

                                <tr key={user._id} className="bg-base-200">
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td>{user.createAt}</td>
                                    <td>{user.lastLoggedAt}</td>
                                    <td>
                                        <button onClick={()=> handleDelete(user._id)} className="btn">Delete</button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;