import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUser = useLoaderData();

    return (
        <div>
            <h2>user: {loadedUser.length}</h2>

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
                            loadedUser.map(user => 

                                <tr key={user._id} className="bg-base-200">
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td>{user.createAt}</td>
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