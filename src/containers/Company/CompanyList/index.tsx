/** CompanyList.
 *
 * @description
 * Displays list of all companies in database.
 *
 * State:
 * - companies: [ { handle, name, description, numEmployees, logoUrl }, ... ]
 */

import { useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../../../components/Company/Card";
import { useCompanyStore } from "../../../states";

export default function CompanyList() {
  const { companies, fetchCompanies } = useCompanyStore();

  useEffect(() => {
    fetchCompanies();
  }, []);

  //TODO: create better loading screen.
  if (!companies) return <h1>Loading...</h1>;

  return (
    <div
      className="
        flex
        flex-col
        items-center
        py-5
      "
    >
      {companies.length === 0 && <p>Sorry, no results were found!</p>}
      {companies.map((c) => (
        <Link to={`${c.handle}`} key={c.handle}>
          <Card key={c.handle} company={c} />
        </Link>
      ))}
    </div>
  );
}
