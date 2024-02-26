const SideBar = ({ isOpen, onClose, children }) => {
  const drawerClasses = isOpen ? "translate-x-0" : "translate-x-full";
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 z-[99999] md:w-1/4 sm:w-1/2 bg-white shadow-xl transform transition-transform duration-300 ${drawerClasses}`}
    >
      <div className={`h-full flex flex-col ${drawerClasses}`}>
        <div className="">
          {/* Cancle BUtton start */}
          <div className="relative">
            <div className="absolute -right-10">
              <button
                onClick={onClose}
                type="button"
                data-drawer-hide="drawer-body-scrolling"
                aria-controls="drawer-body-scrolling"
                className="text-white px-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Cancle BUtton End */}
          {/* logo and location */}
          <div className="bg-[#EFEFEF]">
            <div className="flex justify-center py-5">
              <img src="/images/goBillint.png" alt="goBillint" />
            </div>
            <div className="px-5 pt-2 pb-5">
              <h6 className="text-gray-600 text-xs">Location:</h6>
              <h4 className="font-semibold text-xl text-gray-700">
                Los Angeles, California
              </h4>
            </div>
          </div>
          {/* logo and location/ */}
          {/* Buttons */}
          <div>
            <button className="flex items-center gap-3 px-5 py-3 w-full text-gray-600 hover:text-blue-500 hover:bg-[#EEF0F9] font-semibold text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-layout-dashboard"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4h6v8h-6z" />
                <path d="M4 16h6v4h-6z" />
                <path d="M14 12h6v8h-6z" />
                <path d="M14 4h6v4h-6z" />
              </svg>
              Dashboard
            </button>
            <button className="flex items-center gap-3 px-5 py-3 w-full text-gray-600 hover:text-blue-500 hover:bg-[#EEF0F9] font-semibold text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map-pin"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              Locations
            </button>
            <button className="flex items-center gap-3 px-5 py-3 w-full text-gray-600 hover:text-blue-500 hover:bg-[#EEF0F9] font-semibold text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-receipt-dollar rotate-180"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                <path d="M14.8 8a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                <path d="M12 6v10" />
              </svg>
              POS Invoices
            </button>
            <button className="flex items-center gap-3 px-5 py-3 w-full text-gray-600 hover:text-blue-500 hover:bg-[#EEF0F9] font-semibold text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-settings"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              </svg>
              Settings
            </button>
          </div>
          {/* Buttons/ */}
        </div>

        <div className="p-2 flex-grow overflow-y-auto bg-white">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
