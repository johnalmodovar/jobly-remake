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
import Navbar from "../../../components/Navbar";
import Alert from "../../../components/Alert";
import { useCompanyStore } from "../../../states/stores";

export default function CompanyList() {
  const { companies, fetchCompanies } = useCompanyStore();

  useEffect(() => {
    fetchCompanies();
  }, []);

  const filter = (searchData: string) => {
    fetchCompanies(searchData);
  };

  //TODO: create better loading screen.
  if (!companies) return <h1>Loading...</h1>;

  return (
    <>
      <Navbar filter={filter} />
      <div
        className="
          flex
          flex-col
          items-center
          py-5
        "
      >
        {companies.length === 0 && (
          <Alert isError={true} message={"Sorry, no results were found."} />
        )}
        {companies.map((c) => (
          <Link to={`${c.handle}`} key={c.handle}>
            <Card key={c.handle} company={c} />
          </Link>
        ))}
      </div>
    </>
  );
}
