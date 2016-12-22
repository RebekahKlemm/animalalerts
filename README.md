# animalalerts
Animal Alerts is designed to be used by animal welfare nonprofits, like the Humane Society of the United States, as a way to alert animal advocates to legislation, actions, or petitions that affect animals.  

Advocates (users) can sign up and choose from a number of interest areas (e.g. Wildlife, Farm Animals, or Domestic Pets).  When they log in, they will see their elected officials and contact information based on the address they provided at signup, and they have an Inbox that is ready to receive alerts.  Currently, the app displays a user's state senator(s) and respresentative(s), but may be updated in the future to include federal legislators.

Admins are the only ones that are allowed to send alerts.  For the demo site, I have created an Admin link in the Nav bar (Susie) that will take you to the current Admin.  From there, Admins can send alerts and see a list of all the alerts that have been sent (an Outbox).  They can also designate additional Admin users from the list of existing users.

I have also created two demo Advocates, with Joe signed up to receive Wildlife alerts, and Bill signed up to receive Domestic Pets alerts.  You can easily switch back and forth between Susie (Admin) and Joe/Bill (Advocates) to see what happens when Susie sends out alerts.  If you choose to create a new user, you will need to switch back and forth between your new user account and Susie's account to see the effects - this will require you to log back in after using Susie's account, since using Susie's account effectively logs you out.  

**** Please note that users must provide a real address (including city and state) in order for the legislator lookup functionality to work properly ****

Additionally, the phone numbers are used as the userID, so they must be unique to each user.  I did that intentionally because I intend to hook this up to Twilio in the future to allow the alerts to be sent via text messages, though of course that would require two-factor authentication before users could sign up with a phone number.  For now, you can use a fake number since the alerts aren't actually sent out as texts.
