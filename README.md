<h1 align="center">✨ PoS Music | Discord Music Bot</h1>

<p align="center">
  <a href="https://github.com/york9675/PoS-Music/issues"><img src="https://img.shields.io/github/issues/york9675/PoS-Music?style=flat" /></a>
  <a href="https://github.com/york9675/PoS-Music/stargazers"><img src="https://img.shields.io/github/stars/york9675/PoS-Music?style=flat" /></a>
</p>

## PoS Music is a simple bot made in `discord.js`, I have made this one to be easily hosted through [Replit](https://replit.com), and it working 2022!

---
## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://www.youtube.com/watch?v=N18czV5tj5o)**  
2.1 **(Optional)** Soundcloud Client ID **[Guide](https://github.com/eritislami/evobot/issues/93#issuecomment-649962700)**
3. Node.js v12.0.0 or newer

## 🚀 Step-by-step Guide

If you are going to be Hosting through `repl.it` then follow these steps!

1. Go to replit website and log in or sing up

![image](https://media.discordapp.net/attachments/947773974954262588/994143016870740018/unknown.png)

2. After login, go to home page and click on "**+ Create**"

![image](https://media.discordapp.net/attachments/947773974954262588/994144043657339031/unknown.png]

3. Then Select "**Import from GitHub**"

![image](https://media.discordapp.net/attachments/947773974954262588/994144409740386304/unknown.png)

4. Go to PoS Music GitHub page, click "**Code**" and copy the link

![image](https://media.discordapp.net/attachments/947773974954262588/994144972360126555/unknown.png)

5. Go back to replit and paste the link in to description column

![image](https://media.discordapp.net/attachments/947773974954262588/994145470572146698/unknown.png)

6. And then push this blue button!

![image](https://media.discordapp.net/attachments/947773974954262588/994145850139869255/unknown.png)

7. After the replit system cloned, you should see this page 

![image](https://media.discordapp.net/attachments/947773974954262588/994146186653081661/unknown.png)

8. Go to .replit window and make sure description  of "Configure the Run Command" is "`node index.js`", then click "**Done**"

![image](https://media.discordapp.net/attachments/947773974954262588/994146919150522409/unknown.png)

9. Go to the `config.json` file, then add the token and API key

:warning: **Note: Make sure you don't share your Token or Api Key with anyone else, Avoid uploeding them in public repo's** :warning:

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

![image](https://media.discordapp.net/attachments/947773974954262588/994147296327520256/unknown.png)

10. Go to shell and enter `npm i` then WAIT!

![image](https://media.discordapp.net/attachments/947773974954262588/994151460277342268/unknown.png)

11. After a long wait, we can finally run the music bot!

![image](https://media.discordapp.net/attachments/947773974954262588/994153862845960202/unknown.png)

12. "Run"

![image](https://media.discordapp.net/attachments/947773974954262588/994153992974254080/unknown.png)

13. Your bot is running now!

![image](https://media.discordapp.net/attachments/947773974954262588/994154476317458442/unknown.png)
![image](https://media.discordapp.net/attachments/947773974954262588/994154476527177768/unknown.png)

14. But now we are going to host it 24/7
Go to [UptimeRobot](https://uptimerobot.com/) website and Log In or Register for FREE

![image](https://media.discordapp.net/attachments/947773974954262588/994154932682895391/unknown.png)

15. Go to dashboard and click "**+ Add New Monitor**" 

![image](https://media.discordapp.net/attachments/947773974954262588/994155652513538048/unknown.png)

16. Go back to replit and copy your link

![image](https://media.discordapp.net/attachments/947773974954262588/994156007011930122/unknown.png)

17. Back to UptimeRobot and make your settings like this

![image](https://media.discordapp.net/attachments/947773974954262588/994156567840698438/unknown.png)

18. After creating a monitor, UptimeRobot would come and wake your website every 5 minitues. Which would make your repl hosted 24/7

**Enjoy your bot!**

![image](https://media.discordapp.net/attachments/947773974954262588/994157094515257344/unknown.png)


---

## 📝 Features & Commands

> Note: The default prefix is 'ub!'

* 🎶 Play music from YouTube via url

`ub!play https://www.youtube.com/watch?v=vQ3XgMKAgxc`

* 🔎 Play music from YouTube via search query

`ub!play Avicii - Lonely Together`

* 🎶 Play music from Soundcloud via url

`ub!play https://soundcloud.com/aviciiofficial/lonely-together-acoustic-feat?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing`

* 🔎 Search and select music to play

`ub!search Lonely Together`

Reply with song number or numbers seperated by comma that you wish to play

Examples: `1` or `1,2,3`

* 📃 Play youtube playlists via url

`ub!playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`

* 🔎 Play youtube playlists via search query

`ub!playlist linkin park meteora`
* Now Playing (ub!nowplaying, ub!np)
* Queue system (ub!queue, ub!q)
* Loop / Repeat (ub!loop)
* Shuffle (ub!shuffle)
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
* And much more!
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
