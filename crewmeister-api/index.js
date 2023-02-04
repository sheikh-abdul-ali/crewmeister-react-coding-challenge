var express = require("express"),
  app = express(),
  port = process.env.PORT || 3500;
bodyParser = require("body-parser");
const router = express.Router();

// bodyParser Middlewares
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// set response header (Prevent CORS Error)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use('/api', router);

const ROWS_PER_PAGE = 10

const absences = require("./json-files/absences.json").payload;
const members = require("./json-files/members.json").payload;
// SetTimeout added to add a bit of delay and mimic an actual API
router.get("/absences", async (req, res) => {
  const {
    page
  } = req.query;

  let items = absences.slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE);
  items = items.map(absence => {
    return {
      name: members.find(val => val.userId === absence.userId)?.name,
      ...absence,
    }
  });


  setTimeout(() => {
    res.status(200).send({
      page,
      totalItems: absences.length,
      items,
      more: true
    });
  }, 200);
});
router.get("/members", async (req, res) => {
  setTimeout(() => {
    res.status(200).send({
      page: 0,
      perPage: 0,
      totalItems: 0,
      items: require("./json-files/members.json").payload,
      more: true
    });
  }, 1000);
});

console.log("Project Up and Running on port ", port);

app.listen(port);