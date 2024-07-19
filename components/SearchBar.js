export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search documentation..."
        className="w-80 py-2 pl-8 pr-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <svg
        className="absolute left-2 top-2 h-6 w-6 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12.9 14.32a8 8 0 111.414-1.415l5.387 5.386a1 1 0 01-1.414 1.415l-5.387-5.386zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
