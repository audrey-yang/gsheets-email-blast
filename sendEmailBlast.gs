/**
 * Script to pull data from a spreadsheet and 
 * send an email blast.
 * 
 * Originally created for WCEC retreat registration (wcec.church).
 * 
 * Dependencies: Gmail, Drive, Sheets
 *
 * @summary Sends a mass email from a Google Sheet
 * @author Audrey Yang <ayang24.robin@gmail.com>
 *
 * Created at     : 2021-08-08
 * Last modified  : 2021-08-08
 */


/**
 * Function that sends an email blast
 * based on the given spreadsheet
 **/ 
function sendEmailBlast(
  sheetId, 
  range, 
  subject, 
  bodyTemplate, 
  htmlBodyTemplate, 
  attachments
) {
  const data = Sheets.Spreadsheets.Values.get(sheetId, range).getValues();

  if (!data) {
    Logger.log('This is not a valid spreadsheet.');
  } else {
    for (let i in data) {
      const row = data[i];

      // Collect basic information
      const email = row[3];
      const name = row[4];

      // Break if name or email is empty
      if (!email || !name) {
        break;
      }

      // Email components (subject, body, htmlBody, attachments)
      const body = bodyTemplate(name);
      const htmlBody = htmlBodyTemplate(name);
      const attachmentFiles = attachments.map(id => DriveApp.getFileById(id));

      // Send the email if the address is non-empty
      if (email !== null && email !== '') {
        GmailApp.sendEmail(email, subject, body, {
          attachments: attachmentFiles,
          cc: 'example@not_filled.com',
          htmlBody: htmlBody, 
        });
      } else {
        Logger.log('Email not found for ' + name);
      }
    }

  }
}

/**
 * Main function
 **/ 
function main() {
  // Sheet information
  const sheetId = 'your_sheet_id';
  const range = 'Sheet1!A2:K3';

  // Email components
  const subject = 'Example Subject';

  const bodyTemplate = name => `
    Hello ${name},

    Here is an example body for an email.

    This is an automated message. If you have any questions or problems, please email example@not_filled.com.
  `;

  const htmlBodyTemplate = name => `
    <p>
      Hello ${name},
      <br><br>
      Here is an example body for an email.
      <br><br>
      <i>This is an automated message. If you have any questions or problems, please email example@not_filled.com.</i>
    </p>
  `;

  const attachments = ['your_file_id'];

  // Send email blast!
  sendEmailBlast(sheetId, range, subject, bodyTemplate, htmlBodyTemplate, attachments);
}