# GSheets Email Blast

## About
Originally created for WCEC retreat registration, this script pulls in information from a Google Sheet in order to send a mass email. It uses the Gmail, Drive (for any attachments), and Sheets APIs.

## Instructions for use
This script was created and is intended for use on [Google Apps Script](https://developers.google.com/apps-script).

### Creating a project
You can create a new project directly from your Google Drive (click on "New", then "More"). In the project, you'll get an automatically generated file `Code.gs`, in which you can copy-paste this code. Downloading from GitHub and uploading to the project should work as well.

### Getting dependencies
To get the APIs, click on the + icon next to "Services" and choose the APIs for Gmail, Drive, and Sheets.

### Running the code
In the top bar, click "main" in the dropdown. This will run the `main` function. 

During your first run, you will need to give permission to the APIs and the script.

## Other things to note
Please remember that there is a daily quota on Google API requests. Read more [here](https://developers.google.com/analytics/devguides/reporting/mcf/v3/limits-quotas).
