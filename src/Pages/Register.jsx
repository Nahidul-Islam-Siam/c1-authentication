import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import auth from "../firebase/firebase.config";


const Register = () => {
const {registerUser,} = useContext(AuthContext)
console.log(auth);
    const handleRegister = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const email= e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value
        console.log(name,email,photo,password,confirmPassword);
        registerUser(email,password)
    }
    return (
        <div className="hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form
      onSubmit={handleRegister}
       className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="Your Photo" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirmPassword" placeholder="confirm-password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 w-full">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;