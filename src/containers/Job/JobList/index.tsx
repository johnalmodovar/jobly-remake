/** JobList.
 *
 * @description
 * Displays list of all jobs in database.
 *
 * State:
 * - jobs: [ { id, title, salary, equity }, ... ]
 * TODO: fix types for API.
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
        md:grid
        md:grid-cols-2
        lg:grid-cols-3
        bg-[#141550]
      "
    >
      {jobs.length === 0 && <p>Sorry, no results were found!</p>}
      <CardList jobs={jobs} />
    </div>
  );
}
