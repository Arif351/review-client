import React from 'react';

const Blog = () => {
    return (
        <div>
            <div data-theme="dracula" className="card w-11/12 bg-base-100 shadow-xl mx-auto my-6">
                <div className="card-body">
                    <h1 className='text-center text-3xl my-3 font-semibold'>Difference between SQL and NoSQL?</h1>
                    <hr />
                    <p className='text-start mx-3'>
                        <b>1. Type:</b> SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. <br /> <br />
                        <b>2. Language: </b> SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. <br /> <br />

                        <b>3. Scalability </b>In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets. <br /><br />
                        <b>4.Structure </b> SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. <br /> <br />
                        <b>5. Property followed</b>SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). <br /> <br />


                    </p>
                </div>
            </div>
            <div data-theme="dracula" className="card w-11/12 bg-base-100 shadow-xl mx-auto my-6">
                <div className="card-body">
                    <div className="card-actions">
                    </div>
                    <h1 className='text-center text-3xl my-3 font-semibold'>2. What is JWT, and how does it work?</h1>
                    <hr />
                    <p className='text-start mx-3'>
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                        JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information. <br /> <br />
                        <b>How does work:</b> Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. <br />
                        1. User sign-in using username and password or google/facebook. <br />
                        2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                        3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.<br />
                        4. Resource server then verifies the authenticity of the token using the secret salt/ public key.<br />
                    </p>
                </div>
            </div>
            <div data-theme="dracula" className="card w-11/12 bg-base-100 shadow-xl mx-auto my-6">
                <div className="card-body">
                    <div className="card-actions">
                    </div>
                    <h1 className='text-center text-3xl my-3 font-semibold'>What is the difference between javascript and NodeJS?</h1>
                    <hr />
                    <p className='text-start mx-3'>
                        1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. <br /> <br />

                        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br /> <br />

                        2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br /> <br />

                        3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br /> <br />

                        4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific. <br /> <br />

                        Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive. <br /> <br />

                        5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input. <br /> <br />

                        Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.<br /> <br />
                    </p>
                </div>
            </div>
            <div data-theme="dracula" className="card w-11/12 bg-base-100 shadow-xl mx-auto my-6">
                <div className="card-body">
                    <div className="card-actions">
                    </div>
                    <h1 className='text-center text-3xl my-3 font-semibold'>How does NodeJS handle multiple requests at the same time?</h1>
                    <hr />
                    <p className='text-start mx-3'>Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                        No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.

                        Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.

                        The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.

                        NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                        NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                        So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                        The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                        If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.

                        How is NodeJS better than traditional multithreaded request response model?
                        With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;