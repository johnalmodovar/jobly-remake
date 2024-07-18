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
    <div>
      {userJobs.length === 0 && (
        <p>You haven't liked any jobs yet. Start job hunting!</p>
      )}
      <CardList jobs={userJobs} />
    </div>
  );
}
