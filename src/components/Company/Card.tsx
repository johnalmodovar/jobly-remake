/** Company Card.
 *
 * @description
 * Card component for Companies.
 *
 * Props:
 * - company: { handle, name, description, numEmployees, logoUrl }
 *
 * TODO: handle data types for company.
 */

export default function Card({ company }) {
  return (
    <div
      className="
        card
       bg-white
        shadow-md
        w-[60vw]
        py-4
        my-4
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
