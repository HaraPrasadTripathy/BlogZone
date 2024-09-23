import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';
import config from '../config/config';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey= {config.RTEAPI}
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}




// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import { Controller } from 'react-hook-form';
// import { useSelector } from 'react-redux'; 

// export default function RTE({ name, control, label, defaultValue = "" }) {
//   const darkMode = useSelector((state) => state.auth.darkMode); // Access darkMode from Redux

//   return (
//     <div className='w-full'>
//       {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

//       <Controller
//         name={name || "content"}
//         control={control}
//         render={({ field: { onChange } }) => (
//           <Editor
//             apiKey='6pfdo49wrwcf05fzpwrtin1xoqd6otsq5gvcb518jqc123ti'
//             initialValue={defaultValue}
//             init={{
//               height: 500,
//               menubar: true,
//               plugins: [
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "code",
//                 "help",
//                 "wordcount",
//                 "anchor",
//               ],
//               toolbar:
//                 "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
//               content_style: `
//                 body { 
//                   font-family:Helvetica,Arial,sans-serif; 
//                   font-size:14px; 
//                   background-color: ${darkMode ? '#1a202c' : '#ffffff'};
//                   color: ${darkMode ? '#ffffff' : '#1a1a1a'};
//                 }
//                 a {
//                   color: ${darkMode ? '#63b3ed' : '#3182ce'};
//                 }
//                 img {
//                   max-width: 100%;
//                 }
//               `,
//               skin: darkMode ? "oxide-dark" : "oxide",
//               content_css: darkMode ? "dark" : "",
//             }}
//             onEditorChange={onChange}
//           />
//         )}
//       />
//     </div>
//   );
// }
