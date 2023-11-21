# DocuSign Custom UI App

A sample app showcasing DocuSign integration using Pipedrive Custom UI. You can follow the [Codelabs guide](https://developers.pipedrive.com/tutorials/codelabs/docusign-contract-management-custom-ui-integration/index.htm?index=..%2F..index#0) for this app to get started.

### Custom UI Panel

![DocuSign Custom UI Panel](https://user-images.githubusercontent.com/19341550/186169010-6c337710-f89b-4baa-b25f-c889c8972ea7.png)

### Custom UI Modal

![Custom UI Modal](https://user-images.githubusercontent.com/19341550/186170582-7da68926-baa9-4abe-93dd-a2b33b801d52.png)

### Custom UI App Settings

![DocuSign Custom UI App Settings](https://user-images.githubusercontent.com/19341550/186170594-9ebab884-68cb-4188-8d7b-17c24242cbc2.png)

## Steps to run the app:

- Create a [DocuSign developer account](https://developers.docusign.com/platform/account/) and [Pipedrive Sandbox Account](https://developers.pipedrive.com/start-here) with Marketplace Manager enabled.
- Create a new app in Pipedrive with Basic scope and Deals (read-only) scope.
- Rename `.env.example` to `.env`. Fill in the `.env` file with `CLIENT_ID` and `CLIENT_SECRET` details of the newly created app.
- Make sure you name the Custom UI modal as `Template Editor`. The same will be used in the panel.js file to invoke the modal (`action_id` param).
- Install `ngrok` using `npm i ngrok -g`. Once installed, run the following command to make the app reachable over the internet - `ngrok http 3000`.
- Copy the ngrok domain and add it to the `APP_DOMAIN` environment variable in `.env` file.
- Run the app by using `npm start` command. In the console you will notice the callback, Custom UI modal, settings and panel URL. Open the created app in Marketplace Manager and add them in the respective places.
- To install the app in your account, click on the `Preview` link near the app name shown in the Marketplace manager.
- Fill in the app settings page after the authorization in the Custom UI App settings page.
- In your [DocuSign demo account](https://admindemo.docusign.com/), create templates for usage. This will appear in the Deal Details section.
- Click on the _Preview_ button to preview and edit the template from within Pipedrive.
- You can also _Send_ the document to the deal contact if a valid email is provided.

> For advanced troubleshooting, you can start the app using the following command - `DEBUG=app* npm start`

eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTcwMDE4MjIyNiwiZXhwIjoxNzAwMjExMDI2LCJVc2VySWQiOiJiM2YyZjViYi02NTU5LTQzNjItOTlhYS0yNzFjZDZmNjJkNGMiLCJzaXRlaWQiOjEsInNjcCI6WyJpbXBlcnNvbmF0aW9uIiwiZXh0ZW5kZWQiLCJzaWduYXR1cmUiLCJjb3JzIiwiY2xpY2subWFuYWdlIiwiY2xpY2suc2VuZCIsIm9yZ2FuaXphdGlvbl9yZWFkIiwiZ3JvdXBfcmVhZCIsInBlcm1pc3Npb25fcmVhZCIsInVzZXJfcmVhZCIsInVzZXJfd3JpdGUiLCJhY2NvdW50X3JlYWQiLCJkb21haW5fcmVhZCIsImlkZW50aXR5X3Byb3ZpZGVyX3JlYWQiLCJ1c2VyX2RhdGFfcmVkYWN0IiwiZHRyLnJvb21zLnJlYWQiLCJkdHIucm9vbXMud3JpdGUiLCJkdHIuZG9jdW1lbnRzLnJlYWQiLCJkdHIuZG9jdW1lbnRzLndyaXRlIiwiZHRyLnByb2ZpbGUucmVhZCIsImR0ci5wcm9maWxlLndyaXRlIiwiZHRyLmNvbXBhbnkucmVhZCIsImR0ci5jb21wYW55LndyaXRlIiwicm9vbV9mb3JtcyIsIm5vdGFyeV93cml0ZSIsIm5vdGFyeV9yZWFkIiwic3ByaW5nX3JlYWQiLCJzcHJpbmdfd3JpdGUiXSwiYXVkIjoiNjRiNjQ1NjktYzBhNC00OGE3LTgzZmEtMjY1NjAyYzAxNmI2IiwiYXpwIjoiNjRiNjQ1NjktYzBhNC00OGE3LTgzZmEtMjY1NjAyYzAxNmI2IiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50LWQuZG9jdXNpZ24uY29tLyIsInN1YiI6ImIzZjJmNWJiLTY1NTktNDM2Mi05OWFhLTI3MWNkNmY2MmQ0YyIsImF1dGhfdGltZSI6MTcwMDE4MTU5NH0.sUeg5jURUoj25NUea9wSIJbMg8f6*VThtG1luNLCgKUOYbR0OwWZ4t_8owVMd6DLsfDoMfK39OjpWegF3-AJRMKiAf6vtzCPsM6YBsvJyToZSPI*-PsnHocVZl-dEwca9F6xzsrY4fWKI7ToGkIvoQ2jxhdIQkzx64lLn5jjDq47Y-DTbJ6lPDv7Kd6Ctm9z9JyiyHAZHNnbkhUX_6u8G2V-\_1e3cUE0XZaG_q60oWPSVoHgtsoT9ml383XOFRMy3W78CS6yHPJKOryzLSCgcI-fLLTyiupYlhElVvijehcEfc2Zyn8fJHcnEjLxGjbtxe8fJ8EZ112Apm7oPILblQ
