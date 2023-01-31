# mean-boilerplate
[ Server Setup ] Navigate to /server
    1) Seed database with users with command: npm run seed
    2) Start server with command: npm run dev
    3) Edit .env file to your database/port setup.
        Example .env file included


[ SERVER NOTES ]
    Dependencies: express, mongoose, dotenv, cors, jsonwebtoken, body-parser, bcrypt
    1) Controllers, Models, Routes are modularized by folder and then imported into an index.js file to allow for multiple imports from a single location
    2) Add personal seeding functionality in /server/config/seed.index.js

[ CLIENT NOTES ]
    Dependencies: @ngrx/store + devtools, @angular/material, bootstrap
    1) Meant to serve as a boiler plate to build mini apps and components
    2) Navbar can display title of current app and status messages
        Constructor should include RootAppService in order gain access to title and status message display functionality
    3) All NgRx related functions/selectors are called from services.
        Components connect to NgRx store via services


  
 