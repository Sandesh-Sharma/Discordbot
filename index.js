const discord = require("discord.js");
const fetch = require("node-fetch");

const client = new discord.Client();

const token = "NzQ2MzA2NTg1MDcyMjM4NjEz.Xz-aKw.EGsEwI-_KCtOoKbx9_SnvjxZhuc";

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
            "x-rapidapi-key":
              "b64b40ef60msh757b7a802615de6p1b944ajsn19945616f559",
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
