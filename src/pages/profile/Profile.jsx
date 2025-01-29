import React from "react";

const ProfilePage = () => {
  return (
    <div
      className="min-h-screen flex items-center 
      bg-white-100 p-6"
    >
      <div className="lg:flex pt-12 pl-8 pb-12">
        <div className="w-100 mr-30 p-6  lg:w-1/2">
          <h2 class="font-semibold text-gray-800  pb-2 mb-2 ">
            Manage My Account
          </h2>
          <ul class="ml-4 space-y-2 text-gray-600">
            <li class="hover:text-blue-600 cursor-pointer text-red-600  ">
              My Profile
            </li>
            <li class="hover:text-blue-600 cursor-pointer">Address Book</li>
            <li class="hover:text-blue-600 cursor-pointer">
              My Payment Options
            </li>
          </ul>

          <h2 class="font-semibold text-gray-800 pb-2 mt-6 mb-2">My Orders</h2>
          <ul class="ml-4 space-y-2 text-gray-600">
            <li class="hover:text-blue-600 cursor-pointer">My Returns</li>
            <li class="hover:text-blue-600 cursor-pointer">My Cancellations</li>
          </ul>

          <h2 class="font-semibold text-gray-800  pb-2 mt-6 mb-2">
            My WishList
          </h2>
          <ul class="ml-4 space-y-2 text-gray-600">
            <li class="hover:text-blue-600 cursor-pointer">View My Wishlist</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg w-200 max-w-1x2 ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-red-600">
            Edit your profile
          </h2>

          {/* <form className="space-y-4 form-box"> */}
          <form className=" form-box">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-gray-600 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email & Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-gray-600 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Password Fields */}
            <div className="mb-5">
              <label className="block text-gray-600 font-medium">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Enter current password"
                className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-gray-600 font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 text-black font-semibold rounded-lg cursor-pointer "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 bg-[#DB4444] cursor-pointer   "
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
