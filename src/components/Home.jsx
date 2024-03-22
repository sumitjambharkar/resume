import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Load from "../assets/loader.gif"




export default function Home() {

  const [resume, setResume] = useState([])
  const [loading,setLoading] = useState(true)
 

  const getData = async () => {
    try {
      const result = await axios.get("https://backend-resume-zlrr.onrender.com/show-resume")
      setResume(result.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const convertToPDF = async (htmlContent) => {
    setLoading(true)
    try {
        const response = await axios.post("https://backend-resume-zlrr.onrender.com/convertToPdf", { htmlContent }, { responseType: 'blob' });

        // Create a Blob from the PDF data
        const blob = new Blob([response.data], { type: 'application/pdf' });

        // Create a link element
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'resume.pdf';

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        document.body.removeChild(link);
        setLoading(false)
    } catch (error) {
        console.error('Error converting HTML to PDF:', error);
    }
};





  
  if (loading) {
    return <div className='loading'>
      <img width={100} src={Load} alt="log" />
    </div>
  }



  return (
    <>
      <div className="con">
        <div>
          <h2 className='head_title'>Free Download & Create Resume</h2>
          <div className='flex justify-center'>
            <input className=' p-3 min-w-96	 rounded-3xl border-2 border-blue-200 focus:outline-blue-500 pl-4' placeholder='Search Resume' />
          </div>

          <div className="cv">
            {resume.map((doc) => (
              <div  >
                <img style={{ width: "400px", height: "500px" }} src={doc.image} alt="" />
                <div className='flex justify-around p-4'>
                  <button onClick={() => convertToPDF(doc.content)} className='border border-blue-500 rounded-3xl px-4 text-blue-500 hover:bg-blue-500 hover:text-white'>{!loading?"Download":"Downloading..."}</button>
                  <button className='border px-4 bg-blue-500 text-white border-blue-500 rounded-3xl p-2 hover:bg-blue-700'>
                    <Link to={`/resume/${doc._id}`}>Get this Resume for FREE</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
