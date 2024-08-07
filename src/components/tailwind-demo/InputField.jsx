const InputField = ({id, type, label, value, required = true, label}) => {
  return (
    <div>
         <div className="flex items-center justify-center">
        <div className="relative">
          <input
          required ={required}
            value={value}
            id={id}
            name={id}
            type={type}
            className="peer border-b border-gray-300 bg-inherit py-1 transition-colors focus:border-b-2 focus:border-blue-700 focus:outline-none"
          />
          <label
            htmlFor={id}
            className="absolute left-0 top-1 cursor-text transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700"
            >
                {label}
            </label >
        </div>
      </div>
    </div>
  )
}

export default InputField