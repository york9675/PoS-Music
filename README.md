<h1 align="center">✨ PoS Music | A Simple Discord Music Bot</h1>

<p align="center">
  <a href="https://github.com/york9675/PoS-Music/issues"><img src="https://img.shields.io/github/issues/york9675/PoS-Music?style=flat" /></a>
  <a href="https://github.com/york9675/PoS-Music/stargazers"><img src="https://img.shields.io/github/stars/york9675/PoS-Music?style=flat" /></a>
</p>

## PoS Music is a simple bot made in `discord.js`, I have made this one to be easily hosted through [Replit](https://replit.com)!

---
## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**  
2.1 **(Optional)** Soundcloud Client ID **[Guide](https://github.com/zackradisic/node-soundcloud-downloader#client-id)**
3. Node.js v12.0.0 or newer

## 🚀 Getting Started

If you are going to be Hosting through `repl.it` then follow these steps!

Select Create new Repl
Then select "Import from Github" and paste this repo's link `york9675/PoS-Music`

![image](https://media.discordapp.net/attachments/947773974954262588/993825755672883200/unknown.png)

Then Select Import from Github
Add your token and API in the `config.json` File in the correct lines
The click the "Run" Button on top, and you'll get a screen like this

![image](https://media.discordapp.net/attachments/947773974954262588/993826360755761162/unknown.png)

Copy the top link, Now we are going to host it 24/7 by using [UptimeRobot](https://uptimerobot.com/)
Login and set up and account over there, then click add monitor and make your settings like this

![image](https://media.discordapp.net/attachments/947773974954262588/993826837841055785/unknown.png)


After creating a monitor, UptimeRobot would come and wake your website every 5 minitues. Which would make your repl hosted 24/7

## ⚙️ Configuration

Go to the `config.json` file, then add the token and API key

⚠️ **Note: Make sure you don't share your Token or Api Key with anyone else, Avoid uploeding them in public repo's** ⚠️

```json
{
  "TOKEN": "YOUR TOKEN HERE",
  "YOUTUBE_API_KEY": "YT API KEY HERE",
  "SOUNDCLOUD_CLIENT_ID": "(Options)Soundcloud Client ID Here",
  "MAX_PLAYLIST_SIZE": 100,
  "PREFIX": "ub!",
  "PRUNING": false,
  "STAY_TIME": 30,
  "DEFAULT_VOLUME": 100
}
```
---

## 📝 Features & Commands

> Note: The default prefix is 'ub!'

* 🎶 Play music from YouTube via url

`ub!play https://www.youtube.com/watch?v=GLvohMXgcBo`

* 🔎 Play music from YouTube via search query

`ub!play under the bridge red hot chili peppers`

* 🎶 Play music from Soundcloud via url

`ub!play https://soundcloud.com/blackhorsebrigade/pearl-jam-alive`

* 🔎 Search and select music to play

`ub!search Pearl Jam`

Reply with song number or numbers seperated by comma that you wish to play

Examples: `1` or `1,2,3`

* 📃 Play youtube playlists via url

`ub!playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`

* 🔎 Play youtube playlists via search query

`ub!playlist linkin park meteora`
* Now Playing (ub!nowplaying, ub!np)
* Queue system (ub!queue, ub!q)
* Loop / Repeat (ub!loop)
* Shuffle (/shuffle)
* Volume control (ub!volume, ub!v)
* Lyrics (ub!lyrics, ub!ly)
* Pause (ub!pause)
* Resume (ub!resume, ub!r)
* Skip (ub!skip, ub!s)
* Skip to song # in queue (ub!skipto, ub!st)
* Remove song # from queue (ub!remove, ub!rm)
* Toggle pruning of bot messages (ub!pruning)
* Disconnect (ub!disconnect, ub!dc)
* Help Center (ub!help, ub!h)
* Command Handler from [discordjs.guide](https://discordjs.guide/)
* Media Controls via Reactions

![image](https://media.discordapp.net/attachments/947773974954262588/993827538671513680/unknown.png)

---

## 🤝 Contributions

Feel Free to fork this repo and make changes! :D
Also you can contribute or fix issues if any
Just git-pull after making changes, your help is greatly appreciated

## ✅ Discord server

You can join my discord server [ℙ𝕦𝕣𝕤𝕦𝕚𝕥 𝕠𝕗 𝕊𝕡𝕖𝕖𝕕](https://discord.gg/gASqnJYCWc)!
