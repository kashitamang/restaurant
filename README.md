How to use demo code
have a step by step plan
Follow your plan
When something breaks, stop.
Ask, what step is broken?
Debug for a bit (find undefined things, check for console errors, console.log stuff)
Ask, "Who did dani do this step?"
Open the demo code and answer that one question about that one step.
Close the demo code and return to step 4 with new knowledge.

#Plan#
Make fake Page components for each page
Set up react router for the fake pages
Set up my supabase table and adding Cred to the .env
user_id has default value of auth.uid()
Set up RLS to protect rows so you can only see rows YOU CREATED
use the delete template as a starting point then choose ALL

#"Auth" page#
Set up the Auth Page forms
Set up the submit handler to sign in/sign up
write a signUp function in our fetch utils that takes email and password as arguments
pass email and password from state to signUp
log out user to double check it worked
protect our routes: if you are signed in, you shouldn't be allowed in the auth page. it should send you to the list page. Use a ternery in App.js. If there is a user in state, show the list page. If there is no user, show the auth page. The default state of user is client.auth.user(). That way if the user navigates to another page, losing state, we don't kick them back to auth when they return.
we will put the user in App.js state. However, that data lives in a child (AuthPage). We need to pass setUser down to the authpage so that it can set parent state.
We also add a logout button that conditionally renders in the header if there is a user in state.

#"Create" page#
Make a form with a title, author, value, onChange, etc
Make a submit handler and log out the title and author just to confirm we can access form values
Make a createBook function in fetch-utils. it takes in a book object: { title, author }
in our submit handler, call create book, clear out the form, redirect the user to the books page

#"List page#
Make state for our data
Fetch our data in a use effect
map over the data in our JSX
Render a link to detail page for each item in the array

#"Update" Page#
Works just like the create page with three differences: update instead of create, add a delete button, and hydrate the form with pre-filled info
First, let's fetch the book. Get the id from the URL, make a getBookById function in fetch-utils, and grab the book on load in a useEffect
inject the book into state. Since the inputs are controlled, this will also update the inputs.
Write an updateBook function, in fetch-utils and call it (with id and book object) in UpdatePage.js on click
add a delete function in fetch-utils and call it on click in the UpdatePage