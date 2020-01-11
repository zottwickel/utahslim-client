This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# www.utahslim.com

This is the client-side code for the website www.utahslim.com. It was made in React.js and is hosted on Zeit. This is the source code for this app.

## Features

Many of these features are contained within nested React routes that render these components in a logical way based on where the user will navigate. It renders differently depending on if users are logged in or not, and will load a specific page if the one of the URL routes is initially chosen.

### Bio section

This section is the splash page and it contains the "about us" information for the musical group "Utah Slim and The Desert Poets". It contains information about albums, awards, and some featured performences as well as some information about the artists involved with this group. As people approve us putting their name out there on the website, we will add their information to the page to give people a "who's who" about this group as well as some calls to action about hiring the group, purchasing CD's and attending their performances.

### Videos section

This section displays YouTube videos of the artist that are in iframes. It also has some information about the songs that are being performed in the video. These videos function exactly like any enbedded YouTube video and are set in a flexbox so that depending on the screen size, they will still display and playback appropriately.

### Performances section

This is a section designed to let fans and listeners know about when and where the group will be performing. It has a Google Maps API call in the recurring performances section where Utah Slim hosts an open mic. The links will open a new page with a google map set to the performance location. It calls the custom backend API that is managed by the webmaster (me) to add and delete performances as requested by the bandleader.

### Blog section

Here's where the backend API will shine. This section is designed to house a blog for the artist and the members of his group and his fans to make blog posts about the environment. This section is moderated by the webmaster (still me) under direction of the artist.

#### Article list

This is a listing of all the articles written. It contains some data about each article in the list of articles such as who posted it and when they updated it. Each article links to the specific article page which contains the posting and it's comments.

#### Article page

This page has the article itself. It links back to the article list, and has an option for commenting for logged in users. It has all the information about the author of the article and all the text from the article. It is rendered in plain text for now, and the comments on the right hand side (or bottom on mobile) are as well. Comments are limited to 150 characters.

#### Compose page

This page allows a logged in user to compose an article. It has a form with a title and content inputs that validate that the title is a certain length and that the article is less than 10,000 characters. This will redirect the user back to the articles list upon submission.

### Other components

There are some other components that are part of the app that add that extra functionality that people have come to expect in modern web design.

#### Contact buttons

In the lower right hand corner are three buttons that will either send an email, send a text message, or make a phone call. These components have font awesome icons and are pretty self-explanitory. They are modeled after mobile device buttons that perform the same operations.

#### User forms

In the navigation bar at the top there are buttons for users to either log in or sign up for the website. This is authenticated through JWT and bcrypt. These forms perform validations for email, password, and some user information. There is a checkbox that confirms that all registering users are above the age of 18 in order to protect children.

#### Footer

In the footer contains a simple set of icons directing the user back to my linkedin, portfolio, and github in order for them to explore my professional skills and experience.