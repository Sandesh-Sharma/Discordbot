const discord = require("discord.js");
const fetch = require("node-fetch");
require(".credentials");

const client = new discord.Client();

const { token, apikey } = require("./config.json");

const PREFIX = "!";

client.on("ready", () => {
  console.log("This bot is online!");
});

client.on("message", (message) => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "score":
      fetch(
        "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2/Regular_Season_-_11?",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": apikey,
          },
        }
      ).then((response) => console.log(response.json()));

      break;

    case "info":
      if (args[1] === "version") {
        message.channel.sendMessage("Version 1.0.1");
      } else {
        message.channel.sendMessage("Invalid Args");
      }

      break;

    case "clear":
      if (!args[1]) return message.reply("Error please define second arg");
      message.channel.bulkDelete(args[1]);
  }
});

client.login(token);
