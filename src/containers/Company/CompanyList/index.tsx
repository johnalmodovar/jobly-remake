/** CompanyList.
 *
 * @description
 * Displays list of all companies in database.
 *
 * State:
 * - companies: [ { handle, name, description, numEmployees, logoUrl }, ... ]
 * TODO: fix types for API.
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../../../components/Company/Card";
import JoblyApi from "../../../utils/api";
import { CompanyI } from "../../../utils/definitions";

export default function CompanyList() {
  const [companies, setCompanies] = useState<Array<CompanyI> | null>(null);

  useEffect(() => {
    async function fetchCompanies() {
      const data = await JoblyApi.getCompanies();
      setCompanies(data);
    }
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
        m-3
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
