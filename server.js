const xp = require("express");
// const bp = require("body-parser");
const routes = require("./server/routes.js");
const app = routes(xp());
// const path = require("path");
// const router = require("./server/routes.js");
// const flash = require("express-flash");
// const session = require("express-session");

app.use(xp.static( __dirname + '/public/dist/public' ));

// app.use(bp.urlencoded({extended:true}));
// app.set("views", path.join(__dirname, "/views"));
// app.set("view engine", "ejs");
// app.use(flash());
// app.use(session({
//     secret: 'liverpool',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
//   }));

routes(app);

app.listen(8000, (errs)=>console.log(errs?errs:"gucci"));