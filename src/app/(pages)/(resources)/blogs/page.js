"use client"
import React, { useEffect, useState } from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
import axios from 'axios';
import Link from 'next/link';
import toast from 'react-hot-toast';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            const response = await axios.post('https://www.nuchain.co/webapi/?appkey=dbRsqhjwkQGwKXYT3urPgufmYG6NspLgvG0xrL6a', [
                {
                    module: 'get_blogs'
                }
            ]);
            // setBlogs([]);
            setBlogs(response.data);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            toast.error('Error fetching data');
            console.error('Error while fetching data:', error);
        }
    };


    useEffect(() => {
        
        fetchData(); 
    }, []);

console.log('blogs',blogs.length)
    function calculateDaysAgo(created_on) {
        const createdDate = new Date(created_on);
        const currentDate = new Date();
        const differenceInTime = currentDate.getTime() - createdDate.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        return differenceInDays;
    }

    return (
        <main>
            <InnerBanner
                sectionname="Connect with Nuchain"
                heading="Unveiling Insights"
                subheading="Reach out to us in the way its works best for you."
                imageurl="assets/bannerimages/blog-grid-min.png"
            />
    {blogs.length === 0 &&loading?<div className='container-xxl text-center mt-2' ><p  className='loader'></p></div> :blogs.length === 0 && !loading? <div className='container-xxl text-center fs-1' >No blogs found</div>: <>
    
    <section className='blog-hero-thumbnils blog-start-section '>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col col-12 col-md-8'>
                            {blogs.map((blog, index) => {
                                if (index === 0) {
                                    return (
                                        <div key={index} className=' position-relative blog-thumbnil-image-box-main mb-4 mb-md-0 d-flex align-items-end'>
                                            <img className='position-absolute z-n1' src={blog?.image} alt='blog-image' />
                                            <Link className='position-absolute z-1 w-100' href={blog.slug} key={blog.id}>
                                                <div className='content-box d-flex justify-content-end flex-column'>
                                                    <h3>{blog.title}</h3>
                                                    <p>Published {calculateDaysAgo(blog.created_on)} Days Ago</p>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                }
                             
                            })}
                        </div>

                        <div className='col col-12 col-md-4 d-flex flex-column justify-content-end'>
                            <div className='row gap-4'>
                                <div className='col col-12'>
                                    {blogs.map((blog, index) => {
                                        if (index === 1) {
                                            return (
                                                <div key={index} className='position-relative blog-thumbnil-image-box d-flex align-items-end'>
                                                    <img className='position-absolute z-n1' src={blog?.image} alt='blog-image' />
                                                    <Link className='position-absolute z-1 w-100' href={blog.slug} key={blog.id}>
                                                        <div className='content-box-small d-flex justify-content-end flex-column'>
                                                            <h3>{blog.title}</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                                <div className='col col-12'>
                                    {blogs.map((blog, index) => {
                                        if (index === 2) {
                                            return (
                                                <div key={index} className='position-relative blog-thumbnil-image-box d-flex align-items-end'>
                                                    <img className='position-absolute z-n1' src={blog?.image} alt='blog-image' />
                                                    <Link className='position-absolute z-1 w-100' href={blog.slug} key={blog.id}>
                                                        <div className='content-box-small d-flex justify-content-end flex-column'>
                                                            <h3>{blog.title}</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='blog-start-section'>
                <div className='container-xxl'>
                    <div className='row'>
                        {blogs.length === 3 ? "" :
                            <>
                                <h2 className='blog-setion-heading'>From the top picks</h2>
                                {blogs.slice(3).map((blog) => (
                                    <div key={blog.id} className='col col-12 col-md-4 mb-4 pb-3'>
                                        
                                        <Link href={blog.slug}>
                                            <div className='blog-thumbnil-image-box'>
                                                <img src={blog?.image} alt='blog-image' />
                                            </div>
                                            <h3 className='blog-title'>{blog?.title}</h3>
                                            <p className='blog-date mb-3 mb-md-0'><span>Published</span> {calculateDaysAgo(blog?.created_on)} Days Ago</p>
                                        </Link>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                </div>
            </section>
    </>}

        </main>

    )
}

export default Blogs;