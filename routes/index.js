var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  recentMatches = [
    {
      background: "/images/beatmapsets/1066593/fruits.jpg", // Asumsinya, ini beatmap pertama dari setiap match
      name: "ITBS RO32: (WeebReen) vs (epictuz)",           // Nama match
      date: new Date("2022-04-23"),                         // Tanggal match
      matches: [                                            // Collection dari match yang berjalan
        {
          matchStart: new Date("2022-04-23 13:14:10"),
          matchEnd: new Date("2022-04-23 13:18:00"),
          background: "/images/beatmapsets/1066593/fruits.jpg",
          title: "Fruits",
          difficulty: "Capu's Oni",
          artist: "Panda Eyes",
          mode: "osu!taiko",
          metadata: [
            {
              player: "WeebReen",
              country: "ID",
              url: "https://osu.ppy.sh/users/10129901",
              mod: ["NF"],
              combo: 218,
              accuracy: 95.19,
              hit300s: 638,
              hit100s: 51,
              hit50s: 0,
              miss: 8,
              finalScore: 816387,
            },
            {
              player: "epictuz",
              country: "ID",
              url: "https://osu.ppy.sh/users/25644402",
              mod: ["NF"],
              combo: 256,
              accuracy: 95.19,
              hit300s: 640,
              hit100s: 47,
              hit50s: 0,
              miss: 10,
              finalScore: 808159,
            },
          ]
        },
        {
          matchStart: new Date("2022-04-23 13:20:02"),
          matchEnd: new Date("2022-04-23 13:23:37"),
          background: "/images/beatmapsets/110554/bg.jpg",
          title: "Prayer of the Refugee",
          difficulty: "Muzukashii",
          artist: "Rise Against",
          mode: "osu!taiko",
          metadata: [
            {
              player: "WeebReen",
              country: "ID",
              url: "https://osu.ppy.sh/users/10129901",
              mod: ["NF", "HR"],
              combo: 761,
              accuracy: 99.28,
              hit300s: 750,
              hit100s: 11,
              hit50s: 0,
              miss: 0,
              finalScore: 1039509,
            },
            {
              player: "epictuz",
              country: "ID",
              url: "https://osu.ppy.sh/users/25644402",
              mod: ["NF", "HR"],
              combo: 190,
              accuracy: 95.27,
              hit300s: 705,
              hit100s: 40,
              hit50s: 0,
              miss: 16,
              finalScore: 769724,
            },
          ]
        },
        {
          matchStart: new Date("2022-04-23 13:31:38"),
          matchEnd: new Date("2022-04-23 13:33:21"),
          background: "/images/beatmapsets/1174748/assassination-classroom-background-3.jpg",
          title: "Bye Bye YESTERDAY (TV SIZE)",
          difficulty: "Kantan",
          artist: "3 Gen E Gumi Utatan",
          mode: "osu!taiko",
          metadata: [
            {
              player: "WeebReen",
              country: "ID",
              url: "https://osu.ppy.sh/users/10129901",
              mod: ["NF", "HD"],
              combo: 143,
              accuracy: 99.65,
              hit300s: 142,
              hit100s: 1,
              hit50s: 0,
              miss: 0,
              finalScore: 1050038,
            },
            {
              player: "epictuz",
              country: "ID",
              url: "https://osu.ppy.sh/users/25644402",
              mod: ["NF", "HD"],
              combo: 143,
              accuracy: 99.65,
              hit300s: 142,
              hit100s: 1,
              hit50s: 0,
              miss: 0,
              finalScore: 1050038,
            },
          ]
        },
        {
          matchStart: new Date("2022-04-23 13:31:38"),
          matchEnd: new Date("2022-04-23 13:33:21"),
          background: "/images/beatmapsets/1174748/assassination-classroom-background-3.jpg",
          title: "Bye Bye YESTERDAY (TV SIZE)",
          difficulty: "Kantan",
          artist: "3 Gen E Gumi Utatan",
          mode: "osu!taiko",
          metadata: [
            {
              player: "WeebReen",
              country: "ID",
              url: "https://osu.ppy.sh/users/10129901",
              mod: ["NF", "HD"],
              combo: 143,
              accuracy: 100,
              hit300s: 143,
              hit100s: 0,
              hit50s: 0,
              miss: 0,
              finalScore: 1060000,
            },
            {
              player: "epictuz",
              country: "ID",
              url: "https://osu.ppy.sh/users/25644402",
              mod: ["NF", "HD"],
              combo: 48,
              accuracy: 95.80,
              hit300s: 137,
              hit100s: 0,
              hit50s: 0,
              miss: 6,
              finalScore: 843076,
            },
          ]
        },
      ],
      participants: [                                 // Collection dari users
        {
          name: "WeebReen",                           // Nama pemain
          url: "https://osu.ppy.sh/users/10129901",   // URL profil pemain
        },
        {
          name: "epictuz",                            // Nama pemain
          url: "https://osu.ppy.sh/users/25644402",   // URL profil pemain
        },
      ]
    }
  ];

  res.render('index', {
    recentMatches: recentMatches
  });
});

module.exports = router;
