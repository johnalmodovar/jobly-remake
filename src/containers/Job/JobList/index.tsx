/** JobList.
 *
 * @description
 * Displays list of all jobs in database.
 *
 * State:
 * - jobs: [ { id, title, salary, equity }, ... ]
 */

import { useState, useEffect } from "react";

import JoblyApi from "../../../utils/api";
import CardList from "../../../components/Job/CardList";
import { JobI } from "../../../utils/definitions";

export default function JobList() {
  const [jobs, setJobs] = useState<Array<JobI> | null>(null);

  useEffect(() => {
    async function fetchJobs() {
      const data = await JoblyApi.getJobs("");
      setJobs(data);
    }
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
