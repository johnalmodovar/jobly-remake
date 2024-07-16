/** Login Form.
 *
 * @description
 * Form to log in users.
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../../../states/stores";

export default function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  // const [formErrors, setFormErrors] = useState([]);

  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // setFormErrors([]);

    try {
      await login(formData);
      navigate("/companies");
    } catch (error) {
      console.log("error instance: ", error);
    }
  };

  return (
    <form className="card-body" onSubmit={handleSubmit}>
      <div className="form-control">
        {/* <label className="label">
          <span className="label-text">Username</span>
        </label> */}
        <input
          required
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
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
