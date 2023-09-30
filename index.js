// !made env variable for production ready app
require('dotenv').config()

const express = require('express')

// !main app variable
const app = express()

// !port
const port = 4000

// !DATA
const gitHub = {
    "login": "satyamgitt",
    "id": 100476592,
    "node_id": "U_kgDOBf0msA",
    "avatar_url": "https://avatars.githubusercontent.com/u/100476592?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/satyamgitt",
    "html_url": "https://github.com/satyamgitt",
    "followers_url": "https://api.github.com/users/satyamgitt/followers",
    "following_url": "https://api.github.com/users/satyamgitt/following{/other_user}",
    "gists_url": "https://api.github.com/users/satyamgitt/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/satyamgitt/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/satyamgitt/subscriptions",
    "organizations_url": "https://api.github.com/users/satyamgitt/orgs",
    "repos_url": "https://api.github.com/users/satyamgitt/repos",
    "events_url": "https://api.github.com/users/satyamgitt/events{/privacy}",
    "received_events_url": "https://api.github.com/users/satyamgitt/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Satyam rao",
    "company": null,
    "blog": "",
    "location": "Noida",
    "email": null,
    "hireable": null,
    "bio": "I am FRONTEND DEVELOPER",
    "twitter_username": "Satyamrao",
    "public_repos": 20,
    "public_gists": 0,
    "followers": 0,
    "following": 4,
    "created_at": "2022-02-26T13:41:00Z",
    "updated_at": "2023-09-25T18:46:27Z"
    }


// ! get request {home route and callback function}

app.get("/", (req, res) => {
    res.send("Lo Bhai Satyam Pahela app ban gya")
})

app.get("/twitter", (req, res) => {
    res.send("Jalwa hai Bhai ka ")
})

app.get("/youtube" , (req , res)=>{
res.send(`<h1>Hello Bro HTML</h1>`)
})

app.get("/github" , (req , res)=>{
res.json(gitHub)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})