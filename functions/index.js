const functions = require("firebase-functions");
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.login,
    pass: functions.config().gmail.pass,
  }
});

exports.sendOrder = functions.https.onCall((data) => {
  const { lingeries, phone, name, email } = data;

  const mailOptions = {
    from: 'Sin story',
    to: functions.config().gmail.to,
    subject: 'New order',
    html: `
      <table>
        <tbody>
          <tr>
            <td>Комплекты</td>
            <td>${lingeries.join('<br />')}</td>
          </tr>
          <tr>
            <td>Телефон</td>
            <td>${phone || 'Не указан'}</td>
          </tr>
          <tr>
            <td>Имя</td>
            <td>${name || 'Не указано'}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>${email || 'Не указан'}</td>
          </tr>
        </tbody>
      </table>
    `,
  };
  
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log('send failing', err.message);
      };
      admin.firestore().collection('orders').add({
        lingeries,
        phone,
        name,
        email,
        sentEmail: !err,
        timestamp: new Date(),
      }).then(() => {
        resolve({
          ...(!!err && { mailErr: err })
        });
      }).catch(fsErr => {
        if (err) {
          reject({
            mailErr: err,
            fsErr,
          });
        } else {
          resolve({
            fsErr,
          });
        };
      });
    });
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
