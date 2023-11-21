const axios = require("axios");
const debug = require("debug")("app:helper");
const querystring = require("querystring");
const pipedrive = require("pipedrive");
const apiClient = pipedrive.ApiClient.instance;
const defaultClient = new pipedrive.ApiClient();
defaultClient.authentications.api_key.apiKey =
  "76ac0fe4a0d4a9b5e38d3aa26b5f6d46ae70f303";
// Generates a new token based on the refresh token
const getNewToken = async (refresh_token) => {
  try {
    return axios({
      method: "POST",
      url: "https://oauth.pipedrive.com/oauth/token",
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        ).toString("base64")}`,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });
  } catch (error) {
    debug(error);
    throw new Error("Getting new token from refresh token failed");
  }
};

// Gets information about a particular deal (by ID) in Pipedrive
async function getDeal(deal_id, access_token) {
  try {
    apiClient.authentications.oauth2.accessToken = access_token;
    let dealsApi = new pipedrive.DealsApi();
    let deal = await dealsApi.getDeal(deal_id);
    return deal.data;
  } catch (error) {
    debug(error);
    throw new Error("API request to get deal by ID failed");
  }
}

// Generate error response, log the details
function getErrorResponse(name, detail, status_code, response) {
  console.error(`[${new Date().toISOString()}] ${name}: ${detail.message}`);
  debug(detail);
  response.status(status_code).send({
    success: false,
    message: name,
  });
}

function logImportantURLs() {
  debug("App started.");
  const domain = process.env.APP_DOMAIN;
  const callBackUrl = `CallBack URL : https://${domain}/auth/callback`;
  const appModalUrl = `Custom UI Modal URL : https://${domain}/ui/modal`;

  console.info(`🟢 App is running\n${callBackUrl}\n${appModalUrl}\n`);
}

async function updatingCustomFieldValue(
  id,
  fName,
  lName,
  phone,
  email,
  address,
  city,
  state,
  zip,
  area,
  jobType,
  jobSource,
  jobDescription,
  date,
  startTime,
  endTime,
  testSelect
) {
  try {
    console.log("Sending request...");

    let DEAL_ID = id; // An ID of Deal which will be updated
    const fieldsApi = new pipedrive.DealFieldsApi(defaultClient);
    const dealsApi = new pipedrive.DealsApi(defaultClient);

    // Get all Deal fields (keep in mind pagination)
    const dealFields = await fieldsApi.getDealFields();
    // Find a field you would like to set a new value to on a Deal
    // console.log(dealFields.data);
    const firstName = dealFields.data.find(
      (field) => field.name === "First Name"
    );
    const lastName = dealFields.data.find(
      (field) => field.name === "Last Name"
    );
    const fPhone = dealFields.data.find((field) => field.name === "Phone");
    const fEmail = dealFields.data.find((field) => field.name === "Email");
    const fAddr = dealFields.data.find((field) => field.name === "Address");
    const fCity = dealFields.data.find((field) => field.name === "City");
    const fState = dealFields.data.find((field) => field.name === "State");
    const fPost = dealFields.data.find((field) => field.name === "ZIP");
    const fArea = dealFields.data.find((field) => field.name === "Area");
    const fDate = dealFields.data.find((field) => field.name === "Date");
    const sDate = dealFields.data.find((field) => field.name === "Start TIme");
    const eDate = dealFields.data.find((field) => field.name === "End Time");
    const test = dealFields.data.find((field) => field.name === "Test Select");
    const jType = dealFields.data.find((field) => field.name === "Job Type");
    const jSource = dealFields.data.find(
      (field) => field.name === "Job Source"
    );
    const jobDiscr = dealFields.data.find(
      (field) => field.name === "Job Description"
    );
    const updatedDeal = await dealsApi.updateDeal(DEAL_ID, {
      [firstName.key]: fName,
      [lastName.key]: lName,
      [fPhone.key]: phone,
      [fEmail.key]: email,
      [fAddr.key]: address,
      [fCity.key]: city,
      [fState.key]: state,
      [fPost.key]: zip,
      [fArea.key]: area,
      [jType.key]: jobType,
      [jSource.key]: jobSource,
      [jobDiscr.key]: jobDescription,
      [fDate.key]: date,
      [sDate.key]: startTime,
      [eDate.key]: endTime,
      [test.key]: testSelect,
    });
  } catch (err) {
    console.log("Updating failed", err);
  }
}

async function addNewCustomDealField(id) {
  try {
    console.log("Sending request...");
    let DEAL_ID = id;
    const api = new pipedrive.DealFieldsApi(defaultClient);

    const response = await api.addDealField(DEAL_ID, {
      name: "Random name for a custom field",
      field_type: "double",
    });

    console.log("Custom field was added successfully!", response);
  } catch (err) {
    const errorToLog = err.context.body || err;

    console.log("Adding failed", errorToLog);
  }
}

module.exports = {
  getNewToken,
  getDeal,
  getErrorResponse,
  logImportantURLs,
  updatingCustomFieldValue,
};
