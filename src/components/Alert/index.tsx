/** Alerts.
 *
 * @description
 * Displays information depending on the props (success or error messages).
 *
 * Props:
 * - isError: determines if the alert will be an error or not and change color to red.
 * - message: determines what message will be said on the alert component.
 */

import { AlertI } from "../../types";

export default function Alert({ isError, message }: AlertI) {
  return (
    <>
      <div
        className={`
          flex
          items-center
          rounded-lg
          border
          p-4
          mb-4
          text-md
          ${
            isError
              ? "bg-red-100 border-red-400 text-red-800"
              : "bg-green-100 border-green-400 text-green-800"
          }
        `}
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <span className="font-bold">{message}</span>
      </div>
    </>
  );
}
