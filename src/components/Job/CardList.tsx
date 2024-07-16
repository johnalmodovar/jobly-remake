/** CardList.
 *
 * @description
 * Maps over jobs array and renders cards for each job.
 *
 * Props:
 * - jobs: [ { id, title, salary, equity }, ... ]
 *
 * TODO:
 * - make this a universal component if possible in the future.
 */

import JobDetail from "../../containers/Job/JobDetail";
import { CardListI } from "../../types";
export default function CardList({ jobs }: CardListI) {
  return (
    <>
      {jobs.map((j) => (
        <JobDetail key={j.id} job={j} />
      ))}
    </>
  );
}
