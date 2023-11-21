const Router = require("express").Router;
const router = new Router();

const pipedrive = require("pipedrive");
const db = require("../data/connection");
const util = require("../util/helper");
const jwt = require("jsonwebtoken");

// Callback endpoint for handling authorization
router.get("/auth/callback", async (req, res) => {
  const apiClient = new ApiClient();
  // pipedrive.ApiClient.instance;
  let oauth2 = apiClient.authentications.oauth2;

  oauth2.clientId = process.env.CLIENT_ID;
  oauth2.clientSecret = process.env.CLIENT_SECRET;
  oauth2.redirectUri = `https://${process.env.APP_DOMAIN}/auth/callback`;

  if (req.query.code) {
    try {
      const token = await apiClient.authorize(req.query.code);
      console.log("Successful Auth ✅");
      const userAPIInstance = new pipedrive.UsersApi();
      const loggedInUser = await userAPIInstance.getCurrentUser();
      await db.createCompany(loggedInUser.data, token);
      return res.status(200);
    } catch (error) {
      return util.getErrorResponse(
        "Authorization with Pipedrive failed",
        error,
        401,
        res
      );
    }
  } else {
    return res.status(400);
  }
});

// JWT Token Verifier
// If `JWT_SECRET` environment variable is set, validate the Custom UI JWT tokens with that signature. If not, just skip.
// router.use("/ui/*", (req, res, next) => {
router.use("/ui/*", (req, res, next) => {
  if (process.env.JWT_SECRET)
    try {
      jwt.verify(req.query.token, process.env.JWT_SECRET);
      next();
    } catch (error) {
      return util.getErrorResponse("JWT Verfication Failed", error, 401, res);
    }
  else next();
});

module.exports = router;
