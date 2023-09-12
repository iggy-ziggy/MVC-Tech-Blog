# MVC Tech Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description

A CMS style blog site where users can sign up, create blogs, view other users' blogs, and make comments.

## Installation

git clone git@github.com:iggy-ziggy/MVC-Tech-Blog.git

In the terminal, log into mysql and type the following:

source db/schema.sql;

use blog_db;

quit

Once out of mysql, type the following:

node seeds/seed.js

npm start

The database has now been created and seeded with data to test. Using Insomnia, you can perform requests to make sure the database and routes are working correctly.


## Usage

When first visiting the site, you will be able to view blogs and their comments, but you will be required to sign up before being able to post anything. Click the login link from the homepage nav bar or the prompted link in each blog page to sign up. You will now be able to visit your dashboard to create or update your blogs. When you view other users' blogs, you can also comment on them. When you revisit the site, you can now log in and add or update more work.

Deployment: https://desolate-sea-46977-5f478b4ee86e.herokuapp.com/

Homepage:
<img width="1005" alt="Screenshot 2023-09-12 at 12 36 18 PM" src="https://github.com/iggy-ziggy/MVC-Tech-Blog/assets/128410000/0a04539b-86a4-4c58-bea9-2334720f8c8c">

Login/Sign Up:
<img width="1005" alt="Screenshot 2023-09-12 at 12 36 28 PM" src="https://github.com/iggy-ziggy/MVC-Tech-Blog/assets/128410000/c3629377-6abd-4746-9ee1-de2923a7f2ac">

Dashboard:
<img width="1007" alt="Screenshot 2023-09-12 at 12 36 47 PM" src="https://github.com/iggy-ziggy/MVC-Tech-Blog/assets/128410000/218612df-0405-4ce7-9a01-494c7ffc0793">

Blog page, not logged in:
<img width="1006" alt="Screenshot 2023-09-12 at 12 37 17 PM" src="https://github.com/iggy-ziggy/MVC-Tech-Blog/assets/128410000/cf01a816-9a82-4e95-8360-35374bf25b7c">

Blog page, logged in:
<img width="1006" alt="Screenshot 2023-09-12 at 12 37 00 PM" src="https://github.com/iggy-ziggy/MVC-Tech-Blog/assets/128410000/63d003d7-193a-4bc1-8c78-9b86c2193564">


## License
[Link to MIT License](https://opensource.org/licenses/MIT)

## Contributing

n/a

## Tests

n/a

## Questions

GitHub Profile: (https://github.com/iggy-ziggy)

If you have any questions, feel free to contact me at:
merkabafox@gmail.com

