# User Authentication System
An example of secured user authentication using Mongodb, Express.


## API endpoints

| Route | Request method | Description |
|---------|--------------|-------------|
| `/api/user/signup` | POST | Create a new user account |
| `/api/verify/:token` | GET | Verify the email of a user account |
| `/api/user/login` | POST | Log in to a user account |
| `/api/user/:id` | PUT | Update user account |
| `/api/user/:id` | DELETE | Delete user account |
| `/api/forgotpassword` | POST | Send password reset link email of a user account |
| `/api/resetpassword/:token` | GET | A password resetting form to change password of the email (signed in the jwt token) |
| `/api/resetpassword/:token` | POST | Send new password and change the user account password |


## Folder structure

```
├──controller
|   ├──userSignUp.js
|   ├──verificationHandler.js
|   ├──userLoginHandler.js
|   ├──updateUser.js
|   ├──deleteUser.js
|   ├──forgotPasswordHandler.js
|   └──resetPasswordHandler.js
|
├──lib
|  ├──index.js
|  └──verifyEmail.js
|
├──middlewares
|  ├──checkAuth.js
|  ├──verifyId.js
|  └──rateLimiterFlexible.js
|
├──models
|  └──user.js
|
├──routes
|  ├──forgotpassword.js
|  ├──resetpassword.js
|  ├──verify.js
|  └──user.js
|
├──index.js
├──package.json
├──README.md
```

To run the secured user authentication system on localhost, you'll need to follow these steps:

### Prerequisites
1. Node.js and npm installed on your system.
2. MongoDB installed and running.

### Installation

1. Clone the repository to your local machine.

```bash
git clone <repository_url>
cd <repository_folder>
```

2. Install the project dependencies by running the following command in the project's root directory:

```bash
npm install
```

3. Configure Environment Variables:

   Create a `.env` file in the root directory of your project and set the following environment variables:

   ```
   PORT=3000  # Set the port number you want the server to run on
   MONGODB_URI=<your_mongodb_uri>  # Replace with your MongoDB connection URI
   JWT_SECRET=<your_jwt_secret_key>  # Replace with a secret key for JWT token generation
   EMAIL_SERVICE=<your_email_service>  # Replace with your email service provider (e.g., Gmail)
   EMAIL_USER=<your_email_username>  # Replace with your email username
   EMAIL_PASS=<your_email_password>  # Replace with your email password
   ```

4. Start the server:

```bash
npm start
```

This will start your Express.js server, and it will be accessible at `http://localhost:3000` by default, or the port you specified in the `.env` file.

### Testing the API Endpoints

You can use a tool like [Postman](https://www.postman.com/)

## Security feature
1. User input validation
2. DDOS, Bruteforce and password attack protection
3. Prevention of unauthorized user account update and delete.

## Improvements and updates
Feel free to make any changes and a pull request.
