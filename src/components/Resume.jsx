import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Load from "../assets/loader.gif";

const Resume = () => {
  const params = useParams()
  console.log(params.id);
    const editorRef = useRef(null);
  const [text, setText] = useState("")
  const [loading,setLoading] = useState(true)

  const getData = async () => {
    try {
      const result = await axios.get(`https://backend-resume-zlrr.onrender.com/single-resume/${params.id}`)
      setText(result.data.content)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [params.id])

  if (loading) {
    return <div className='loading'>
      <img width={100} src={Load} alt="log" />
    </div>
  }

  
  return (
    <div className='flex justify-center mt-24'>
    <Editor
      
      apiKey="qo462wysj4yv99by9ki4sbxc7rxjhjecbsq8kqm6vh8ayrk0"
      onInit={(evt, editor) => (editorRef.current = editor)}

      init={{
        height:"100vh",
        menubar: true,
        plugins: [
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
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      value={text}
      onEditorChange={(text) =>
        setText({
          target: { name: "text", value: text },
        })
      }
    />
    </div>
  )
}

export default Resume
