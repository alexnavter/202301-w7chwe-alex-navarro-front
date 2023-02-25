# DATA

## Data layer

- List of users (each user will show):

  - id (not visible)
  - username
  - image
  - isFriend
  - isEnemy

- User data:
  - id
  - username
  - password
  - email
  - isLogged
  - image
  - friends []
  - enemies []

## Data modifications

- Toggle isFriend from users
- Toggle isEnemy from users
- Modify username from user data
- Modify password from user data
- Modify email from user data
- Modify image from user data
- User:
  - Login
  - Logout

# COMPONENTS

## App

- Show layout component

## Layout

- Show Header component
- Show Users list component

## Navbar

- Show text with 'My friends'
- Show text with 'My enemies'
- Show text with 'All users'
- Show text with 'Edit profile'

## Header

- Show app title "Social App" with heading
- Show Navbar

## Users counter

- Recieves list of users
- Show total number of users

## Users list

- Show Users counter component
- Recieves list of users
- Show a User card component for every user in the list of users
- Sends a user to each User card component

## User card

- Recieves toggle user isFriend action
- Recieves toggle user isEnemy action

- Recieves an user

- Show user image
- Show user username inside heading

- Show button component to toggle friend
- Show button component to toggle enemy

- Sends "Add friend" text to button component that shows if user is friend
- Sends "Delete friend" text to button component that shows if user is not friend
- Sends "Add enemy" text to button component that shows if user is friend
- Sends "Delete friend" text to button component that shows if user is not friend

- Sends toggle user isFriend action to button component that shows if user isFriend
- Sends toggle user isFriend action to button component that shows if user isEnemy

## Button

- Recieves an icon
- Recieves an action
- Show the recieved icon inside a button
- On click executes the recieved action

## RegisterForm

- Shows an input for the username with label "username"
- Shows an input for the password with label "password"
- Shows a button to with the text"Login" to confirm the form
- On submit executes the recieved login action

## RegisterForm

- Shows an input to enter username with the label username
- Shows an input to write password with the label password
- Shows an input to confirm password with the label "confirm password"
- Shows an input for the email with the label "email"
- Shows an input for the age with the label "age"
- Shows an input for the avatar image with the label "Upload image"
- Shows a button with the text "Signup" to confirm the form
- On submit executes the received Signup action
