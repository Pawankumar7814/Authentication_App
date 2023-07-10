# Steps
1. Make a front-end page to capture user details 
    - Create signup and Sign in pages

2. Create Routes and Controllers for signup and sign in pages.
3. Create schema/model of user in database.
4. Create routes and controllers for signup and signin APIs.

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