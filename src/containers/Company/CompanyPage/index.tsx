/** CompanyPage.
 *
 * @description
 * Shows page of the specific company with its listed job openings.
 */

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import CardList from "../../../components/Job/CardList";
import { useCompanyStore } from "../../../states/stores";

export default function CompanyPage() {
  const { handle } = useParams();
  const { company, fetchCompany } = useCompanyStore();

  useEffect(() => {
    fetchCompany(handle);
  }, [handle]);

  //TODO: make better loading screen.
  if (!company) return <h1>Loading...</h1>;

  return (
    <div
      className="
        p-10
        flex
        justify-center
      "
    >
      <div
        className="
          bg-white
          min-h-fit
          min-w-fit
          card
          p-10
          md:m-5
        "
      >
        {company.logoUrl && (
          <img
            className="
              absolute
              h-7
              top-2
              right-4
              w-auto
            "
            src={company.logoUrl}
            alt={`${company.handle} logo`}
            width="75px"
          />
        )}
        <h2
          className="
            text-black
            text-center
            text-bold
            text-3xl
          "
        >
          {company.name}
        </h2>
        <p
          className="
            text-black
            text-center
            text-lg
            mt-3
            text-bold
          "
        >
          {company.description}
        </p>
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
              lg:grid
              lg:grid-cols-2
              lg:gap-8
            "
          >
            <CardList jobs={company.jobs} />
          </div>
        </div>
      </div>
    </div>
  );
}
