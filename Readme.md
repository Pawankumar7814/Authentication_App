# Steps
1. Make a front-end page to capture user details 
    - Create signup and Sign in pages

2. Create Routes and Controllers for signup and sign in pages.
3. Create schema/model of user in database.
4. Create route and controller for signup APIs.
5. Create route and controller for sign in api.
6. Include Passport for signin 
    - Install passport, passport-local and cookie-parser (passport uses cookie-parser)
        - npm i passport passport-local cookie-parser
    - Write config for passport
        - The Auth part
        - Serialize user
        - Deserialize user
    - Tell app to use passport by using middleware and in main index/app file.
    - Install express-session (npm i express-session) and use it.
    - Create middleware to check authentication
    - Create middleware to put user data in response (res).
    - Use mongostore to store the session data of user in database
        - Add library connect-mongo (npm i connect-mongo)
        - use this library in our main file (index/app)

# Functionalities
1. user should be able to signup/signin using email and password auth.
2. user should be able to signup/signin using google auth.
3. user should be able to verify his/her mobile number.
4. user should be able to reset password using his email.
5. user should be able to reset password using his mobile number if it is verified.

# APIs
1. /users/auth/signup req - name, email id, password
2. /users/auth/signin req - email id, password
3. /users/auth/mobile/sendotp req - mobile
4. /users/auth/mobile/verifyotp req - otp
5. /users/auth/mobile/deleteotp
6. /users/auth/password_reset
7. /users/auth/password_update req - new password, confirm password

# Models
1. User - name, email, password, list of liked notes, list of comments, notes, mobile, otp