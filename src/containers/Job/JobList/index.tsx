/** JobList.
 *
 * @description
 * Displays list of all jobs in database.
 *
 * State:
 * - jobs: [ { id, title, salary, equity }, ... ]
 */

import { useEffect } from "react";

import CardList from "../../../components/Job/CardList";
import { useJobStore } from "../../../states/stores";

export default function JobList() {
  const { jobs, fetchJobs } = useJobStore();

  useEffect(() => {
    fetchJobs();
  }, []);

  //TODO: create better loading screen.
  if (!jobs) return <h1>Loading...</h1>;

  return (
    <div
      className="
        py-5
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <div
        className="
          gap-8
          md:grid
          md:grid-cols-2
          xl:grid-cols-3
          xl:gap-10
        "
      >
        {jobs.length === 0 && <p>Sorry, no results were found!</p>}
        <CardList jobs={jobs} />
      </div>
    </div>
  );
}
