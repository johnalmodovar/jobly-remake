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
import Navbar from "../../../components/Navbar";
import Alert from "../../../components/Alert";
import { useJobStore } from "../../../states/stores";

export default function JobList() {
  const { jobs, fetchJobs } = useJobStore();

  useEffect(() => {
    fetchJobs();
  }, []);

  const filter = (searchData: string) => {
    fetchJobs(searchData);
  };

  //TODO: create better loading screen.
  if (!jobs) return <h1>Loading...</h1>;

  return (
    <>
      <Navbar filter={filter} />
      <div
        className="
          py-5
          flex
          flex-col
          items-center
          justify-center
        "
      >
        {jobs.length === 0 && (
          <Alert isError={true} message={"Sorry, no results were found."} />
        )}
        <div
          className="
            gap-8
            md:grid
            md:grid-cols-2
            xl:grid-cols-3
            xl:gap-10
          "
        >
          <CardList jobs={jobs} />
        </div>
      </div>
    </>
  );
}
