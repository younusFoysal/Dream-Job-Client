import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


const code = `
// Express.js Example
const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Nest.js Example
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

`;


const BlogDetails = () => {

    const style = {
        backgroundImage: "url('https://stytch.com/blog/wp-content/uploads/2022/01/How-a-refresh-token-is-generated-and-used-1.png')",

    };

    return (
        <div>


            <div
                className="bg-cover h-screen p-10 text-center overflow-hidden container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
                style={style}
            >
            </div>

            <div className="relative p-4 mb-10">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="mt-3  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="">

                            <a href="#"
                               className="text-sky-600 hover:text-gray-700 transition duration-500 ease-in-out text-sm">
                                Node.js
                            </a>
                            <h1 href="#" className="text-gray-900 font-bold text-4xl">
                                Understanding Access Tokens, Refresh Tokens, Express.js, and Nest.js
                            </h1>
                            <div className="py-5 text-sm font-regular text-gray-900 flex">
                    <span className="mr-3 flex flex-row items-center">
                       <svg className="text-sky-600" fill="currentColor" height="13px" width="13px" version="1.1"
                            id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" viewBox="0 0 512 512"
                            xml:space="preserve"><g>
	<g>
		<path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
		                   	c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path></g></g></svg>
                      <span className="ml-1">6 mins ago</span>
                    </span>



                                <a href="#" className="flex flex-row items-center hover:text-sky-600">
                                    <svg className="text-sky-600" fill="currentColor" height="16px"
                                         aria-hidden="true" role="img"
                                         focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                        <path fill=""
                                              d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z">
                                        </path>
                                    </svg>
                                    <span className="ml-1">react</span></a>
                            </div>
                            <hr/>
                            <p className="text-base leading-8 my-5">
                                In today's digital world, where security and efficiency are paramount, understanding
                                concepts like access tokens, refresh tokens, and the frameworks that power web
                                applications is essential. Let's delve into these topics and demystify them. </p>

                            <h3 className="text-2xl font-bold my-5">1. What is an Access Token and Refresh Token?</h3>

                            <p className="text-base leading-8 my-5">
                                Access tokens and refresh tokens are integral parts of authentication and authorization
                                mechanisms in web applications.
                            </p>

                            <p className="text-base leading-8 my-5">
                                <span className="font-bold">Access Token: </span>
                                <br/>
                                An access token is a credential used to access protected resources on behalf of a user.
                                It is typically short-lived and grants access to specific resources based on the
                                permissions granted to the user.
                            </p>

                            <p className="text-base leading-8 my-5">
                                <span className="font-bold">Refresh Token: </span>
                                <br/>
                                A refresh token is a long-lived credential used to obtain a new access token after the
                                current access token expires. It helps maintain user sessions without requiring users to
                                re-enter their credentials frequently.
                            </p>

                            <div className="text-base leading-8 my-5">
                                <span className="font-bold">How Do They Work?</span>
                                <br/>
                                <div className="m-6">
                                    <span className="font-semibold">1.  Access Token:  </span>When a user logs in,
                                    the authentication server issues an access token containing information
                                    about the user and their permissions. The client includes this token in each
                                    request to access protected resources.
                                    <br/>
                                    <br/>
                                    <span className="font-semibold">2. Refresh Token: </span>
                                    After the access token expires, the client can use the
                                    refresh token to request a new access token from the authentication server
                                    without requiring the user to log in again.
                                </div>
                            </div>

                            <div className="text-base leading-8 my-5">
                                <span className="font-bold">Where to Store Them on the Client Side?</span>
                                <br/>
                                <div className="m-6">
                                    <span className="font-semibold"> Access Token:  </span>
                                    Store the access token in memory (e.g., in a JavaScript variable) or in a secure
                                    HTTP-only cookie to prevent XSS attacks.
                                    <br/>
                                    <br/>
                                    <span className="font-semibold">Refresh Token: </span>
                                    Store the refresh token securely in an HTTP-only cookie to mitigate CSRF attacks and
                                    prevent client-side access.
                                </div>
                            </div>


                            <h3 className="text-2xl font-bold my-5">2. Express.js and Nest.js</h3>

                            <p className="text-base leading-8 my-5">
                                <span className="font-bold">Express.js: </span>
                                <br/>
                                Express.js is a minimalist web framework for Node.js, designed for building web
                                applications and APIs. It provides a robust set of features for handling HTTP requests,
                                routing, middleware, and more. With its simplicity and flexibility, Express.js is widely
                                used in the Node.js community.
                            </p>

                            <p className="text-base leading-8 my-5">
                                <span className="font-bold">Nest.js: </span>
                                <br/>
                                Nest.js is a progressive Node.js framework for building efficient, reliable, and
                                scalable server-side applications. It leverages TypeScript and takes advantage of
                                features from modern JavaScript, such as decorators and async/await. Nest.js is built on
                                top of Express.js and provides additional structure and features inspired by Angular.
                            </p>

                            <h3 className="text-2xl font-bold my-5">3. Explaining Code</h3>

                            <p className="text-base leading-8 my-5">
                                Without specific code provided, it's challenging to explain it directly. However, I'll
                                provide a general outline of how code might be structured in a typical scenario:
                            </p>


                            <SyntaxHighlighter language="javascript" style={darcula}>
                                {code}
                            </SyntaxHighlighter>

                            <div className="text-base leading-8 my-5">
                                <br/>
                                <div className="m-6">
                                    In the Express.js example, we create a basic server that listens on port 3000 and
                                    responds with 'Hello, Express!' when a GET request is made to the root URL.
                                    <br/>
                                    <br/>
                                    In the Nest.js example, we bootstrap the Nest.js application, creating an instance
                                    of the AppModule and listening on port 3000.
                                </div>
                            </div>


                            <p className="text-base leading-8 my-5">
                                In a real-world scenario, both Express.js and Nest.js would have more complex routing,
                                middleware, error handling, and database integration to create powerful and scalable web
                                applications.
                            </p>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;