# mean-boilerplate

 [ SERVER ]
  - Dependencies: express, mongoose, dotenv, cors, jsonwebtoken, body-parser, bcrypt
  - Controllers, Models, Routes are modularized by folder and then imported into an index.js file

 [ CLIENT ]
  - Dependencies: @ngrx/store, @angular/material, bootstrap
  - Reusable components: TableComponent
  - Navbar can link to different components if you add routerLink
  - NgRx store should be updated in app.module if you want to use multiple reducers