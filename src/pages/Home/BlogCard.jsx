import React from 'react';

const BlogCard = () => {

    const styles = {
        "background-image" : "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')"

    }

    return (
        <div>

            <div className="">
                <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                    <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                        Blogs
                    </p>
                    <h2
                        className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                        BEST OF OUR BLOG
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                        Read about latest recruitment tools, tips and trends. Get ready for the future!
                    </p>
                </div>
            </div>

            <div className="px-2 py-10 w-full flex justify-center">
                <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                    <div className="lg:w-1/2">
                        <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                             style={styles}>
                        </div>
                    </div>
                    <div
                        className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl text-gray-800 font-bold">
                            Understanding Access Tokens, Refresh Tokens, Express.js,
                            <span className="text-sky-500">and Nest.js</span>
                        </h2>
                        <p className="mt-4 text-gray-600">
                            In today's digital world, where security and efficiency are paramount, understanding
                            concepts like access tokens, refresh tokens, and the frameworks that power web applications
                            is essential. Let's delve into these topics and demystify them.
                        </p>
                        <div className="mt-8">
                            <a href="/blogs"
                               className="bg-sky-500 hover:bg-sky-700 text-gray-100 px-5 py-3 font-semibold rounded">
                                Read
                                Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BlogCard;