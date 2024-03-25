import { useState } from "react";

function InputWithFloatingLabel({ label, ...rest }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative mb-6">
      <label
        className={`absolute transition-all duration-300 ml-3 text-xs  ${
          focused || rest.value
            ? "text-sm text-gray-600 -top-2 px-2 bg-white "
            : "text-base mt-3  px-2 text-base"
        }`}
        htmlFor={rest.id}
      >
        {label}
      </label>
      <input
        {...rest}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          if (!e.target.value) setFocused(false);
        }}
        className={`block w-full px-3 py-2 border rounded-md focus:outline-none ${
          focused || rest.value ? "border-blue-500" : "border-gray-300"
        }`}
      />
    </div>
  );
}

export default InputWithFloatingLabel;
