import { FaArrowRight } from "react-icons/fa6";

const Card = ({ title, description, icon, onClick, btnText }) => {
  return (
    <div className="bg-amber-50 border-2 mb-2 border-gray-200 shadow-md rounded-lg p-6 flex flex-col  hover:shadow-lg transition-shadow duration-300">
      <span className="bg-teal-100 mb-4 rounded-lg h-10 w-10 flex items-center justify-center">
        {icon}
      </span>
      <h3 className="font-semibold mb-2 text-slate-900">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <button
        onClick={onClick}
        className="mt-4 flex items-center justify-center gap-1 bg-teal-700 text-sm  text-white py-2 px-4 rounded hover:bg-teal-600 duration-200 transition-colors"
      >
        <span>{btnText} </span> <FaArrowRight />
      </button>
    </div>
  );
};
export default Card;
