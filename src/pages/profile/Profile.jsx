import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { signOut } from "firebase/auth";

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        localStorage.setItem("redirectAfterLogin", location.pathname);
        navigate("/profile");
      } else {
        setUser(currentUser);

        if (currentUser.displayName) {
          const nameParts = currentUser.displayName.split(" ");
          setFirstName(nameParts[0] || "");
          setLastName(nameParts[1] || "");
        }
        setEmail(currentUser.email || "");
      }
    });

    return () => unsubscribe();
  }, [navigate, location]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!user) return;

    try {
      // Update Firebase profile
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  if (!user) return null;

  const handleCancel = () => {
    // Reset form fields to the original user data
    if (user) {
      setFirstName(user.displayName?.split(" ")[0] || "");
      setLastName(user.displayName?.split(" ")[1] || "");
      setEmail(user.email || "");
      setAddress(""); // Set this to whatever default address data you store
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login"); // Redirect user to login page after logout
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  return (
    <div>
      <div className="w-full pl-20 pt-10">
        <h1>
          Welcome! <span className="text-red-600">{firstName}</span>
        </h1>
      </div>
      <div className="min-h-screen flex items-center bg-white-100 p-6">
        <div className="lg:flex pt-0 pl-8 pb-12">
          <div className="w-100 mr-30 p-6 lg:w-1/2">
            <h2 className="font-semibold text-gray-800 pb-2 mb-2">
              Manage My Account
            </h2>
            <ul className="ml-4 space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer text-red-600">
                My Profile
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Address Book
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                My Payment Options
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg w-200 max-w-1x2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-red-600">
              Edit your profile
            </h2>

            <form onSubmit={handleUpdateProfile} className="form-box">
              {/* First Name & Last Name */}
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

              {/* Email & Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-gray-600 font-medium">
                    Email
                  </label>
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
              <div className="text-right">
                <button
                  type="submit"
                  onClick={handleCancel}
                  className="w-full md:w-auto px-6 py-2 text-black font-semibold rounded-lg cursor-pointer "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 text-white font-semibold rounded-lg bg-[#DB4444] cursor-pointer"
                >
                  Save Changes
                </button>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
