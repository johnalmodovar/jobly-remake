/** SettingsPage.
 *
 * @description
 * Page that shows multiple settings that the user can change.
 * - Edit Profile: users can edit (first name, last name, email)
 */

import EditProfileForm from "../../Form/EditProfile";

export default function SettingsPage() {
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
          md:w-[60vw]
        "
      >
        <h2
          className="
            text-black
            text-center
            text-bold
            text-3xl
          "
        >
          Edit Profile Information:
        </h2>

        <EditProfileForm />
      </div>
    </div>
  );
}
