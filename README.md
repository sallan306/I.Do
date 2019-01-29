# I.Do: An Event App

### Problem:
I don’t know anyone’s number or address or stuff, and I need to mail them something.
### Solution:
Rolodex with a Rolodex. Rolodex-ception. I no longer have to contact everyone and input their data individually; I can send them a link and make them fill out my address book for me!

### Links:
- [Deployed on Heroku - i.Do](https://i-dooo.herokuapp.com/)
- [GitHub Repository](https://github.com/sallan306/I.Do)


#### Team:
* [Annie Ngo](https://github.com/annielngo3) - #theRealBoss
    - Web Layout and User Interface Designer
    - Mobile Compatibility
* [Cody R. Davis](https://github.com/codyrdavis) - #theRealBrains
    - Database Builder
* [Elena Henry](https://github.com/laene) - #teamMom
    - Form Validation
    - Data Representation
    - Algolia Places Library
* [Kyle Bauer](https://github.com/kylecom2000) - #teamDad 
    - Passport/Facebook Authentication
* [Scott Allan](https://github.com/sallan306) 
    - #gitMaster&Commander (great movie)
    - Email and Text Communications
    - Github and Heroku

#### Technologies:
* [Passport](http://www.passportjs.org/packages/passport-facebook/) -- Sign-In and Facebook function
* [Mongoose](https://mongoosejs.com/) -- data management
* [Twilio](https://www.twilio.com/) -- Text messaging and chat-room functionality
* [React](https://reactjs.org/) -- front-end responsive reactive design
* [JavaScript](https://www.javascript.com/) -- EVERYTHING 
* [HTML/CSS](http://lmgtfy.com/?q=HTML%2FCSS) - Styles and The Internet(duh)
* [Node.JS](https://nodejs.org/en/) - Server Stuff
* [Algolia Places](https://community.algolia.com/places/)  - Address autofill for users.

#### Baby-Steps:
1. I can login, add contacts, and send a link to people to a form that they fill out. My contacts list updates live as people respond.
2. I can have multiple contacts list without sending info to people twice .
3. Multiple users can have access to my event contact list.

#### Nice-to-Haves:
-Add Priority option to track grandma first
-Import Facebook Friends
-Autocompletion
-Room Key that allows for multiple users on one contact list
-Import Contacts
-Customize the link message being sent out
-Allow a user to have multiple contact lists
-Seating Plan Option
-RSVP Option


#### App Flow:
- Sign In/Sign Up:
    - User can sign in
    - User can sign up
    - Takes user to dashboard
- Dashboard:
    - View Contacts 
    - Message at top with info on how many entries are complete
    - Live updating on the data (showing all the contacts)
    - Green for complete, grey for incomplete
    - Button to take user to edit/add guests
- Form Adding:
    - Form at top (or bottom) that allows user to input names and information (can be incomplete)
    - Info Displayed as cards, in their own big div that has its own scroll bar
    - Minimal clicking for user
    ** Responsive Div -- “I just want the link to send to people myself!”
        -User can click button, and a div pops up with link for data entry and instructions for how to send that to guests via mass email, text, or message
    - Button “Get Data” that takes user to form sender page
- Form Confirmation:
    - Select all option at top, deselect all function at top, etc.
    - Confirms that everyone on this list is receiving link invite
    - Green for selected, grey for not selected
    - Div pops up that says “Sent!”
    - Directs user back to dashboard
- Guest Form Input:
    - Form with password validation
    - Thank you div pops up
    

#### Task Management:
- [Trello!](https://trello.com/b/M0afjtJd/project-3)
	

#### Task Timeline
- File structure
- Deployed react app that talks to express
- React pages 
    * login page with sign-in/sign-up components
    * dashboard page with contacts component, button links, and message component as described above in App Flow
    * Add/Edit page with dynamically created cards component and div and an entry form component and a component allows for the user to send the link out themself in a mass message using the media of their choosing
    * Confirmation page with a list of incomplete data, select button, deselect button, and “send” button
    * Guest Entry page (routed with room-key unique url, logged in with unique user passphrase of three randomly generated words [if receiving link through site]) and a thank you div component
- Make database
- Routing structure with react
- server.js structure for testing
- Research and implement email functions
- Research and implement text message function
- Research and implement form completion functionality (Algolia)
- Form validation for each form on app
- Additional nice-to-have tasks to be added after completion of initial steps.
