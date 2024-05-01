"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Page({ params }) {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://www.nuchain.co/webapi/?appkey=dbRsqhjwkQGwKXYT3urPgufmYG6NspLgvG0xrL6a', [
          {
            module: 'get_blogs'
          }
        ]);
        console.log('API Response:', response.data); 
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const blog = blogs.find(blog => blog.slug === params.slug);

  function calculateDaysAgo(created_on) {
    const createdDate = new Date(created_on);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - createdDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }

  return (
    <>
      {blog && (
        <>
          <main>
            <section className="single-section-banner" style={{ backgroundImage: "url(assets/images/blog-banner.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
              <div className="container-xxl d-flex justify-content-center align-items-center">
                <div className="col col-12 col-md-10 text-center">
                  <h1 className="white" style={{ fontSize: "calc(2rem + 0.9vh)" }}>{blog.title}</h1>
                  <p className="white mb-lg-5 mb-3">Published {calculateDaysAgo(blog.created_on)} Days Ago</p>
                </div>
              </div>
            </section>
            <section className='blog-details-section'>
              <div className='container-xxl px-3 px-md-5'>
                <img src={blog.image} alt='blog image' />
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.content
                  }}
                />
              </div>
            </section>
          </main>
        </>
      )}
    </>
  )
}
