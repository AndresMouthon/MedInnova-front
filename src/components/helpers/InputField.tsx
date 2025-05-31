import { ChangeEvent, } from "react";

interface InputFieldProps {
    id: string;
    label: string;
    disabled?: boolean;
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
    id,
    label,
    disabled = false,
    type,
    value,
    onChange,
}: InputFieldProps) {

    return (
        // <div className="relative w-full">
        //     <input type={type} id={id} name={id} onChange={onChange} value={value} disabled={disabled} className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`} placeholder=" " />
        //     <label htmlFor={id} className="absolute flex items-center gap-2 text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1" >
        //         <Icon />
        //         {label}
        //     </label>
        // </div>
        <div className="relative">
            <input type={type} id={id} name={id} onChange={onChange} value={value} disabled={disabled} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor={id} className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                {/* <Icon /> */}
                {label}
            </label>
        </div>
    )
}

export default InputField
