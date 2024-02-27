import { useState } from "react";

const AddNewCustomer = ({ isNewCustomerOpen, onCloseNewCustomer }) => {
  const newCustomerClasses = isNewCustomerOpen
    ? "translate-x-0"
    : "translate-x-full";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currency: "",
    taxId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ${newCustomerClasses}`}
    >
      <div
        className={`md:w-[450px] w-96 bg-white shadow-xl rounded ${newCustomerClasses}`}
      >
        <div className="h-full flex flex-col">
          <div className="relative">
            <div className="absolute top-4 left-10">
              <button
                onClick={onCloseNewCustomer}
                type="button"
                data-drawer-hide="drawer-body-scrolling"
                aria-controls="drawer-body-scrolling"
                className="text-gray-500 px-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-center">
            <h2 className="py-3 text-2xl font-medium">Add New Customer</h2>
          </div>
          {/* form start */}
          <div className="p-10">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col border-b mb-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="focus:outline-none text-sm"
                />
              </div>
              <div className="flex flex-col border-b mb-5">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="focus:outline-none text-sm"
                />
              </div>
              <div className="flex flex-col border-b mb-5">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="focus:outline-none text-sm"
                />
              </div>
              <div className="flex flex-col border-b mb-5">
                <select
                  id="currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  placeholder="Currency"
                  className="focus:outline-none text-sm text-gray-400"
                >
                  <option value="">
                    Currency
                  </option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
              <div className="flex flex-col border-b mb-5">
                <input
                  type="text"
                  id="taxId"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleInputChange}
                  placeholder="TAX ID"
                  className="focus:outline-none text-sm"
                />
              </div>
              <div className="mb-5">
                <button
                  type="button"
                  className="flex items-center gap-2 text-blue-500 font-medium text-sm rounded mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Add More Details
                </button>
              </div>
              <div className="mt-4 flex flex-col text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
          {/* form start/ */}
        </div>
      </div>
    </div>
  );
};

export default AddNewCustomer;
