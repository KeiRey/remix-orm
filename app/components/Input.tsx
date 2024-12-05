export default function Input({ name, type = "text", defaultValue, className } : { name: string, type?: string, defaultValue?: string , className?: string }) {
    return (
      <input name={name} type={type} className={`${className} form-input border bg-white border-gray-300`} defaultValue={defaultValue} />
    )
  }
  