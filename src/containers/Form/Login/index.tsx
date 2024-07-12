/** Login Form.
 *
 * @description
 * Form to log in users.
 */

// import { useState } from "react";

export default function Login() {
  // const [formData, setFormData] = useState({ email: "", password: "" });
  // const [formErrors, setFormErrors] = useState([]);

  // function handleChange(evt) {
  //   const { name, value } = evt.target;

  //   setFormData((fData) => ({
  //     ...fData,
  //     [name]: value,
  //   }));
  // }

  return (
    <form className="card-body">
      <div className="form-control">
        {/* <label className="label">
          <span className="label-text">Email</span>
        </label> */}
        <input
          required
          type="text"
          name="username"
          placeholder="Username"
          // value={formData.email}
          // onChange={handleChange}
          className="
            input
            input-bordered
            mb-3
          "
        />
      </div>
      <div className="form-control">
        {/* <label className="label">
          <span className="label-text">Password</span>
        </label> */}
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          // value={formData.password}
          // onChange={handleChange}
          className="
            input
            input-bordered
          "
        />
        <label className="label">
          <a
            className="
              label-text-alt
              link
              link-hover
            "
            href="#"
          >
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
}
