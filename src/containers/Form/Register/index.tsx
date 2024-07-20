/** Register.
 *
 * @description
 * Form to register users.
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserStore } from "../../../states/stores";
import hero from "../../../assets/hero.jpg";

export default function Register() {
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
    <div
      className="
        hero
        min-h-screen
      "
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div
        className="
          bg-base-100
          card
          p-5
          min-h-full
          min-w-full
          md:m-5
          md:min-h-fit
          md:min-w-[65vw]
          lg:min-w-[50vw]
        "
      >
        <div
          className="
            flex
            items-center
            justify-center
          "
        >
          <h2
            className="
              pt-5
              text-4xl
              card-title
              text-center
            "
          >
            Register
          </h2>
        </div>
        <div
          className="
            flex
            justify-center
            items-center
            mt-6
          "
        >
          <div className="w-9/12 md:w-10/12 lg:w-11/12 h-px bg-gray-200 border-1 dark:bg-gray-700" />
        </div>
        <div className="card-body">
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
        </div>
      </div>
    </div>
  );
}
