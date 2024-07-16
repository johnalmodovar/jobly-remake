/** SearchForm.
 *
 * @description
 * Form that filters input from user to search for a company or job.
 */

import { useState } from "react";

export default function SearchForm() {
  const [formData, setFormData] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormData("");
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        className="
          bg-gray-100
          input
          input-bordered
          w-56
          lg:w-72
          h-9
        "
        value={formData}
        onChange={handleChange}
      />
    </form>
  );
}
