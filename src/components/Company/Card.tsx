/** Company Card.
 *
 * @description
 * Card component for Companies.
 *
 * Props:
 * - company: { handle, name, description, numEmployees, logoUrl }
 *
 * TODO:
 * - combine with Job Card component to make Card component universal.
 */

import { CompanyCardI } from "../../utils/definitions";

export default function Card({ company }: CompanyCardI) {
  return (
    <div
      className="
        card
       bg-white
        shadow-md
        w-[60vw]
        py-4
        mt-8
        hover:scale-105
        ease-in
        duration-200
      "
    >
      <div className="card-body">
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
        <h3 className="card-title text-black">{company.name}</h3>
        <p className="text-black">{company.description}</p>
      </div>
    </div>
  );
}
