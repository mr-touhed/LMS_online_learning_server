# LMS

Online Learnign Platfrom server side.

## Installation

Use the package manager [npm](https://npm.org) to install foobar.

```bash
$git clone https://github.com/mr-touhed/LMS_online_learning_server
$npm install
```

## dependencies

```python
cors
dotenv
express
jsonwebtoken
mongodb
nodemon
stripe
```
## REST API
```express
https://lms-online-learning-server.vercel.app/api/auth (get token with email)
https://lms-online-learning-server.vercel.app/api/check_auth (check token with headers)

https://lms-online-learning-server.vercel.app/api/courses (get courses data)
https://lms-online-learning-server.vercel.app/api/courses (post courses with token valided)
https://lms-online-learning-server.vercel.app/api/courses/{id} (get single post)
https://lms-online-learning-server.vercel.app/api/courses/{id} (delete  single post with token)
```
## infromation

A Learning Management System (LMS) dashboard using the MERN stack (MongoDB, Express.js, React.js, Node.js), with user authentication handled by Firebase. Additionally, you are required to integrate a payment system to allow users to enroll in other users' courses after making a payment.

## Live Link

[KNOWLEDGE server](https://lms-online-learning-server.vercel.app/)