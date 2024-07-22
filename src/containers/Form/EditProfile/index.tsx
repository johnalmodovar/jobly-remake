/** EditProfileForm.
 *
 * @description
 * Form to edit user profile information.
 * Information includes (first name, last name, email)
 */

import { useState } from "react";

import { useUserStore } from "../../../states/stores";
import Alert from "../../../components/Alert";

export default function EditProfileForm() {
  const { user, editProfile } = useUserStore();
  const { firstName, lastName, email, username } = user;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email,
    username,
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      editProfile(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.log("error instance: ", error);
    }
  };

  return (
    <div>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Email</span>
          </label>
          <input
            required
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="
              input
              input-bordered
              mb-3
              border-4
              bg-white
              text-black
            "
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">First Name</span>
          </label>
          <input
            required
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="
              input
              input-bordered
              border-4
              mb-3
              bg-white
              text-black
          "
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Last Name</span>
          </label>
          <input
            required
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="
              input
              input-bordered
              border-4
              mb-3
              bg-white
              text-black
            "
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      {isSubmitted && <Alert isError={false} message={"Changes Saved!"} />}
    </div>
  );
}
