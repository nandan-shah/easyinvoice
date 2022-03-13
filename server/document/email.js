export default function ({ name, email, link }) {
  return `<!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <style type="text/css">
          body {
              margin: 0;
              background: #FEFEFE;
              color: #585858;
        width:100%;
          }
      .root{
        margin: auto;
        width:35rem;
        display:flex;
        justify-content:center;
        flex-direction:column;
      }
      .button {
              display: block;
              width: 100%;
              max-width: 300px;
              background: #7638FF;
              border-radius: 8px;
              color: #fff;
              font-size: 18px;
              padding: 12px 0;
              margin: 30px auto 0;
              text-decoration: none;
          }
      .image{
        height:4rem;
      }
      </style>
    </head>
    <body>
      <center>
      <div class="root">
      <h1>Welcome to EasyInvoice</h1>
      <img class="image" src="https://res.cloudinary.com/f-12/image/upload/v1645208618/easyInvoice/Invoice_L_tkkdzs.png" alt="logo">
      <p>Hello Nandan </p>
      <p>
        Congratulations! You're almost set to start using EasyInvoice. Just click the button below to validate your email address.
        </p>
        <button class="button" type="button" name="button">Verify Email</button>
        <strong>
          <p>
            If you did not enter this email address when signing up for EasyInvoices, disregard this message.
            </p
            </strong>
            <p>
            Team EasyInvoice
            </p>
        </div>
        </center>
    </body>
  </html>  
    `;
}
