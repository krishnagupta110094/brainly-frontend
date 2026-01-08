interface InputProps {
  ref?: any;
  placeholder?: string;
  type?: string;
}

export function Input({ ref, placeholder, type = "text" }: InputProps) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        className="px-4 py-2 border rounded m-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        ref={ref}
      />
    </div>
  );
}
