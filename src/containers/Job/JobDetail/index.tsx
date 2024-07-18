/** JobDetail.
 *
 * @description
 * Card component that holds all job details.
 *
 * Props:
 * - job: { id, title, salary, equity, companyHandle, companyName }
 *
 * States:
 * - isLiked: boolean to keep track if a job has been liked or not.
 */

import { useState, useEffect } from "react";

import { JobDetailsI } from "../../../types";
import { useUserStore } from "../../../states/stores";

export default function JobDetails({ job }: JobDetailsI) {
  const { user, likeJob, unlikeJob } = useUserStore();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (user.likes.includes(job.id)) setIsLiked(true);
  }, [job.id]);

  const handleClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    const jobId = evt.currentTarget.value;

    if (isLiked) {
      unlikeJob(jobId, user.username);
    } else {
      likeJob(jobId, user.username);
    }

    setIsLiked(!isLiked);
  };

  return (
    <div
      className="
        bg-gray-100
        card
        shadow-lg
        h-52
        w-96
        p-4
        mt-8
      "
    >
      <div className="card-body">
        <h3 className="card-title text-black">{job.title}</h3>
        <h4 className="text-black">{job.companyName}</h4>
        {job.salary && (
          <small className="text-black">{`Salary: $${job.salary}`}</small>
        )}
        {job.equity && (
          <small className="text-black">{`Equity: ${job.equity}`}</small>
        )}
        <button
          className={`
            btn
            btn-sm
            btn-circle
            ${isLiked ? "btn-success" : "btn-error"}
            absolute
            bottom-4
            right-4
          `}
          onClick={handleClick}
          value={job.id}
          aria-label={`${
            isLiked ? "press to unlike job" : "press to like job"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
