ScriptApp.newTrigger(sweaterGetter)
  .timeBased()
  .everyMinutes(15)
  .create();
  


function sweaterGetter() {
  var num = new Date().getTime();
  var email  = "" //enter sender email address;
  var subject = ""; //enter subject
  var recipient = ""; //enter recipient
  var body1 = ""; //enter body
  
  GmailApp.sendEmail(email,subject,body1);
}

