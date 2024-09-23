// import React, {useId} from 'react'

// function Select({
//     options,
//     label,
//     className,
//     ...props
// }, ref) {
//     const id = useId()
//   return (
//     <div className='w-full'>
//         {label && <label htmlFor={id} className=''></label>}
//         <select
//         {...props}
//         id={id}
//         ref={ref}
//         className={`px-3 py-2 rounded-l outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
//         >
//             {options?.map((option) => (
//                 <option key={option} value={option}>
//                     {option}
//                 </option>
//             ))}
//         </select>
//     </div>
//   )
// }

// export default React.forwardRef(Select)









import React, { useId } from 'react';

function Select({ options, label, className, ...props }, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className='block mb-2'>{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg outline-none duration-200 border border-gray-200 w-full ${className}`}
                style={{ 
                    backgroundColor: className.includes('bg-slate-700') ? '#374151' : '#ffffff',
                    color: className.includes('text-white') ? '#ffffff' : '#000000',
                }}
            >
                {options?.map((option) => (
                    <option key={option} value={option} className="bg-inherit text-inherit">
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default React.forwardRef(Select);
