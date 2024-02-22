//{ name, amount, link }
export default function () {
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
        }
        .button {
                display: block;
                width: 100%;
                max-width: 200px;
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
        <img class="image" src="https://res.cloudinary.com/f-12/image/upload/v1645208618/easyInvoice/Invoice_L_tkkdzs.png" alt="logo">
        <h2>Hi Nandan </h2>
        <p>
          Your purchase at xyz store on dd/mm/yyyy has generated a
          total amount of Rs. 00 inclusive of all the taxes. The invoice has been
          mailed to you for detailed information. you can make the payment through
          cash by visiting the store or throught online payment.
          </p>
          <button class="button" type="button" name="button">Invoice</button>
              <p>
              Team EasyInvoice
              </p>
          </div>
          </center>
      </body>
    </html>
  
      `;
}
