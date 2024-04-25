import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {

    const {signIn} = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email)

        signIn(email, password)
        .then(result => {
            console.log(result.user)

            // update the user in mongo
            const lastLoggedAt = result.user?.metadata?.lastSignInTime;
            const user = {
                email,
                lastLoggedAt
            }

            fetch(`https://coffee-store-server-rekkhyg25-shohans-projects-b5403d71.vercel.app/user`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
            })
        })
        .catch(error => {
            console.error(error)
        })


        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-blue-400">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
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
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;