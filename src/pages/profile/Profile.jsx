import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { signOut } from "firebase/auth";

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/signup");
      } else {
        setUser(currentUser);

        if (currentUser.displayName) {
          const nameParts = currentUser.displayName.split(" ");
          setFirstName(nameParts[0] || "");
          setLastName(nameParts.slice(1).join(" ") || "");
          setDisplayName(nameParts[0] || "User");
        }

        setEmail(currentUser.email || "");
      }
    });

    return () => unsubscribe();
  }, [navigate, location]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!user) return;

    setIsSaving(true);
    setErrorMessage("");

    try {
      const newDisplayName = `${firstName} ${lastName}`.trim();
      await updateProfile(user, { displayName: newDisplayName });

      setDisplayName(firstName);
    } catch (error) {
      setErrorMessage("Failed to update profile: " + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (!user) return null;

  const handleCancel = () => {
    if (user) {
      setFirstName(user.displayName?.split(" ")[0] || "");
      setLastName(user.displayName?.split(" ")[1] || "");
      setEmail(user.email || "");
      setAddress("");
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  return (
    <div>
      <div className="md:pl-20 pl-10 pt-10">
        <h1>
          Welcome! <span className="text-red-600">{displayName || "User"}</span>
        </h1>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
      {/* <div className="md:min-h-screen md:flex md:items-center bg-white-100 md:p-6"> */}
      <div className="flex flex-col md:flex-row md:justify-evenly">
        <div className="ml-8">
          <h2 className="font-semibold text-gray-800 p-4 mb-2">
            Manage My Account
          </h2>
          <ul className="ml-4 space-y-2 text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer text-red-600">
              My Profile
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Address Book</li>
            <li className="hover:text-blue-600 cursor-pointer">
              My Payment Options
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg m-4 md:w-200 md:max-w-1x2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-red-600">
            Edit your profile
          </h2>

          <form onSubmit={handleSave} className="form-box">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-gray-600 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-gray-600 font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  disabled
                  className="mt-1 w-full p-2 border bg-gray-100 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:text-right md:m-5">
              <button
                type="submit"
                onClick={handleCancel}
                className="md:w-full md:w-auto px-6 py-2 text-black font-semibold rounded-lg cursor-pointer "
              >
                Cancel
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="md:w-full md:w-auto px-6 py-2 text-white font-semibold rounded-lg bg-red-700  hover:bg-[#DB4444]  cursor-pointer "
                >
                  Save Changes
                </button>

                <button
                  onClick={handleLogout}
                  className="bg-red-700 bg-[#DB4444] text-white px-4 py-2 rounded  hover:bg-[#DB4444]   transition cursor-pointer "
                >
                  Logout
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProfilePage;
