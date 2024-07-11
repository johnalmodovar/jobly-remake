/** JobDetail.
 *
 * @description
 * Card component that holds all job details.
 *
 * Props:
 * - job: { id, title, salary, equity, companyHandle, companyName }
 */

// import { useState, useEffect } from "react";

import { JobDetailsI } from "../../../utils/definitions";

export default function JobDetails({ job }: JobDetailsI) {
  // const [hasApplied, setHasApplied] = useState(false);

  // useEffect(() => {
  //   if (hasAppliedToJob(job.id)) {
  //     setHasApplied(true);
  //   }
  // }, [job.id, hasAppliedToJob]);

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
        w-[70vw]
        md:w-[50vw]
        lg:w-[40vw]
        xl:w-[30vw]
        py-4
        mt-8
        hover:scale-105
        ease-in
        duration-200
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
      </div>
    </div>
  );
}
