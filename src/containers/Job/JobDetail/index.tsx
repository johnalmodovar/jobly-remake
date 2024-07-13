/** JobDetail.
 *
 * @description
 * Card component that holds all job details.
 *
 * Props:
 * - job: { id, title, salary, equity, companyHandle, companyName }
 *
 * TODO:
 * - add button to show interest in a job.
 */

import { useState } from "react";

import { JobDetailsI } from "../../../types/definitions";

export default function JobDetails({ job }: JobDetailsI) {
  const [isInterested, setIsInterested] = useState(false);

  // useEffect(() => {
  //   if (hasAppliedToJob(job.id)) {
  //     setHasApplied(true);
  //   }
  // }, [job.id, hasAppliedToJob]);

  const handleClick = () => {
    setIsInterested(!isInterested);
  };

  // /** handles onClick for liking jobs. */
  // async function handleApply(evt) {
  //   const jobId = +evt.target.value;

  //   try {
  //     await apply(currentUser.data.username, jobId);
  //     setHasApplied(true);
  //   } catch (error) {
  //     console.error("Error applying to job", error);
  //   }
  // }

  // /** handles onClick for unliking jobs. */
  // async function handleUnapply(evt) {
  //   const jobId = +evt.target.value;

  //   try {
  //     await unapply(currentUser.data.username, jobId);
  //     setHasApplied(false);
  //   } catch (error) {
  //     console.error("Error unapplying to job", error);
  //   }
  // }

  return (
    <div
      className="
        card
      bg-gray-100
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
            ${isInterested ? "btn-success" : "btn-error"}
            absolute
            bottom-4
            right-4
          `}
          onClick={handleClick}
          value={job.id}
          aria-label={`${
            isInterested ? "press to unlike job" : "press to like job"
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
