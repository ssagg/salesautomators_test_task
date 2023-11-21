# TestCustom UI App

Salesautomators test app

## Steps to run the app:

- Create a new app in Pipedrive with Basic scope and Deals (read-only) scope.
- Fill in the `.env` file with `CLIENT_ID` and `CLIENT_SECRET` details of the newly created app.
- Install `ngrok` using `npm i ngrok -g`. Once installed, run the following command to make the app reachable over the internet - `ngrok http 3000`.
- Copy the ngrok domain and add it to the `APP_DOMAIN` environment variable in `.env` file.
- Run the app by using `npm start` command. In the console you will notice the callback, Custom UI modal. Open the created app from Deals page in Pipedrive.




