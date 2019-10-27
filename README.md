# movies-app

My first ReactJS app.  After doing a quick study of the market, I noticed that VueJs and ReactJs have become very popular.
I know how to NodeJs, but due to the learning curve when I created my NodeJs app for YGEIA (apps that are currently on Azure),
I used Jade Views.  I found that they were easy to use like Asp.Net MVC views and the learning curve was very slight.

Two years later, REACT is extremely popular and Jade Views are not. LOL. So this is my first attempt at ReactJs.

I followed a tutorial from here: 
https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66

Then I decided I'd like to have this thing running on a server somewhere, so I modified it by adding the "proxy" config item
into package.json, in the /client (React) folder.

I had to do some things like move index.js out of the server folder, and obsolete the Axios module out of React in order to proxy.
*There is still an index file in /client/api folder, but it isn't being used.

**The code isn't my usual standard as I copy pasted most of it as I followed through in the medium article. I usually use statement
terminators (semicolon's) at the end of each line, but his code didn't have those.  Tomato, tomahto...

...maybe I'll add a lint rule later on.


Here's the running app online:
https://sleepy-thicket-11929.herokuapp.com/


Thanks for checking me out!!!
