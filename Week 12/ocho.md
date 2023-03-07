# From JSON to REST

## Description

Now that you know a little better what an API is, it's time to learn  
about one of the most popular ways to create an API for web applications, REST APIs.

Please answer the following questions with your own words:

1. What is JSON?
2. Is JSON the same as a plain Javascript object?
3. What is REST?
4. Is REST a programming language, framework, technology, or architecture pattern?
5. What is a Resource in REST?
6. What is a resource identifier?
7. How are HTTP and REST related?
8. What HTTP methods does REST use within its architecture rules?
9. Why do we use HTTP methods in REST and how do they relate to resources?
10. Is REST the same as HTTP?

It's important to share your opinion with the team and thus be able to
form your own concept of REST, so before answering the
questions, meet or chat with at least two colleagues and discuss the answers
as a group and refine your final answers.

## Solution

### 1. What is JSON?
JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write and for machines to parse and generate. JSON is often used for transmitting data between a server and a web application, as well as for storing and exchanging data.

   - ***Is JSON the same as a plain Javascript object?***
  
No, JSON is not the same as a plain JavaScript object. While they may look similar, there are some key differences. JSON requires keys to be in quotes, and it does not support functions or undefined values. In addition, JSON is designed to be a data interchange format, while a plain JavaScript object can have behavior attached to it.

### 2. What is REST?

REST stands for Representational State Transfer. It is an architectural style for building web services that are scalable, simple, and easy to maintain.

   - ***Is REST a programming language, framework, technology, or architecture pattern?***

REST is an architectural pattern. It is not a programming language, framework, or technology, but rather a set of principles and constraints that govern how web services should be designed and implemented.

### 3. What is a Resource in REST?

In REST, a resource is an object or concept that is accessible via a unique URL. It can be anything that can be identified, named, addressed, or handled in a web application. Examples of resources include users, products, orders, comments, etc.

   - ***What is a resource identifier?***

A resource identifier is a string that uniquely identifies a particular resource. It is typically included in the URL used to access the resource.

### 4. How are HTTP and REST related?

REST is closely related to HTTP, the protocol that underlies the web. REST uses HTTP methods (also known as verbs) such as GET, POST, PUT, PATCH, and DELETE to interact with resources, and it follows a set of architectural rules called constraints that dictate how these methods should be used.

   - ***What HTTP methods does REST use within its architecture rules?***

- GET: Retrieve a resource.
- POST: Create a new resource.
- PUT: Update an existing resource.
- PATCH: Partially update an existing resource.
- DELETE: Remove a resource.

   - ***Why do we use HTTP methods in REST and how do they relate to resources?***

We use HTTP methods in REST to interact with resources. Each HTTP method has a specific meaning, and by following these rules, REST can ensure that web services are well-designed, consistent, and interoperable. For example, GET is used to retrieve a resource, while POST is used to create a new resource. These methods are tied to specific CRUD (Create, Read, Update, Delete) operations on the resources.

### 5. Is REST the same as HTTP?

REST is not the same as HTTP, but it relies heavily on HTTP for its implementation. HTTP is a protocol that defines how web servers and clients should communicate with each other, while REST is an architectural style that defines how web services should be designed and implemented. REST can use HTTP as its underlying protocol, but it can also use other protocols such as HTTPS, TCP, or WebSockets.