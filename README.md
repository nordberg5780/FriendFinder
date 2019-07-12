# FriendFinder
Node and Express Servers 

Lucky Individuals Scores

5533443354
5144512541
5322445252
5311551242

<h3>Overview</h3>

This app will decide if you are compatible with a few lucky individuals. The app will then display the name and picture of the user with the best overall match.

The user is prompted to input name and a link to a personal photo.

The user will answer 10 questions designed to evaluate 10 aspects of the users personality. User will answer each question with a numeric response from 1 (Strongly Disagree) to 5 (Strongly Agree).

The user’s answers to each question are compared with the answers for several representative individuals. This data is stored in “app/data/friends.js”. The individual whose answers have the least amount of difference from those of the user is chosen as a match.
The “match” is displayed in a modal pop up. The user’s data is pushed into the data structure that holds the “friends” information.
There is a link at the bottom of the home page that will display, in JSON, the current contents of friends.js.

<h3>Notes on the Application</h3>

Compatibility is determined by building a “compatibility score” that measures the total difference between the user’s answers and those of each of the pre-defined “friends”.
The pre-defined “friend” whose score differs least from that of the user is the match.
These pre-defined “friends” are made-up people. Their information is stored within the app/data/friends.js file.
The user’s name, photo link, and answers are stored temporarily in memory, along with the data from app/data/friends.js.
There is no persistent storage (e.g., a database) of user data in this iteration of the app.

Once the user refreshes the site or leaves the app, the user’s data is gone.

The next version will use Sequelize with MySQL to provide persistent storage.

<h3>Technology Used</h3>
Express.js
Node.js
Heroku
