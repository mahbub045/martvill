const buttonData = [
  { text: "All Categories", category: "all" },
  { text: "Home & Lifestyle", category: "home_lifestyle" },
  { text: "Men Fashion", category: "men_fashion" },
  { text: "Electronics", category: "electronics" },
  { text: "Toys", category: "toys" },
  { text: "Woman Fashions", category: "woman_fashions" },
  { text: "Home & Lifestyle", category: "home_lifestyle" },
  { text: "Men Fashion", category: "men_fashion" },
  { text: "Electronics", category: "electronics" },
  { text: "Toys", category: "toys" },
  { text: "Woman Fashions", category: "woman_fashions" },
  { text: "Home & Lifestyle", category: "home_lifestyle" },
  { text: "Men Fashion", category: "men_fashion" },
  { text: "Electronics", category: "electronics" },
  { text: "Toys", category: "toys" },
  { text: "Woman Fashions", category: "woman_fashions" },
  { text: "Home & Lifestyle", category: "home_lifestyle" },
  { text: "Men Fashion", category: "men_fashion" },
  { text: "Electronics", category: "electronics" },
  { text: "Toys", category: "toys" },
  { text: "Woman Fashions", category: "woman_fashions" },
  { text: "Home & Lifestyle", category: "home_lifestyle" },
  { text: "Men Fashion", category: "men_fashion" },
  { text: "Electronics", category: "electronics" },
  { text: "Toys", category: "toys" },
  { text: "Woman Fashions", category: "woman_fashions" },
  { text: "Home & Lifestyle", category: "home_lifestyle" },
  { text: "Men Fashion", category: "men_fashion" },
  { text: "Electronics", category: "electronics" },
  { text: "Toys", category: "toys" },
  { text: "Woman Fashions", category: "woman_fashions" },
  { text: "Home & Lifestyle", category: "home_lifestyle" },
  { text: "Men Fashion", category: "men_fashion" },
  { text: "Electronics", category: "electronics" },
  { text: "Toys", category: "toys" },
  { text: "Woman Fashions", category: "woman_fashions" },
  { text: "Home & Lifestyle", category: "home_lifestyle" },
  { text: "Men Fashion", category: "men_fashion" },
  { text: "Electronics", category: "electronics" },
  { text: "Toys", category: "toys" },
  { text: "Woman Fashions", category: "woman_fashions" },
  { text: "Home & Lifestyle", category: "home_lifestyle" },
  { text: "Men Fashion", category: "men_fashion" },
  { text: "Electronics", category: "electronics" },
  { text: "Toys", category: "toys" },
  { text: "Woman Fashions", category: "woman_fashions" },
];

const CategoryBar = ({ isCategoryBarOpen, onCloseCategoryBar, children }) => {
  const categoryBarClasses = isCategoryBarOpen
    ? "translate-x-0"
    : "translate-x-full";
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 z-[99999] rounded sm:w-1/2 w-3/5 bg-white shadow-xl transform transition-transform duration-300 ${categoryBarClasses}`}
    >
      <div className={`h-full flex flex-col ${categoryBarClasses}`}>
        <div className="">
          {/* Cancle BUtton start */}
          <div className="relative">
            <div className="absolute -left-10">
              <button
                onClick={onCloseCategoryBar}
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
          {/* heading */}
          <div className="text-center">
            <h2 className="py-5 text-2xl font-medium">Categories</h2>
          </div>
          {/* heading/ */}
          {/* Buttons */}
          <div className="px-5 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 overflow-auto max-h-screen">
            {buttonData.map((button, index) => (
              <button
                key={index}
                className="px-1 py-1 text-gray-600 hover:text-blue-500 border-gray-600 hover:border-blue-500 font-semibold border rounded text-sm"
              >
                {button.text}
              </button>
            ))}
          </div>
          {/* Buttons/ */}
        </div>

        <div className="p-2 flex-grow overflow-y-auto bg-white">{children}</div>
      </div>
    </div>
  );
};

export default CategoryBar;
