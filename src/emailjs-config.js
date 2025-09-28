// EmailJS Configuration
// Replace these dummy values with your actual EmailJS credentials

export const emailjsConfig = {
  // Your EmailJS Service ID
  serviceId: 'service_xq9i9js',
  //serviceId: 'service_8eb0z63',
  
  // Your EmailJS Template ID
  templateId: 'template_yeywlck',
  //templateId: 'template_vhcpd5t',
  
  // Your EmailJS Public Key
  publicKey: '06BoouE7zOx2l6qt7'
   //publicKey: 'nKEfTSqnjl69ECkir'
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create a new template with the following variables:
//    - {{to_name}} - Recipient name (B Para)
//    - {{from_name}} - Customer name
//    - {{phone}} - Customer phone
//    - {{city}} - Customer city
//    - {{product}} - Product name
//    - {{price}} - Product price
//    - {{message}} - Order details
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the dummy values above with your actual credentials

export default emailjsConfig;

