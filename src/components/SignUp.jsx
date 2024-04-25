import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email)

        createUser(email, password)
            .then((result) => {
                console.log(result.user)

                // post data to mongo
                const createAt = result.user.metadata.creationTime;

                const user = { email, createAt };
                fetch(`https://coffee-store-server-rekkhyg25-shohans-projects-b5403d71.vercel.app/user`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(32,data);
                        if (data.insertedId.length > 0) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'User Added Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })

            })
            .catch((error) => {
                console.error(error)
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-blue-400">SignUp now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;