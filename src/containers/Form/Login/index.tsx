/** LoginForm.
 *
 * @description
 * Form to log in users.
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserStore } from "../../../states/stores";

export default function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  // const [formErrors, setFormErrors] = useState([]);

  const navigate = useNavigate();
  const { login } = useUserStore();

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
    <form onSubmit={handleSubmit}>
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
            mb-5
          "
        />
      </div>
      <div className="form-control">
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
        {/* <div
          className="tooltip pt-2 pl-2"
          data-tip="Username: guest | Password: password"
        >
          <p
            className="
              label-text-alt
              link
              link-hover
              text-left
              italic
            "
          >
            Don't want to register? Hover me.
          </p>
        </div> */}
        {/* <label className="label">
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
        </label> */}
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
}
