/** JobLikes.
 *
 * @description
 * Page that shows all the jobs the user has liked.
 */

import { useState, useEffect } from "react";

import { useJobStore, useUserStore } from "../../../states/stores";
import { JobI } from "../../../types";
import CardList from "../../../components/Job/CardList";

export default function JobLikes() {
  const { user } = useUserStore();
  const { jobs, fetchJobs } = useJobStore();

  const [userJobs, setUserJobs] = useState<Array<JobI>>([]);

  useEffect(() => {
    fetchJobs();
    const userJobs = jobs.filter((job) => user.likes.includes(job.id));
    setUserJobs(userJobs);
  }, [user.likes]);

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
          bg-white
          min-h-fit
          min-w-fit
          w-[70vw]
          card
          p-10
          md:m-5
        "
      >
        <h2
          className="
            text-black
            text-center
            text-2xl
          "
        >
          Jobs You Have Liked:
        </h2>
      </div>
      {userJobs.length === 0 && (
        <p className="text-center">
          You haven't liked any jobs yet. Start job hunting!
        </p>
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
        <CardList jobs={userJobs} />
      </div>
    </div>
  );
}
