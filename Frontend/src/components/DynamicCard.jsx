import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DynamicCard = () => {

  const { id, } = useParams();
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardbyID = async () => {
      try {
        console.log("Fetching card with ID:", id);
        const res = await axios.get(`http://localhost:5000/cards/${id}`);

        console.log("API response:", res.data);
        setPage(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCardbyID();
  }, [id]);

  if (loading) return <div className="text-white p-10">Loading...</div>;
  if (!page) return <div className="text-red-500 p-10 text-5xl">Page not found</div>;

  return (
    <div>
      <div className='space-y-8 pt-15 pl-20 mb-30'>
        <h5 className='text-white font-semibold'>RESEARCH REPORT</h5>
        <h1 className='text-white text-6xl max-w-3xl font-semibold'>{page.heading}</h1>
        <p className='text-white text-xl max-w-3xl'>
          {page.description2.map((line, index) => (
            <p key={index} className="text-white text-lg max-w-xl mb-5">
              {line}
            </p>
          ))}
        </p>
      </div>

      <img
        src={page.hero.image}
        className='w-[1250px] h-[700px] object-cover mx-auto my-20'
        alt='sample image' />

      <div className='pl-20 pt-15 space-y-10 mb-30'>
        <h2 className='text-white text-5xl max-w-5xl font-semibold'>{page.hero.heading}</h2>
        <p className='text-white text-lg  max-w-4xl'>{page.hero.description}</p>
      </div>

    </div>
  )
}

export default DynamicCard