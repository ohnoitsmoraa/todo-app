/* eslint-disable react/prop-types */

const PrimaryButton = ({ children }) => {
  return (
    <button className="ease-[cubic-bezier(0.15, 0.83, 0.66, 1)] min-w-[120px] cursor-pointer rounded-lg border-0 bg-[var(--primary-color)] px-4 py-3 text-[var(--secondary-color)] shadow-inner transition-all duration-1000 hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]">
      {children}
    </button>
  );
};

export default PrimaryButton;