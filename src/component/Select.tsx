interface SelectProps {
  value: ContentType;
  onChange: (value: ContentType) => void;
}

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter"
}


function Select({ value, onChange }: SelectProps) {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as ContentType); // Pass the selected value to the parent
  };

  return (
    <div>
      <select
        className="bg-gray-500 text-white text-sm rounded-md border border-gray-600 p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full flex"
        value={value}
        onChange={handleSelectChange}
      >
        <option value={ContentType.Youtube}>YouTube</option>
        <option value={ContentType.Twitter}>Twitter</option>
      </select>
    </div>
  );
}

export default Select;
