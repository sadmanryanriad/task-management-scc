/* eslint-disable react/prop-types */

const Header = ({ children }) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{children}</h2>
    </>
  );
};

export default Header;
