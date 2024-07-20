/** RegisterForm.
 *
 * @description
 * Form to register users.
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserStore } from "../../../states/stores";
import hero from "../../../assets/hero.jpg";

export default function RegisterForm() {
  const user = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState({ ...user });
  const navigate = useNavigate();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <form>
      <div className="form-control">
        <label className="label">Email</label>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="
            input
            input-bordered
            mb-3
          "
        />
      </div>
      <div className="form-control">
        <label className="label">Username</label>
        <input
          required
          type="text"
          name="username"
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
        <label className="label">Password</label>
        <input
          required
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="
            input
            input-bordered
            mb-3
          "
        />
      </div>
      <div className="form-control">
        <label className="label">First Name</label>
        <input
          required
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="
            input
            input-bordered
            mb-3
          "
        />
      </div>
      <div className="form-control">
        <label className="label">Last Name</label>
        <input
          required
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="
            input
            input-bordered
            mb-3
          "
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
  );
}
