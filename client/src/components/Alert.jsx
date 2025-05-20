const Alert = ({ msg }) => {
  return (
    <div className="p-2 mt-6 text-sm text-white bg-red-500 rounded-md">
      <i className="fa-solid fa-triangle-exclamation"></i> { msg }
    </div>
  );
};

export default Alert;