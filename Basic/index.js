const express = require("express");
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res) =>{
    res.send("Preetirajdotcom")
});

app.get("/youtube",(req,res) => {
    res.send("<h2>Chai or Backend</h2>")
})

const githubData = 
    {
        "login": "Preetiraj3697",
        "id": 107460745,
        "node_id": "U_kgDOBme4iQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/107460745?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Preetiraj3697",
        "html_url": "https://github.com/Preetiraj3697",
        "followers_url": "https://api.github.com/users/Preetiraj3697/followers",
        "following_url": "https://api.github.com/users/Preetiraj3697/following{/other_user}",
        "gists_url": "https://api.github.com/users/Preetiraj3697/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Preetiraj3697/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Preetiraj3697/subscriptions",
        "organizations_url": "https://api.github.com/users/Preetiraj3697/orgs",
        "repos_url": "https://api.github.com/users/Preetiraj3697/repos",
        "events_url": "https://api.github.com/users/Preetiraj3697/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Preetiraj3697/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Preeti Raj",
        "company": "Masai",
        "blog": "https://preetiraj3697.github.io/",
        "location": "Faridabad, Haryana",
        "email": null,
        "hireable": true,
        "bio": "Design 🎨 + Code 👨‍💻 = ❤️\r\n A Passionate Full Stack Web Developer skilled in MERN tech skills.",
        "twitter_username": null,
        "public_repos": 66,
        "public_gists": 10,
        "followers": 261,
        "following": 148,
        "created_at": "2022-06-14T06:45:38Z",
        "updated_at": "2024-01-11T11:35:14Z"
        }



app.get("/github",(req,res) => {
   res.send(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})