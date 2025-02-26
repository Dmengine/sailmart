import React, { useState, useEffect } from "react";
import { useCart } from "../../context/cartContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PaystackButton } from "react-paystack";

const CheckoutPage = () => {
  const {
    cartItems,
    calculateTotal,
    removeFromCart,
    addToCart,
    resetCartCount,
  } = useCart();
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    if (
      !shippingDetails.name ||
      !shippingDetails.email ||
      !shippingDetails.address ||
      !shippingDetails.phone
    ) {
      alert("Please fill in all shipping details.");
      return;
    }
  };

  const publicKey = "pk_test_faae7ff0c95b563034a5b2bab2880301818c8314";
  const amount = calculateTotal() * 100;

  const handlePaystackSuccess = (reference) => {
    alert("Payment Successful! Reference: " + reference.reference);
    console.log("Payment Reference:", reference);
    resetCartCount();
  };

  const handlePaystackClose = () => {
    alert("Payment window closed.");
  };

  const paystackConfig = {
    email: shippingDetails.email,
    amount: amount,
    publicKey,
    text: "Pay Now",
    onSuccess: handlePaystackSuccess,
  };

  return (
    <div
      className="container mx-auto p-4 sm:p-6 lg:p-10"
      style={{ backgroundColor: "#F4F4F4" }}
    >
      <h1 className="text-2xl sm:text-3xl font-bold mb-5 text-center">
        Checkout Page
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-5 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Order Summary
          </h2>
          {loading ? (
            <Skeleton count={5} height={30} />
          ) : cartItems.length === 0 ? (
            <p className="text-center text-lg">Your cart is empty!</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b pb-4 last:border-none"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-[200px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover"
                    />
                    <div>
                      <p
                        className="font-medium text-base sm:text-lg truncate max-w-[200px]"
                        title={item.title}
                      >
                        {item.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        ₦{item.price * 1000}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-1">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        addToCart({
                          id: item.id,
                          quantity: parseInt(e.target.value),
                        })
                      }
                      className="w-16 border text-center text-sm sm:text-base font-medium"
                    />
                    <p className="font-medium text-sm sm:text-base">
                      Subtotal: ₦{(item.price * item.quantity) * 1000}
                    </p>
                  </div>
                </div>
              ))}
              <h3 className="text-xl font-semibold mt-4 text-right">
                Total: ₦{calculateTotal() * 1000}
              </h3>
            </div>
          )}
        </div>

        <div className="p-5 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Shipping Details
          </h2>
          {loading ? (
            <Skeleton count={5} height={30} />
          ) : (
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={shippingDetails.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full border rounded-lg p-2 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={shippingDetails.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full border rounded-lg p-2 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Address</label>
                <textarea
                  name="address"
                  value={shippingDetails.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  className="w-full border rounded-lg p-2 text-sm sm:text-base"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={shippingDetails.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full border rounded-lg p-2 text-sm sm:text-base"
                />
              </div>
            </form>
          )}
        </div>
      </div>

      <div
        className="text-center mt-8"
        onClick={() => {
          handlePlaceOrder();
          resetCartCount();
        }}
      >
        <PaystackButton
          {...paystackConfig}
          className="cursor-pointer bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 w-full sm:w-auto"
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
