import { defineStore } from 'pinia'

export const useDataStore = defineStore('store_data', {
    state: () => ({

data_pl_matches : {
  "filters": {
      "season": "2022",
      "matchday": "24"
  },
  "resultSet": {
      "count": 10,
      "first": "2023-02-18",
      "last": "2023-02-19",
      "played": 0
  },
  "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png"
  },
  "matches": [
      {
          "area": {
              "id": 2072,
              "name": "England",
              "code": "ENG",
              "flag": "https://crests.football-data.org/770.svg"
          },
          "competition": {
              "id": 2021,
              "name": "Premier League",
              "code": "PL",
              "type": "LEAGUE",
              "emblem": "https://crests.football-data.org/PL.png"
          },
          "season": {
              "id": 1490,
              "startDate": "2022-08-05",
              "endDate": "2023-05-28",
              "currentMatchday": 24,
              "winner": null
          },
          "id": 416154,
          "utcDate": "2023-02-18T12:30:00Z",
          "status": "TIMED",
          "matchday": 24,
          "stage": "REGULAR_SEASON",
          "group": null,
          "lastUpdated": "2023-02-16T01:32:00Z",
          "homeTeam": {
              "id": 58,
              "name": "Aston Villa FC",
              "shortName": "Aston Villa",
              "tla": "AVL",
              "crest": "https://crests.football-data.org/58.png"
          },
          "awayTeam": {
              "id": 57,
              "name": "Arsenal FC",
              "shortName": "Arsenal",
              "tla": "ARS",
              "crest": "https://crests.football-data.org/57.png"
          },
          "score": {
              "winner": null,
              "duration": "REGULAR",
              "fullTime": {
                  "home": null,
                  "away": null
              },
              "halfTime": {
                  "home": null,
                  "away": null
              }
          },
          "odds": {
              "msg": "Activate Odds-Package in User-Panel to retrieve odds."
          },
          "referees": [
              {
                  "id": 11430,
                  "name": "Simon Hooper",
                  "type": "REFEREE",
                  "nationality": "England"
              }
          ]
      },
      {
          "area": {
              "id": 2072,
              "name": "England",
              "code": "ENG",
              "flag": "https://crests.football-data.org/770.svg"
          },
          "competition": {
              "id": 2021,
              "name": "Premier League",
              "code": "PL",
              "type": "LEAGUE",
              "emblem": "https://crests.football-data.org/PL.png"
          },
          "season": {
              "id": 1490,
              "startDate": "2022-08-05",
              "endDate": "2023-05-28",
              "currentMatchday": 24,
              "winner": null
          },
          "id": 416145,
          "utcDate": "2023-02-18T15:00:00Z",
          "status": "TIMED",
          "matchday": 24,
          "stage": "REGULAR_SEASON",
          "group": null,
          "lastUpdated": "2023-02-12T01:32:02Z",
          "homeTeam": {
              "id": 76,
              "name": "Wolverhampton Wanderers FC",
              "shortName": "Wolverhampton",
              "tla": "WOL",
              "crest": "https://crests.football-data.org/76.svg"
          },
          "awayTeam": {
              "id": 1044,
              "name": "AFC Bournemouth",
              "shortName": "Bournemouth",
              "tla": "BOU",
              "crest": "https://crests.football-data.org/1044.png"
          },
          "score": {
              "winner": null,
              "duration": "REGULAR",
              "fullTime": {
                  "home": null,
                  "away": null
              },
              "halfTime": {
                  "home": null,
                  "away": null
              }
          },
          "odds": {
              "msg": "Activate Odds-Package in User-Panel to retrieve odds."
          },
          "referees": [
              {
                  "id": 11405,
                  "name": "Michael Salisbury",
                  "type": "REFEREE",
                  "nationality": "England"
              }
          ]
      },
      {
          "area": {
              "id": 2072,
              "name": "England",
              "code": "ENG",
              "flag": "https://crests.football-data.org/770.svg"
          },
          "competition": {
              "id": 2021,
              "name": "Premier League",
              "code": "PL",
              "type": "LEAGUE",
              "emblem": "https://crests.football-data.org/PL.png"
          },
          "season": {
              "id": 1490,
              "startDate": "2022-08-05",
              "endDate": "2023-05-28",
              "currentMatchday": 24,
              "winner": null
          },
          "id": 416147,
          "utcDate": "2023-02-18T15:00:00Z",
          "status": "TIMED",
          "matchday": 24,
          "stage": "REGULAR_SEASON",
          "group": null,
          "lastUpdated": "2023-02-16T01:32:00Z",
          "homeTeam": {
              "id": 351,
              "name": "Nottingham Forest FC",
              "shortName": "Nottingham",
              "tla": "NOT",
              "crest": "https://crests.football-data.org/351.png"
          },
          "awayTeam": {
              "id": 65,
              "name": "Manchester City FC",
              "shortName": "Man City",
              "tla": "MCI",
              "crest": "https://crests.football-data.org/65.png"
          },
          "score": {
              "winner": null,
              "duration": "REGULAR",
              "fullTime": {
                  "home": null,
                  "away": null
              },
              "halfTime": {
                  "home": null,
                  "away": null
              }
          },
          "odds": {
              "msg": "Activate Odds-Package in User-Panel to retrieve odds."
          },
          "referees": [
              {
                  "id": 11503,
                  "name": "Graham Scott",
                  "type": "REFEREE",
                  "nationality": "England"
              }
          ]
      },
      {
          "area": {
              "id": 2072,
              "name": "England",
              "code": "ENG",
              "flag": "https://crests.football-data.org/770.svg"
          },
          "competition": {
              "id": 2021,
              "name": "Premier League",
              "code": "PL",
              "type": "LEAGUE",
              "emblem": "https://crests.football-data.org/PL.png"
          },
          "season": {
              "id": 1490,
              "startDate": "2022-08-05",
              "endDate": "2023-05-28",
              "currentMatchday": 24,
              "winner": null
          },
          "id": 416150,
          "utcDate": "2023-02-18T15:00:00Z",
          "status": "TIMED",
          "matchday": 24,
          "stage": "REGULAR_SEASON",
          "group": null,
          "lastUpdated": "2023-02-12T01:32:02Z",
          "homeTeam": {
              "id": 62,
              "name": "Everton FC",
              "shortName": "Everton",
              "tla": "EVE",
              "crest": "https://crests.football-data.org/62.png"
          },
          "awayTeam": {
              "id": 341,
              "name": "Leeds United FC",
              "shortName": "Leeds United",
              "tla": "LEE",
              "crest": "https://crests.football-data.org/341.png"
          },
          "score": {
              "winner": null,
              "duration": "REGULAR",
              "fullTime": {
                  "home": null,
                  "away": null
              },
              "halfTime": {
                  "home": null,
                  "away": null
              }
          },
          "odds": {
              "msg": "Activate Odds-Package in User-Panel to retrieve odds."
          },
          "referees": [
              {
                  "id": 11423,
                  "name": "Andy Madley",
                  "type": "REFEREE",
                  "nationality": "England"
              }
          ]
      },
      {
          "area": {
              "id": 2072,
              "name": "England",
              "code": "ENG",
              "flag": "https://crests.football-data.org/770.svg"
          },
          "competition": {
              "id": 2021,
              "name": "Premier League",
              "code": "PL",
              "type": "LEAGUE",
              "emblem": "https://crests.football-data.org/PL.png"
          },
          "season": {
              "id": 1490,
              "startDate": "2022-08-05",
              "endDate": "2023-05-28",
              "currentMatchday": 24,
              "winner": null
          },
          "id": 416151,
          "utcDate": "2023-02-18T15:00:00Z",
          "status": "TIMED",
          "matchday": 24,
          "stage": "REGULAR_SEASON",
          "group": null,
          "lastUpdated": "2023-02-14T01:32:01Z",
          "homeTeam": {
              "id": 61,
              "name": "Chelsea FC",
              "shortName": "Chelsea",
              "tla": "CHE",
              "crest": "https://crests.football-data.org/61.png"
          },
          "awayTeam": {
              "id": 340,
              "name": "Southampton FC",
              "shortName": "Southampton",
              "tla": "SOU",
              "crest": "https://crests.football-data.org/340.png"
          },
          "score": {
              "winner": null,
              "duration": "REGULAR",
              "fullTime": {
                  "home": null,
                  "away": null
              },
              "halfTime": {
                  "home": null,
                  "away": null
              }
          },
          "odds": {
              "msg": "Activate Odds-Package in User-Panel to retrieve odds."
          },
          "referees": [
              {
                  "id": 11556,
                  "name": "David Coote",
                  "type": "REFEREE",
                  "nationality": "England"
              }
          ]
      },
      {
          "area": {
              "id": 2072,
              "name": "England",
              "code": "ENG",
              "flag": "https://crests.football-data.org/770.svg"
          },
          "competition": {
              "id": 2021,
              "name": "Premier League",
              "code": "PL",
              "type": "LEAGUE",
              "emblem": "https://crests.football-data.org/PL.png"
          },
          "season": {
              "id": 1490,
              "startDate": "2022-08-05",
              "endDate": "2023-05-28",
              "currentMatchday": 24,
              "winner": null
          },
          "id": 416152,
          "utcDate": "2023-02-18T15:00:00Z",
          "status": "TIMED",
          "matchday": 24,
          "stage": "REGULAR_SEASON",
          "group": null,
          "lastUpdated": "2023-02-12T01:32:02Z",
          "homeTeam": {
              "id": 397,
              "name": "Brighton & Hove Albion FC",
              "shortName": "Brighton Hove",
              "tla": "BHA",
              "crest": "https://crests.football-data.org/397.svg"
          },
          "awayTeam": {
              "id": 63,
              "name": "Fulham FC",
              "shortName": "Fulham",
              "tla": "FUL",
              "crest": "https://crests.football-data.org/63.svg"
          },
          "score": {
              "winner": null,
              "duration": "REGULAR",
              "fullTime": {
                  "home": null,
                  "away": null
              },
              "halfTime": {
                  "home": null,
                  "away": null
              }
          },
          "odds": {
              "msg": "Activate Odds-Package in User-Panel to retrieve odds."
          },
          "referees": [
              {
                  "id": 11469,
                  "name": "Darren England",
                  "type": "REFEREE",
                  "nationality": "England"
              }
          ]
      },
      {
          "area": {
              "id": 2072,
              "name": "England",
              "code": "ENG",
              "flag": "https://crests.football-data.org/770.svg"
          },
          "competition": {
              "id": 2021,
              "name": "Premier League",
              "code": "PL",
              "type": "LEAGUE",
              "emblem": "https://crests.football-data.org/PL.png"
          },
          "season": {
              "id": 1490,
              "startDate": "2022-08-05",
              "endDate": "2023-05-28",
              "currentMatchday": 24,
              "winner": null
          },
          "id": 416153,
          "utcDate": "2023-02-18T15:00:00Z",
          "status": "TIMED",
          "matchday": 24,
          "stage": "REGULAR_SEASON",
          "group": null,
          "lastUpdated": "2023-02-12T01:32:02Z",
          "homeTeam": {
              "id": 402,
              "name": "Brentford FC",
              "shortName": "Brentford",
              "tla": "BRE",
              "crest": "https://crests.football-data.org/402.png"
          },
          "awayTeam": {
              "id": 354,
              "name": "Crystal Palace FC",
              "shortName": "Crystal Palace",
              "tla": "CRY",
              "crest": "https://crests.football-data.org/354.png"
          },
          "score": {
              "winner": null,
              "duration": "REGULAR",
              "fullTime": {
                  "home": null,
                  "away": null
              },
              "halfTime": {
                  "home": null,
                  "away": null
              }
          },
          "odds": {
              "msg": "Activate Odds-Package in User-Panel to retrieve odds."
          },
          "referees": [
              {
                  "id": 11520,
                  "name": "Paul Tierney",
                  "type": "REFEREE",
                  "nationality": "England"
              }
          ]
      },
      {
          "area": {
              "id": 2072,
              "name": "England",
              "code": "ENG",
              "flag": "https://crests.football-data.org/770.svg"
          },
          "competition": {
              "id": 2021,
              "name": "Premier League",
              "code": "PL",
              "type": "LEAGUE",
              "emblem": "https://crests.football-data.org/PL.png"
          },
          "season": {
              "id": 1490,
              "startDate": "2022-08-05",
              "endDate": "2023-05-28",
              "currentMatchday": 24,
              "winner": null
          },
          "id": 416148,
          "utcDate": "2023-02-18T17:30:00Z",
          "status": "TIMED",
          "matchday": 24,
          "stage": "REGULAR_SEASON",
          "group": null,
          "lastUpdated": "2023-02-14T01:32:01Z",
          "homeTeam": {
              "id": 67,
              "name": "Newcastle United FC",
              "shortName": "Newcastle",
              "tla": "NEW",
              "crest": "https://crests.football-data.org/67.png"
          },
          "awayTeam": {
              "id": 64,
              "name": "Liverpool FC",
              "shortName": "Liverpool",
              "tla": "LIV",
              "crest": "https://crests.football-data.org/64.png"
          },
          "score": {
              "winner": null,
              "duration": "REGULAR",
              "fullTime": {
                  "home": null,
                  "away": null
              },
              "halfTime": {
                  "home": null,
                  "away": null
              }
          },
          "odds": {
              "msg": "Activate Odds-Package in User-Panel to retrieve odds."
          },
          "referees": [
              {
                  "id": 11580,
                  "name": "Anthony Taylor",
                  "type": "REFEREE",
                  "nationality": "England"
              }
          ]
      },
      {
          "area": {
              "id": 2072,
              "name": "England",
              "code": "ENG",
              "flag": "https://crests.football-data.org/770.svg"
          },
          "competition": {
              "id": 2021,
              "name": "Premier League",
              "code": "PL",
              "type": "LEAGUE",
              "emblem": "https://crests.football-data.org/PL.png"
          },
          "season": {
              "id": 1490,
              "startDate": "2022-08-05",
              "endDate": "2023-05-28",
              "currentMatchday": 24,
              "winner": null
          },
          "id": 416149,
          "utcDate": "2023-02-19T14:00:00Z",
          "status": "TIMED",
          "matchday": 24,
          "stage": "REGULAR_SEASON",
          "group": null,
          "lastUpdated": "2023-02-13T01:32:02Z",
          "homeTeam": {
              "id": 66,
              "name": "Manchester United FC",
              "shortName": "Man United",
              "tla": "MUN",
              "crest": "https://crests.football-data.org/66.png"
          },
          "awayTeam": {
              "id": 338,
              "name": "Leicester City FC",
              "shortName": "Leicester City",
              "tla": "LEI",
              "crest": "https://crests.football-data.org/338.png"
          },
          "score": {
              "winner": null,
              "duration": "REGULAR",
              "fullTime": {
                  "home": null,
                  "away": null
              },
              "halfTime": {
                  "home": null,
                  "away": null
              }
          },
          "odds": {
              "msg": "Activate Odds-Package in User-Panel to retrieve odds."
          },
          "referees": [
              {
                  "id": 11494,
                  "name": "Stuart Attwell",
                  "type": "REFEREE",
                  "nationality": "England"
              }
          ]
      },
      {
          "area": {
              "id": 2072,
              "name": "England",
              "code": "ENG",
              "flag": "https://crests.football-data.org/770.svg"
          },
          "competition": {
              "id": 2021,
              "name": "Premier League",
              "code": "PL",
              "type": "LEAGUE",
              "emblem": "https://crests.football-data.org/PL.png"
          },
          "season": {
              "id": 1490,
              "startDate": "2022-08-05",
              "endDate": "2023-05-28",
              "currentMatchday": 24,
              "winner": null
          },
          "id": 416146,
          "utcDate": "2023-02-19T16:30:00Z",
          "status": "TIMED",
          "matchday": 24,
          "stage": "REGULAR_SEASON",
          "group": null,
          "lastUpdated": "2023-02-13T01:32:02Z",
          "homeTeam": {
              "id": 73,
              "name": "Tottenham Hotspur FC",
              "shortName": "Tottenham",
              "tla": "TOT",
              "crest": "https://crests.football-data.org/73.svg"
          },
          "awayTeam": {
              "id": 563,
              "name": "West Ham United FC",
              "shortName": "West Ham",
              "tla": "WHU",
              "crest": "https://crests.football-data.org/563.png"
          },
          "score": {
              "winner": null,
              "duration": "REGULAR",
              "fullTime": {
                  "home": null,
                  "away": null
              },
              "halfTime": {
                  "home": null,
                  "away": null
              }
          },
          "odds": {
              "msg": "Activate Odds-Package in User-Panel to retrieve odds."
          },
          "referees": [
              {
                  "id": 11605,
                  "name": "Michael Oliver",
                  "type": "REFEREE",
                  "nationality": "England"
              }
          ]
      }
  ]
},

data_pl_standing: {
    "filters": {
        "season": "2022"
    },
    "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
    },
    "competition": {
        "id": 2021,
        "name": "Premier League",
        "code": "PL",
        "type": "LEAGUE",
        "emblem": "https://crests.football-data.org/PL.png"
    },
    "season": {
        "id": 1490,
        "startDate": "2022-08-05",
        "endDate": "2023-05-28",
        "currentMatchday": 24,
        "winner": null
    },
    "standings": [
        {
            "stage": "REGULAR_SEASON",
            "type": "TOTAL",
            "group": null,
            "table": [
                {
                    "position": 1,
                    "team": {
                        "id": 65,
                        "name": "Manchester City FC",
                        "shortName": "Man City",
                        "tla": "MCI",
                        "crest": "https://crests.football-data.org/65.png"
                    },
                    "playedGames": 23,
                    "form": "W,W,L,W,W",
                    "won": 16,
                    "draw": 3,
                    "lost": 4,
                    "points": 51,
                    "goalsFor": 59,
                    "goalsAgainst": 23,
                    "goalDifference": 36
                },
                {
                    "position": 2,
                    "team": {
                        "id": 57,
                        "name": "Arsenal FC",
                        "shortName": "Arsenal",
                        "tla": "ARS",
                        "crest": "https://crests.football-data.org/57.png"
                    },
                    "playedGames": 22,
                    "form": "L,D,L,W,W",
                    "won": 16,
                    "draw": 3,
                    "lost": 3,
                    "points": 51,
                    "goalsFor": 47,
                    "goalsAgainst": 21,
                    "goalDifference": 26
                },
                {
                    "position": 3,
                    "team": {
                        "id": 66,
                        "name": "Manchester United FC",
                        "shortName": "Man United",
                        "tla": "MUN",
                        "crest": "https://crests.football-data.org/66.png"
                    },
                    "playedGames": 23,
                    "form": "W,D,W,L,D",
                    "won": 14,
                    "draw": 4,
                    "lost": 5,
                    "points": 46,
                    "goalsFor": 38,
                    "goalsAgainst": 28,
                    "goalDifference": 10
                },
                {
                    "position": 4,
                    "team": {
                        "id": 67,
                        "name": "Newcastle United FC",
                        "shortName": "Newcastle",
                        "tla": "NEW",
                        "crest": "https://crests.football-data.org/67.png"
                    },
                    "playedGames": 22,
                    "form": "D,D,D,W,D",
                    "won": 10,
                    "draw": 11,
                    "lost": 1,
                    "points": 41,
                    "goalsFor": 35,
                    "goalsAgainst": 13,
                    "goalDifference": 22
                },
                {
                    "position": 5,
                    "team": {
                        "id": 73,
                        "name": "Tottenham Hotspur FC",
                        "shortName": "Tottenham",
                        "tla": "TOT",
                        "crest": "https://crests.football-data.org/73.svg"
                    },
                    "playedGames": 23,
                    "form": "L,W,W,L,L",
                    "won": 12,
                    "draw": 3,
                    "lost": 8,
                    "points": 39,
                    "goalsFor": 42,
                    "goalsAgainst": 35,
                    "goalDifference": 7
                },
                {
                    "position": 6,
                    "team": {
                        "id": 397,
                        "name": "Brighton & Hove Albion FC",
                        "shortName": "Brighton Hove",
                        "tla": "BHA",
                        "crest": "https://crests.football-data.org/397.svg"
                    },
                    "playedGames": 21,
                    "form": "D,W,D,W,W",
                    "won": 10,
                    "draw": 5,
                    "lost": 6,
                    "points": 35,
                    "goalsFor": 39,
                    "goalsAgainst": 28,
                    "goalDifference": 11
                },
                {
                    "position": 7,
                    "team": {
                        "id": 63,
                        "name": "Fulham FC",
                        "shortName": "Fulham",
                        "tla": "FUL",
                        "crest": "https://crests.football-data.org/63.svg"
                    },
                    "playedGames": 23,
                    "form": "W,D,L,L,W",
                    "won": 10,
                    "draw": 5,
                    "lost": 8,
                    "points": 35,
                    "goalsFor": 34,
                    "goalsAgainst": 30,
                    "goalDifference": 4
                },
                {
                    "position": 8,
                    "team": {
                        "id": 402,
                        "name": "Brentford FC",
                        "shortName": "Brentford",
                        "tla": "BRE",
                        "crest": "https://crests.football-data.org/402.png"
                    },
                    "playedGames": 22,
                    "form": "D,W,D,W,W",
                    "won": 8,
                    "draw": 10,
                    "lost": 4,
                    "points": 34,
                    "goalsFor": 36,
                    "goalsAgainst": 29,
                    "goalDifference": 7
                },
                {
                    "position": 9,
                    "team": {
                        "id": 64,
                        "name": "Liverpool FC",
                        "shortName": "Liverpool",
                        "tla": "LIV",
                        "crest": "https://crests.football-data.org/64.png"
                    },
                    "playedGames": 21,
                    "form": "W,L,D,L,L",
                    "won": 9,
                    "draw": 5,
                    "lost": 7,
                    "points": 32,
                    "goalsFor": 36,
                    "goalsAgainst": 28,
                    "goalDifference": 8
                },
                {
                    "position": 10,
                    "team": {
                        "id": 61,
                        "name": "Chelsea FC",
                        "shortName": "Chelsea",
                        "tla": "CHE",
                        "crest": "https://crests.football-data.org/61.png"
                    },
                    "playedGames": 22,
                    "form": "D,D,D,W,L",
                    "won": 8,
                    "draw": 7,
                    "lost": 7,
                    "points": 31,
                    "goalsFor": 23,
                    "goalsAgainst": 22,
                    "goalDifference": 1
                },
                {
                    "position": 11,
                    "team": {
                        "id": 58,
                        "name": "Aston Villa FC",
                        "shortName": "Aston Villa",
                        "tla": "AVL",
                        "crest": "https://crests.football-data.org/58.png"
                    },
                    "playedGames": 22,
                    "form": "L,L,W,W,D",
                    "won": 8,
                    "draw": 4,
                    "lost": 10,
                    "points": 28,
                    "goalsFor": 26,
                    "goalsAgainst": 34,
                    "goalDifference": -8
                },
                {
                    "position": 12,
                    "team": {
                        "id": 354,
                        "name": "Crystal Palace FC",
                        "shortName": "Crystal Palace",
                        "tla": "CRY",
                        "crest": "https://crests.football-data.org/354.png"
                    },
                    "playedGames": 22,
                    "form": "D,L,D,D,L",
                    "won": 6,
                    "draw": 7,
                    "lost": 9,
                    "points": 25,
                    "goalsFor": 20,
                    "goalsAgainst": 30,
                    "goalDifference": -10
                },
                {
                    "position": 13,
                    "team": {
                        "id": 338,
                        "name": "Leicester City FC",
                        "shortName": "Leicester City",
                        "tla": "LEI",
                        "crest": "https://crests.football-data.org/338.png"
                    },
                    "playedGames": 22,
                    "form": "W,W,D,L,L",
                    "won": 7,
                    "draw": 3,
                    "lost": 12,
                    "points": 24,
                    "goalsFor": 36,
                    "goalsAgainst": 38,
                    "goalDifference": -2
                },
                {
                    "position": 14,
                    "team": {
                        "id": 351,
                        "name": "Nottingham Forest FC",
                        "shortName": "Nottingham",
                        "tla": "NOT",
                        "crest": "https://crests.football-data.org/351.png"
                    },
                    "playedGames": 22,
                    "form": "L,W,D,W,W",
                    "won": 6,
                    "draw": 6,
                    "lost": 10,
                    "points": 24,
                    "goalsFor": 17,
                    "goalsAgainst": 37,
                    "goalDifference": -20
                },
                {
                    "position": 15,
                    "team": {
                        "id": 76,
                        "name": "Wolverhampton Wanderers FC",
                        "shortName": "Wolverhampton",
                        "tla": "WOL",
                        "crest": "https://crests.football-data.org/76.svg"
                    },
                    "playedGames": 22,
                    "form": "W,W,L,W,D",
                    "won": 6,
                    "draw": 5,
                    "lost": 11,
                    "points": 23,
                    "goalsFor": 17,
                    "goalsAgainst": 31,
                    "goalDifference": -14
                },
                {
                    "position": 16,
                    "team": {
                        "id": 563,
                        "name": "West Ham United FC",
                        "shortName": "West Ham",
                        "tla": "WHU",
                        "crest": "https://crests.football-data.org/563.png"
                    },
                    "playedGames": 22,
                    "form": "D,D,W,L,D",
                    "won": 5,
                    "draw": 5,
                    "lost": 12,
                    "points": 20,
                    "goalsFor": 19,
                    "goalsAgainst": 27,
                    "goalDifference": -8
                },
                {
                    "position": 17,
                    "team": {
                        "id": 341,
                        "name": "Leeds United FC",
                        "shortName": "Leeds United",
                        "tla": "LEE",
                        "crest": "https://crests.football-data.org/341.png"
                    },
                    "playedGames": 22,
                    "form": "L,D,L,D,L",
                    "won": 4,
                    "draw": 7,
                    "lost": 11,
                    "points": 19,
                    "goalsFor": 28,
                    "goalsAgainst": 38,
                    "goalDifference": -10
                },
                {
                    "position": 18,
                    "team": {
                        "id": 62,
                        "name": "Everton FC",
                        "shortName": "Everton",
                        "tla": "EVE",
                        "crest": "https://crests.football-data.org/62.png"
                    },
                    "playedGames": 22,
                    "form": "L,W,L,L,L",
                    "won": 4,
                    "draw": 6,
                    "lost": 12,
                    "points": 18,
                    "goalsFor": 16,
                    "goalsAgainst": 30,
                    "goalDifference": -14
                },
                {
                    "position": 19,
                    "team": {
                        "id": 1044,
                        "name": "AFC Bournemouth",
                        "shortName": "Bournemouth",
                        "tla": "BOU",
                        "crest": "https://crests.football-data.org/1044.png"
                    },
                    "playedGames": 22,
                    "form": "D,L,D,L,L",
                    "won": 4,
                    "draw": 6,
                    "lost": 12,
                    "points": 18,
                    "goalsFor": 20,
                    "goalsAgainst": 44,
                    "goalDifference": -24
                },
                {
                    "position": 20,
                    "team": {
                        "id": 340,
                        "name": "Southampton FC",
                        "shortName": "Southampton",
                        "tla": "SOU",
                        "crest": "https://crests.football-data.org/340.png"
                    },
                    "playedGames": 22,
                    "form": "L,L,L,W,L",
                    "won": 4,
                    "draw": 3,
                    "lost": 15,
                    "points": 15,
                    "goalsFor": 18,
                    "goalsAgainst": 40,
                    "goalDifference": -22
                }
            ]
        },
        {
            "stage": "REGULAR_SEASON",
            "type": "HOME",
            "group": null,
            "table": [
                {
                    "position": 1,
                    "team": {
                        "id": 65,
                        "name": "Manchester City FC",
                        "shortName": "Man City",
                        "tla": "MCI",
                        "crest": "https://crests.football-data.org/65.png"
                    },
                    "playedGames": 12,
                    "form": "",
                    "won": 10,
                    "draw": 1,
                    "lost": 1,
                    "points": 31,
                    "goalsFor": 41,
                    "goalsAgainst": 13,
                    "goalDifference": 28
                },
                {
                    "position": 2,
                    "team": {
                        "id": 57,
                        "name": "Arsenal FC",
                        "shortName": "Arsenal",
                        "tla": "ARS",
                        "crest": "https://crests.football-data.org/57.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 8,
                    "draw": 2,
                    "lost": 1,
                    "points": 26,
                    "goalsFor": 27,
                    "goalsAgainst": 14,
                    "goalDifference": 13
                },
                {
                    "position": 3,
                    "team": {
                        "id": 66,
                        "name": "Manchester United FC",
                        "shortName": "Man United",
                        "tla": "MUN",
                        "crest": "https://crests.football-data.org/66.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 8,
                    "draw": 2,
                    "lost": 1,
                    "points": 26,
                    "goalsFor": 21,
                    "goalsAgainst": 8,
                    "goalDifference": 13
                },
                {
                    "position": 4,
                    "team": {
                        "id": 64,
                        "name": "Liverpool FC",
                        "shortName": "Liverpool",
                        "tla": "LIV",
                        "crest": "https://crests.football-data.org/64.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 7,
                    "draw": 3,
                    "lost": 1,
                    "points": 24,
                    "goalsFor": 25,
                    "goalsAgainst": 9,
                    "goalDifference": 16
                },
                {
                    "position": 5,
                    "team": {
                        "id": 67,
                        "name": "Newcastle United FC",
                        "shortName": "Newcastle",
                        "tla": "NEW",
                        "crest": "https://crests.football-data.org/67.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 6,
                    "draw": 5,
                    "lost": 0,
                    "points": 23,
                    "goalsFor": 19,
                    "goalsAgainst": 6,
                    "goalDifference": 13
                },
                {
                    "position": 6,
                    "team": {
                        "id": 402,
                        "name": "Brentford FC",
                        "shortName": "Brentford",
                        "tla": "BRE",
                        "crest": "https://crests.football-data.org/402.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 6,
                    "draw": 4,
                    "lost": 1,
                    "points": 22,
                    "goalsFor": 23,
                    "goalsAgainst": 10,
                    "goalDifference": 13
                },
                {
                    "position": 7,
                    "team": {
                        "id": 73,
                        "name": "Tottenham Hotspur FC",
                        "shortName": "Tottenham",
                        "tla": "TOT",
                        "crest": "https://crests.football-data.org/73.svg"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 7,
                    "draw": 0,
                    "lost": 4,
                    "points": 21,
                    "goalsFor": 22,
                    "goalsAgainst": 15,
                    "goalDifference": 7
                },
                {
                    "position": 8,
                    "team": {
                        "id": 63,
                        "name": "Fulham FC",
                        "shortName": "Fulham",
                        "tla": "FUL",
                        "crest": "https://crests.football-data.org/63.svg"
                    },
                    "playedGames": 12,
                    "form": "",
                    "won": 6,
                    "draw": 3,
                    "lost": 3,
                    "points": 21,
                    "goalsFor": 20,
                    "goalsAgainst": 16,
                    "goalDifference": 4
                },
                {
                    "position": 9,
                    "team": {
                        "id": 61,
                        "name": "Chelsea FC",
                        "shortName": "Chelsea",
                        "tla": "CHE",
                        "crest": "https://crests.football-data.org/61.png"
                    },
                    "playedGames": 10,
                    "form": "",
                    "won": 5,
                    "draw": 3,
                    "lost": 2,
                    "points": 18,
                    "goalsFor": 13,
                    "goalsAgainst": 7,
                    "goalDifference": 6
                },
                {
                    "position": 10,
                    "team": {
                        "id": 351,
                        "name": "Nottingham Forest FC",
                        "shortName": "Nottingham",
                        "tla": "NOT",
                        "crest": "https://crests.football-data.org/351.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 5,
                    "draw": 3,
                    "lost": 3,
                    "points": 18,
                    "goalsFor": 14,
                    "goalsAgainst": 12,
                    "goalDifference": 2
                },
                {
                    "position": 11,
                    "team": {
                        "id": 397,
                        "name": "Brighton & Hove Albion FC",
                        "shortName": "Brighton Hove",
                        "tla": "BHA",
                        "crest": "https://crests.football-data.org/397.svg"
                    },
                    "playedGames": 10,
                    "form": "",
                    "won": 5,
                    "draw": 2,
                    "lost": 3,
                    "points": 17,
                    "goalsFor": 17,
                    "goalsAgainst": 10,
                    "goalDifference": 7
                },
                {
                    "position": 12,
                    "team": {
                        "id": 58,
                        "name": "Aston Villa FC",
                        "shortName": "Aston Villa",
                        "tla": "AVL",
                        "crest": "https://crests.football-data.org/58.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 5,
                    "draw": 2,
                    "lost": 4,
                    "points": 17,
                    "goalsFor": 17,
                    "goalsAgainst": 15,
                    "goalDifference": 2
                },
                {
                    "position": 13,
                    "team": {
                        "id": 354,
                        "name": "Crystal Palace FC",
                        "shortName": "Crystal Palace",
                        "tla": "CRY",
                        "crest": "https://crests.football-data.org/354.png"
                    },
                    "playedGames": 12,
                    "form": "",
                    "won": 4,
                    "draw": 4,
                    "lost": 4,
                    "points": 16,
                    "goalsFor": 12,
                    "goalsAgainst": 17,
                    "goalDifference": -5
                },
                {
                    "position": 14,
                    "team": {
                        "id": 563,
                        "name": "West Ham United FC",
                        "shortName": "West Ham",
                        "tla": "WHU",
                        "crest": "https://crests.football-data.org/563.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 4,
                    "draw": 2,
                    "lost": 5,
                    "points": 14,
                    "goalsFor": 12,
                    "goalsAgainst": 13,
                    "goalDifference": -1
                },
                {
                    "position": 15,
                    "team": {
                        "id": 76,
                        "name": "Wolverhampton Wanderers FC",
                        "shortName": "Wolverhampton",
                        "tla": "WOL",
                        "crest": "https://crests.football-data.org/76.svg"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 4,
                    "draw": 2,
                    "lost": 5,
                    "points": 14,
                    "goalsFor": 9,
                    "goalsAgainst": 14,
                    "goalDifference": -5
                },
                {
                    "position": 16,
                    "team": {
                        "id": 341,
                        "name": "Leeds United FC",
                        "shortName": "Leeds United",
                        "tla": "LEE",
                        "crest": "https://crests.football-data.org/341.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 3,
                    "draw": 4,
                    "lost": 4,
                    "points": 13,
                    "goalsFor": 15,
                    "goalsAgainst": 16,
                    "goalDifference": -1
                },
                {
                    "position": 17,
                    "team": {
                        "id": 1044,
                        "name": "AFC Bournemouth",
                        "shortName": "Bournemouth",
                        "tla": "BOU",
                        "crest": "https://crests.football-data.org/1044.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 3,
                    "draw": 4,
                    "lost": 4,
                    "points": 13,
                    "goalsFor": 11,
                    "goalsAgainst": 12,
                    "goalDifference": -1
                },
                {
                    "position": 18,
                    "team": {
                        "id": 338,
                        "name": "Leicester City FC",
                        "shortName": "Leicester City",
                        "tla": "LEI",
                        "crest": "https://crests.football-data.org/338.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 3,
                    "draw": 3,
                    "lost": 5,
                    "points": 12,
                    "goalsFor": 15,
                    "goalsAgainst": 13,
                    "goalDifference": 2
                },
                {
                    "position": 19,
                    "team": {
                        "id": 62,
                        "name": "Everton FC",
                        "shortName": "Everton",
                        "tla": "EVE",
                        "crest": "https://crests.football-data.org/62.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 3,
                    "draw": 2,
                    "lost": 6,
                    "points": 11,
                    "goalsFor": 10,
                    "goalsAgainst": 14,
                    "goalDifference": -4
                },
                {
                    "position": 20,
                    "team": {
                        "id": 340,
                        "name": "Southampton FC",
                        "shortName": "Southampton",
                        "tla": "SOU",
                        "crest": "https://crests.football-data.org/340.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 1,
                    "draw": 3,
                    "lost": 7,
                    "points": 6,
                    "goalsFor": 10,
                    "goalsAgainst": 19,
                    "goalDifference": -9
                }
            ]
        },
        {
            "stage": "REGULAR_SEASON",
            "type": "AWAY",
            "group": null,
            "table": [
                {
                    "position": 1,
                    "team": {
                        "id": 57,
                        "name": "Arsenal FC",
                        "shortName": "Arsenal",
                        "tla": "ARS",
                        "crest": "https://crests.football-data.org/57.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 8,
                    "draw": 1,
                    "lost": 2,
                    "points": 25,
                    "goalsFor": 20,
                    "goalsAgainst": 7,
                    "goalDifference": 13
                },
                {
                    "position": 2,
                    "team": {
                        "id": 65,
                        "name": "Manchester City FC",
                        "shortName": "Man City",
                        "tla": "MCI",
                        "crest": "https://crests.football-data.org/65.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 6,
                    "draw": 2,
                    "lost": 3,
                    "points": 20,
                    "goalsFor": 18,
                    "goalsAgainst": 10,
                    "goalDifference": 8
                },
                {
                    "position": 3,
                    "team": {
                        "id": 66,
                        "name": "Manchester United FC",
                        "shortName": "Man United",
                        "tla": "MUN",
                        "crest": "https://crests.football-data.org/66.png"
                    },
                    "playedGames": 12,
                    "form": "",
                    "won": 6,
                    "draw": 2,
                    "lost": 4,
                    "points": 20,
                    "goalsFor": 17,
                    "goalsAgainst": 20,
                    "goalDifference": -3
                },
                {
                    "position": 4,
                    "team": {
                        "id": 67,
                        "name": "Newcastle United FC",
                        "shortName": "Newcastle",
                        "tla": "NEW",
                        "crest": "https://crests.football-data.org/67.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 4,
                    "draw": 6,
                    "lost": 1,
                    "points": 18,
                    "goalsFor": 16,
                    "goalsAgainst": 7,
                    "goalDifference": 9
                },
                {
                    "position": 5,
                    "team": {
                        "id": 397,
                        "name": "Brighton & Hove Albion FC",
                        "shortName": "Brighton Hove",
                        "tla": "BHA",
                        "crest": "https://crests.football-data.org/397.svg"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 5,
                    "draw": 3,
                    "lost": 3,
                    "points": 18,
                    "goalsFor": 22,
                    "goalsAgainst": 18,
                    "goalDifference": 4
                },
                {
                    "position": 6,
                    "team": {
                        "id": 73,
                        "name": "Tottenham Hotspur FC",
                        "shortName": "Tottenham",
                        "tla": "TOT",
                        "crest": "https://crests.football-data.org/73.svg"
                    },
                    "playedGames": 12,
                    "form": "",
                    "won": 5,
                    "draw": 3,
                    "lost": 4,
                    "points": 18,
                    "goalsFor": 20,
                    "goalsAgainst": 20,
                    "goalDifference": 0
                },
                {
                    "position": 7,
                    "team": {
                        "id": 63,
                        "name": "Fulham FC",
                        "shortName": "Fulham",
                        "tla": "FUL",
                        "crest": "https://crests.football-data.org/63.svg"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 4,
                    "draw": 2,
                    "lost": 5,
                    "points": 14,
                    "goalsFor": 14,
                    "goalsAgainst": 14,
                    "goalDifference": 0
                },
                {
                    "position": 8,
                    "team": {
                        "id": 61,
                        "name": "Chelsea FC",
                        "shortName": "Chelsea",
                        "tla": "CHE",
                        "crest": "https://crests.football-data.org/61.png"
                    },
                    "playedGames": 12,
                    "form": "",
                    "won": 3,
                    "draw": 4,
                    "lost": 5,
                    "points": 13,
                    "goalsFor": 10,
                    "goalsAgainst": 15,
                    "goalDifference": -5
                },
                {
                    "position": 9,
                    "team": {
                        "id": 338,
                        "name": "Leicester City FC",
                        "shortName": "Leicester City",
                        "tla": "LEI",
                        "crest": "https://crests.football-data.org/338.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 4,
                    "draw": 0,
                    "lost": 7,
                    "points": 12,
                    "goalsFor": 21,
                    "goalsAgainst": 25,
                    "goalDifference": -4
                },
                {
                    "position": 10,
                    "team": {
                        "id": 402,
                        "name": "Brentford FC",
                        "shortName": "Brentford",
                        "tla": "BRE",
                        "crest": "https://crests.football-data.org/402.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 2,
                    "draw": 6,
                    "lost": 3,
                    "points": 12,
                    "goalsFor": 13,
                    "goalsAgainst": 19,
                    "goalDifference": -6
                },
                {
                    "position": 11,
                    "team": {
                        "id": 58,
                        "name": "Aston Villa FC",
                        "shortName": "Aston Villa",
                        "tla": "AVL",
                        "crest": "https://crests.football-data.org/58.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 3,
                    "draw": 2,
                    "lost": 6,
                    "points": 11,
                    "goalsFor": 9,
                    "goalsAgainst": 19,
                    "goalDifference": -10
                },
                {
                    "position": 12,
                    "team": {
                        "id": 354,
                        "name": "Crystal Palace FC",
                        "shortName": "Crystal Palace",
                        "tla": "CRY",
                        "crest": "https://crests.football-data.org/354.png"
                    },
                    "playedGames": 10,
                    "form": "",
                    "won": 2,
                    "draw": 3,
                    "lost": 5,
                    "points": 9,
                    "goalsFor": 8,
                    "goalsAgainst": 13,
                    "goalDifference": -5
                },
                {
                    "position": 13,
                    "team": {
                        "id": 76,
                        "name": "Wolverhampton Wanderers FC",
                        "shortName": "Wolverhampton",
                        "tla": "WOL",
                        "crest": "https://crests.football-data.org/76.svg"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 2,
                    "draw": 3,
                    "lost": 6,
                    "points": 9,
                    "goalsFor": 8,
                    "goalsAgainst": 17,
                    "goalDifference": -9
                },
                {
                    "position": 14,
                    "team": {
                        "id": 340,
                        "name": "Southampton FC",
                        "shortName": "Southampton",
                        "tla": "SOU",
                        "crest": "https://crests.football-data.org/340.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 3,
                    "draw": 0,
                    "lost": 8,
                    "points": 9,
                    "goalsFor": 8,
                    "goalsAgainst": 21,
                    "goalDifference": -13
                },
                {
                    "position": 15,
                    "team": {
                        "id": 64,
                        "name": "Liverpool FC",
                        "shortName": "Liverpool",
                        "tla": "LIV",
                        "crest": "https://crests.football-data.org/64.png"
                    },
                    "playedGames": 10,
                    "form": "",
                    "won": 2,
                    "draw": 2,
                    "lost": 6,
                    "points": 8,
                    "goalsFor": 11,
                    "goalsAgainst": 19,
                    "goalDifference": -8
                },
                {
                    "position": 16,
                    "team": {
                        "id": 62,
                        "name": "Everton FC",
                        "shortName": "Everton",
                        "tla": "EVE",
                        "crest": "https://crests.football-data.org/62.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 1,
                    "draw": 4,
                    "lost": 6,
                    "points": 7,
                    "goalsFor": 6,
                    "goalsAgainst": 16,
                    "goalDifference": -10
                },
                {
                    "position": 17,
                    "team": {
                        "id": 563,
                        "name": "West Ham United FC",
                        "shortName": "West Ham",
                        "tla": "WHU",
                        "crest": "https://crests.football-data.org/563.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 1,
                    "draw": 3,
                    "lost": 7,
                    "points": 6,
                    "goalsFor": 7,
                    "goalsAgainst": 14,
                    "goalDifference": -7
                },
                {
                    "position": 18,
                    "team": {
                        "id": 341,
                        "name": "Leeds United FC",
                        "shortName": "Leeds United",
                        "tla": "LEE",
                        "crest": "https://crests.football-data.org/341.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 1,
                    "draw": 3,
                    "lost": 7,
                    "points": 6,
                    "goalsFor": 13,
                    "goalsAgainst": 22,
                    "goalDifference": -9
                },
                {
                    "position": 19,
                    "team": {
                        "id": 351,
                        "name": "Nottingham Forest FC",
                        "shortName": "Nottingham",
                        "tla": "NOT",
                        "crest": "https://crests.football-data.org/351.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 1,
                    "draw": 3,
                    "lost": 7,
                    "points": 6,
                    "goalsFor": 3,
                    "goalsAgainst": 25,
                    "goalDifference": -22
                },
                {
                    "position": 20,
                    "team": {
                        "id": 1044,
                        "name": "AFC Bournemouth",
                        "shortName": "Bournemouth",
                        "tla": "BOU",
                        "crest": "https://crests.football-data.org/1044.png"
                    },
                    "playedGames": 11,
                    "form": "",
                    "won": 1,
                    "draw": 2,
                    "lost": 8,
                    "points": 5,
                    "goalsFor": 9,
                    "goalsAgainst": 32,
                    "goalDifference": -23
                }
            ]
        }
    ]
},

data_elc_matches : {
    "filters": {
        "season": "2022",
        "matchday": "33"
    },
    "resultSet": {
        "count": 12,
        "first": "2023-02-17",
        "last": "2023-02-20",
        "played": 0
    },
    "competition": {
        "id": 2016,
        "name": "Championship",
        "code": "ELC",
        "type": "LEAGUE",
        "emblem": "https://crests.football-data.org/ELC.png"
    },
    "matches": [
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422279,
            "utcDate": "2023-02-17T20:00:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-17T20:21:08Z",
            "homeTeam": {
                "id": 715,
                "name": "Cardiff City FC",
                "shortName": "Cardiff",
                "tla": "CAR",
                "crest": "https://crests.football-data.org/715.png"
            },
            "awayTeam": {
                "id": 355,
                "name": "Reading FC",
                "shortName": "Reading",
                "tla": "REA",
                "crest": "https://crests.football-data.org/355.png"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422284,
            "utcDate": "2023-02-18T12:30:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-15T01:32:00Z",
            "homeTeam": {
                "id": 384,
                "name": "Millwall FC",
                "shortName": "Millwall",
                "tla": "MIL",
                "crest": "https://crests.football-data.org/384.png"
            },
            "awayTeam": {
                "id": 356,
                "name": "Sheffield United FC",
                "shortName": "Sheffield Utd",
                "tla": "SHE",
                "crest": "https://crests.football-data.org/356.svg"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422278,
            "utcDate": "2023-02-18T15:00:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-16T01:32:00Z",
            "homeTeam": {
                "id": 59,
                "name": "Blackburn Rovers FC",
                "shortName": "Blackburn",
                "tla": "BLA",
                "crest": "https://crests.football-data.org/59.png"
            },
            "awayTeam": {
                "id": 72,
                "name": "Swansea City AFC",
                "shortName": "Swansea",
                "tla": "SWA",
                "crest": "https://crests.football-data.org/72.png"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422280,
            "utcDate": "2023-02-18T15:00:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-16T01:32:00Z",
            "homeTeam": {
                "id": 75,
                "name": "Wigan Athletic FC",
                "shortName": "Wigan Athletic",
                "tla": "WIG",
                "crest": "https://crests.football-data.org/75.png"
            },
            "awayTeam": {
                "id": 68,
                "name": "Norwich City FC",
                "shortName": "Norwich",
                "tla": "NOR",
                "crest": "https://crests.football-data.org/68.png"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422282,
            "utcDate": "2023-02-18T15:00:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-16T01:32:00Z",
            "homeTeam": {
                "id": 71,
                "name": "Sunderland AFC",
                "shortName": "Sunderland",
                "tla": "SUN",
                "crest": "https://crests.football-data.org/71.png"
            },
            "awayTeam": {
                "id": 387,
                "name": "Bristol City FC",
                "shortName": "Bristol City",
                "tla": "BRI",
                "crest": "https://crests.football-data.org/387.svg"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422283,
            "utcDate": "2023-02-18T15:00:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-15T01:32:00Z",
            "homeTeam": {
                "id": 385,
                "name": "Rotherham United FC",
                "shortName": "Rotherham Utd",
                "tla": "ROT",
                "crest": "https://crests.football-data.org/385.png"
            },
            "awayTeam": {
                "id": 1076,
                "name": "Coventry City FC",
                "shortName": "Coventry City",
                "tla": "COV",
                "crest": "https://crests.football-data.org/1076.png"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422285,
            "utcDate": "2023-02-18T15:00:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-15T01:32:00Z",
            "homeTeam": {
                "id": 343,
                "name": "Middlesbrough FC",
                "shortName": "Middlesbrough",
                "tla": "MID",
                "crest": "https://crests.football-data.org/343.png"
            },
            "awayTeam": {
                "id": 69,
                "name": "Queens Park Rangers FC",
                "shortName": "QPR",
                "tla": "QPR",
                "crest": "https://crests.football-data.org/69.png"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422286,
            "utcDate": "2023-02-18T15:00:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-12T01:32:02Z",
            "homeTeam": {
                "id": 389,
                "name": "Luton Town FC",
                "shortName": "Luton Town",
                "tla": "LUT",
                "crest": "https://crests.football-data.org/389.png"
            },
            "awayTeam": {
                "id": 328,
                "name": "Burnley FC",
                "shortName": "Burnley",
                "tla": "BUR",
                "crest": "https://crests.football-data.org/328.png"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422287,
            "utcDate": "2023-02-18T15:00:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-16T01:32:00Z",
            "homeTeam": {
                "id": 322,
                "name": "Hull City AFC",
                "shortName": "Hull City",
                "tla": "HUL",
                "crest": "https://crests.football-data.org/322.png"
            },
            "awayTeam": {
                "id": 1081,
                "name": "Preston North End FC",
                "shortName": "Preston NE",
                "tla": "PNE",
                "crest": "https://crests.football-data.org/1081.png"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422288,
            "utcDate": "2023-02-18T15:00:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-15T01:32:00Z",
            "homeTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC",
                "shortName": "Huddersfield",
                "tla": "HUD",
                "crest": "https://crests.football-data.org/394.png"
            },
            "awayTeam": {
                "id": 332,
                "name": "Birmingham City FC",
                "shortName": "Birmingham",
                "tla": "BIR",
                "crest": "https://crests.football-data.org/332.png"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422289,
            "utcDate": "2023-02-18T15:00:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-12T01:32:02Z",
            "homeTeam": {
                "id": 336,
                "name": "Blackpool FC",
                "shortName": "Blackpool",
                "tla": "BLA",
                "crest": "https://crests.football-data.org/336.png"
            },
            "awayTeam": {
                "id": 70,
                "name": "Stoke City FC",
                "shortName": "Stoke",
                "tla": "STK",
                "crest": "https://crests.football-data.org/70.png"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2016,
                "name": "Championship",
                "code": "ELC",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/ELC.png"
            },
            "season": {
                "id": 1502,
                "startDate": "2022-07-29",
                "endDate": "2023-05-06",
                "currentMatchday": 33,
                "winner": null
            },
            "id": 422281,
            "utcDate": "2023-02-20T20:00:00Z",
            "status": "TIMED",
            "matchday": 33,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2023-02-15T01:32:01Z",
            "homeTeam": {
                "id": 346,
                "name": "Watford FC",
                "shortName": "Watford",
                "tla": "WAT",
                "crest": "https://crests.football-data.org/346.png"
            },
            "awayTeam": {
                "id": 74,
                "name": "West Bromwich Albion FC",
                "shortName": "West Brom",
                "tla": "WBA",
                "crest": "https://crests.football-data.org/74.png"
            },
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "home": null,
                    "away": null
                },
                "halfTime": {
                    "home": null,
                    "away": null
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": []
        }
    ]
},

data_elc_standing : {
    "filters": {
        "season": "2022"
    },
    "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
    },
    "competition": {
        "id": 2016,
        "name": "Championship",
        "code": "ELC",
        "type": "LEAGUE",
        "emblem": "https://crests.football-data.org/ELC.png"
    },
    "season": {
        "id": 1502,
        "startDate": "2022-07-29",
        "endDate": "2023-05-06",
        "currentMatchday": 33,
        "winner": null
    },
    "standings": [
        {
            "stage": "REGULAR_SEASON",
            "type": "TOTAL",
            "group": null,
            "table": [
                {
                    "position": 1,
                    "team": {
                        "id": 328,
                        "name": "Burnley FC",
                        "shortName": "Burnley",
                        "tla": "BUR",
                        "crest": "https://crests.football-data.org/328.png"
                    },
                    "playedGames": 31,
                    "form": "D,W,W,W,W",
                    "won": 20,
                    "draw": 9,
                    "lost": 2,
                    "points": 69,
                    "goalsFor": 62,
                    "goalsAgainst": 27,
                    "goalDifference": 35
                },
                {
                    "position": 2,
                    "team": {
                        "id": 356,
                        "name": "Sheffield United FC",
                        "shortName": "Sheffield Utd",
                        "tla": "SHE",
                        "crest": "https://crests.football-data.org/356.svg"
                    },
                    "playedGames": 31,
                    "form": "L,W,D,W,W",
                    "won": 18,
                    "draw": 7,
                    "lost": 6,
                    "points": 61,
                    "goalsFor": 52,
                    "goalsAgainst": 27,
                    "goalDifference": 25
                },
                {
                    "position": 3,
                    "team": {
                        "id": 343,
                        "name": "Middlesbrough FC",
                        "shortName": "Middlesbrough",
                        "tla": "MID",
                        "crest": "https://crests.football-data.org/343.png"
                    },
                    "playedGames": 32,
                    "form": "W,W,W,W,L",
                    "won": 16,
                    "draw": 6,
                    "lost": 10,
                    "points": 54,
                    "goalsFor": 53,
                    "goalsAgainst": 37,
                    "goalDifference": 16
                },
                {
                    "position": 4,
                    "team": {
                        "id": 389,
                        "name": "Luton Town FC",
                        "shortName": "Luton Town",
                        "tla": "LUT",
                        "crest": "https://crests.football-data.org/389.png"
                    },
                    "playedGames": 31,
                    "form": "D,D,W,W,W",
                    "won": 13,
                    "draw": 11,
                    "lost": 7,
                    "points": 50,
                    "goalsFor": 39,
                    "goalsAgainst": 31,
                    "goalDifference": 8
                },
                {
                    "position": 5,
                    "team": {
                        "id": 71,
                        "name": "Sunderland AFC",
                        "shortName": "Sunderland",
                        "tla": "SUN",
                        "crest": "https://crests.football-data.org/71.png"
                    },
                    "playedGames": 31,
                    "form": "W,W,D,W,L",
                    "won": 13,
                    "draw": 9,
                    "lost": 9,
                    "points": 48,
                    "goalsFor": 46,
                    "goalsAgainst": 33,
                    "goalDifference": 13
                },
                {
                    "position": 6,
                    "team": {
                        "id": 346,
                        "name": "Watford FC",
                        "shortName": "Watford",
                        "tla": "WAT",
                        "crest": "https://crests.football-data.org/346.png"
                    },
                    "playedGames": 32,
                    "form": "D,D,D,L,D",
                    "won": 12,
                    "draw": 11,
                    "lost": 9,
                    "points": 47,
                    "goalsFor": 38,
                    "goalsAgainst": 35,
                    "goalDifference": 3
                },
                {
                    "position": 7,
                    "team": {
                        "id": 384,
                        "name": "Millwall FC",
                        "shortName": "Millwall",
                        "tla": "MIL",
                        "crest": "https://crests.football-data.org/384.png"
                    },
                    "playedGames": 30,
                    "form": "L,W,D,W,L",
                    "won": 13,
                    "draw": 7,
                    "lost": 10,
                    "points": 46,
                    "goalsFor": 36,
                    "goalsAgainst": 30,
                    "goalDifference": 6
                },
                {
                    "position": 8,
                    "team": {
                        "id": 59,
                        "name": "Blackburn Rovers FC",
                        "shortName": "Blackburn",
                        "tla": "BLA",
                        "crest": "https://crests.football-data.org/59.png"
                    },
                    "playedGames": 31,
                    "form": "D,D,D,D,L",
                    "won": 14,
                    "draw": 4,
                    "lost": 13,
                    "points": 46,
                    "goalsFor": 33,
                    "goalsAgainst": 37,
                    "goalDifference": -4
                },
                {
                    "position": 9,
                    "team": {
                        "id": 68,
                        "name": "Norwich City FC",
                        "shortName": "Norwich",
                        "tla": "NOR",
                        "crest": "https://crests.football-data.org/68.png"
                    },
                    "playedGames": 31,
                    "form": "W,L,L,W,W",
                    "won": 13,
                    "draw": 6,
                    "lost": 12,
                    "points": 45,
                    "goalsFor": 43,
                    "goalsAgainst": 36,
                    "goalDifference": 7
                },
                {
                    "position": 10,
                    "team": {
                        "id": 74,
                        "name": "West Bromwich Albion FC",
                        "shortName": "West Brom",
                        "tla": "WBA",
                        "crest": "https://crests.football-data.org/74.png"
                    },
                    "playedGames": 31,
                    "form": "D,L,W,L,W",
                    "won": 12,
                    "draw": 9,
                    "lost": 10,
                    "points": 45,
                    "goalsFor": 40,
                    "goalsAgainst": 33,
                    "goalDifference": 7
                },
                {
                    "position": 11,
                    "team": {
                        "id": 1076,
                        "name": "Coventry City FC",
                        "shortName": "Coventry City",
                        "tla": "COV",
                        "crest": "https://crests.football-data.org/1076.png"
                    },
                    "playedGames": 31,
                    "form": "W,D,L,W,L",
                    "won": 11,
                    "draw": 9,
                    "lost": 11,
                    "points": 42,
                    "goalsFor": 33,
                    "goalsAgainst": 33,
                    "goalDifference": 0
                },
                {
                    "position": 12,
                    "team": {
                        "id": 72,
                        "name": "Swansea City AFC",
                        "shortName": "Swansea",
                        "tla": "SWA",
                        "crest": "https://crests.football-data.org/72.png"
                    },
                    "playedGames": 31,
                    "form": "W,L,L,D,W",
                    "won": 11,
                    "draw": 9,
                    "lost": 11,
                    "points": 42,
                    "goalsFor": 45,
                    "goalsAgainst": 46,
                    "goalDifference": -1
                },
                {
                    "position": 13,
                    "team": {
                        "id": 322,
                        "name": "Hull City AFC",
                        "shortName": "Hull City",
                        "tla": "HUL",
                        "crest": "https://crests.football-data.org/322.png"
                    },
                    "playedGames": 32,
                    "form": "L,D,W,W,L",
                    "won": 11,
                    "draw": 8,
                    "lost": 13,
                    "points": 41,
                    "goalsFor": 38,
                    "goalsAgainst": 47,
                    "goalDifference": -9
                },
                {
                    "position": 14,
                    "team": {
                        "id": 1081,
                        "name": "Preston North End FC",
                        "shortName": "Preston NE",
                        "tla": "PNE",
                        "crest": "https://crests.football-data.org/1081.png"
                    },
                    "playedGames": 31,
                    "form": "D,L,L,W,L",
                    "won": 11,
                    "draw": 8,
                    "lost": 12,
                    "points": 41,
                    "goalsFor": 28,
                    "goalsAgainst": 37,
                    "goalDifference": -9
                },
                {
                    "position": 15,
                    "team": {
                        "id": 355,
                        "name": "Reading FC",
                        "shortName": "Reading",
                        "tla": "REA",
                        "crest": "https://crests.football-data.org/355.png"
                    },
                    "playedGames": 32,
                    "form": "L,W,L,D,L",
                    "won": 12,
                    "draw": 5,
                    "lost": 15,
                    "points": 41,
                    "goalsFor": 35,
                    "goalsAgainst": 47,
                    "goalDifference": -12
                },
                {
                    "position": 16,
                    "team": {
                        "id": 387,
                        "name": "Bristol City FC",
                        "shortName": "Bristol City",
                        "tla": "BRI",
                        "crest": "https://crests.football-data.org/387.svg"
                    },
                    "playedGames": 31,
                    "form": "D,W,W,D,W",
                    "won": 10,
                    "draw": 10,
                    "lost": 11,
                    "points": 40,
                    "goalsFor": 41,
                    "goalsAgainst": 40,
                    "goalDifference": 1
                },
                {
                    "position": 17,
                    "team": {
                        "id": 69,
                        "name": "Queens Park Rangers FC",
                        "shortName": "QPR",
                        "tla": "QPR",
                        "crest": "https://crests.football-data.org/69.png"
                    },
                    "playedGames": 32,
                    "form": "L,L,D,L,D",
                    "won": 10,
                    "draw": 9,
                    "lost": 13,
                    "points": 39,
                    "goalsFor": 33,
                    "goalsAgainst": 43,
                    "goalDifference": -10
                },
                {
                    "position": 18,
                    "team": {
                        "id": 332,
                        "name": "Birmingham City FC",
                        "shortName": "Birmingham",
                        "tla": "BIR",
                        "crest": "https://crests.football-data.org/332.png"
                    },
                    "playedGames": 31,
                    "form": "L,W,W,L,L",
                    "won": 10,
                    "draw": 8,
                    "lost": 13,
                    "points": 38,
                    "goalsFor": 36,
                    "goalsAgainst": 40,
                    "goalDifference": -4
                },
                {
                    "position": 19,
                    "team": {
                        "id": 70,
                        "name": "Stoke City FC",
                        "shortName": "Stoke",
                        "tla": "STK",
                        "crest": "https://crests.football-data.org/70.png"
                    },
                    "playedGames": 31,
                    "form": "W,D,L,W,L",
                    "won": 10,
                    "draw": 7,
                    "lost": 14,
                    "points": 37,
                    "goalsFor": 36,
                    "goalsAgainst": 38,
                    "goalDifference": -2
                },
                {
                    "position": 20,
                    "team": {
                        "id": 715,
                        "name": "Cardiff City FC",
                        "shortName": "Cardiff",
                        "tla": "CAR",
                        "crest": "https://crests.football-data.org/715.png"
                    },
                    "playedGames": 33,
                    "form": "W,W,L,L,L",
                    "won": 9,
                    "draw": 8,
                    "lost": 16,
                    "points": 35,
                    "goalsFor": 25,
                    "goalsAgainst": 36,
                    "goalDifference": -11
                },
                {
                    "position": 21,
                    "team": {
                        "id": 385,
                        "name": "Rotherham United FC",
                        "shortName": "Rotherham Utd",
                        "tla": "ROT",
                        "crest": "https://crests.football-data.org/385.png"
                    },
                    "playedGames": 31,
                    "form": "L,D,D,D,W",
                    "won": 7,
                    "draw": 12,
                    "lost": 12,
                    "points": 33,
                    "goalsFor": 34,
                    "goalsAgainst": 42,
                    "goalDifference": -8
                },
                {
                    "position": 22,
                    "team": {
                        "id": 75,
                        "name": "Wigan Athletic FC",
                        "shortName": "Wigan Athletic",
                        "tla": "WIG",
                        "crest": "https://crests.football-data.org/75.png"
                    },
                    "playedGames": 31,
                    "form": "D,W,D,L,D",
                    "won": 7,
                    "draw": 9,
                    "lost": 15,
                    "points": 30,
                    "goalsFor": 29,
                    "goalsAgainst": 50,
                    "goalDifference": -21
                },
                {
                    "position": 23,
                    "team": {
                        "id": 394,
                        "name": "Huddersfield Town AFC",
                        "shortName": "Huddersfield",
                        "tla": "HUD",
                        "crest": "https://crests.football-data.org/394.png"
                    },
                    "playedGames": 31,
                    "form": "L,L,D,D,L",
                    "won": 7,
                    "draw": 7,
                    "lost": 17,
                    "points": 28,
                    "goalsFor": 28,
                    "goalsAgainst": 42,
                    "goalDifference": -14
                },
                {
                    "position": 24,
                    "team": {
                        "id": 336,
                        "name": "Blackpool FC",
                        "shortName": "Blackpool",
                        "tla": "BLA",
                        "crest": "https://crests.football-data.org/336.png"
                    },
                    "playedGames": 31,
                    "form": "L,D,D,L,L",
                    "won": 6,
                    "draw": 10,
                    "lost": 15,
                    "points": 28,
                    "goalsFor": 31,
                    "goalsAgainst": 47,
                    "goalDifference": -16
                }
            ]
        },
        {
            "stage": "REGULAR_SEASON",
            "type": "HOME",
            "group": null,
            "table": [
                {
                    "position": 1,
                    "team": {
                        "id": 328,
                        "name": "Burnley FC",
                        "shortName": "Burnley",
                        "tla": "BUR",
                        "crest": "https://crests.football-data.org/328.png"
                    },
                    "playedGames": 17,
                    "form": "",
                    "won": 12,
                    "draw": 5,
                    "lost": 0,
                    "points": 41,
                    "goalsFor": 36,
                    "goalsAgainst": 13,
                    "goalDifference": 23
                },
                {
                    "position": 2,
                    "team": {
                        "id": 356,
                        "name": "Sheffield United FC",
                        "shortName": "Sheffield Utd",
                        "tla": "SHE",
                        "crest": "https://crests.football-data.org/356.svg"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 10,
                    "draw": 3,
                    "lost": 3,
                    "points": 33,
                    "goalsFor": 34,
                    "goalsAgainst": 16,
                    "goalDifference": 18
                },
                {
                    "position": 3,
                    "team": {
                        "id": 355,
                        "name": "Reading FC",
                        "shortName": "Reading",
                        "tla": "REA",
                        "crest": "https://crests.football-data.org/355.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 9,
                    "draw": 3,
                    "lost": 3,
                    "points": 30,
                    "goalsFor": 24,
                    "goalsAgainst": 17,
                    "goalDifference": 7
                },
                {
                    "position": 4,
                    "team": {
                        "id": 343,
                        "name": "Middlesbrough FC",
                        "shortName": "Middlesbrough",
                        "tla": "MID",
                        "crest": "https://crests.football-data.org/343.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 8,
                    "draw": 5,
                    "lost": 2,
                    "points": 29,
                    "goalsFor": 23,
                    "goalsAgainst": 12,
                    "goalDifference": 11
                },
                {
                    "position": 5,
                    "team": {
                        "id": 1076,
                        "name": "Coventry City FC",
                        "shortName": "Coventry City",
                        "tla": "COV",
                        "crest": "https://crests.football-data.org/1076.png"
                    },
                    "playedGames": 17,
                    "form": "",
                    "won": 8,
                    "draw": 5,
                    "lost": 4,
                    "points": 29,
                    "goalsFor": 21,
                    "goalsAgainst": 15,
                    "goalDifference": 6
                },
                {
                    "position": 6,
                    "team": {
                        "id": 384,
                        "name": "Millwall FC",
                        "shortName": "Millwall",
                        "tla": "MIL",
                        "crest": "https://crests.football-data.org/384.png"
                    },
                    "playedGames": 14,
                    "form": "",
                    "won": 8,
                    "draw": 4,
                    "lost": 2,
                    "points": 28,
                    "goalsFor": 21,
                    "goalsAgainst": 9,
                    "goalDifference": 12
                },
                {
                    "position": 7,
                    "team": {
                        "id": 59,
                        "name": "Blackburn Rovers FC",
                        "shortName": "Blackburn",
                        "tla": "BLA",
                        "crest": "https://crests.football-data.org/59.png"
                    },
                    "playedGames": 14,
                    "form": "",
                    "won": 9,
                    "draw": 1,
                    "lost": 4,
                    "points": 28,
                    "goalsFor": 20,
                    "goalsAgainst": 13,
                    "goalDifference": 7
                },
                {
                    "position": 8,
                    "team": {
                        "id": 74,
                        "name": "West Bromwich Albion FC",
                        "shortName": "West Brom",
                        "tla": "WBA",
                        "crest": "https://crests.football-data.org/74.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 7,
                    "draw": 5,
                    "lost": 4,
                    "points": 26,
                    "goalsFor": 22,
                    "goalsAgainst": 15,
                    "goalDifference": 7
                },
                {
                    "position": 9,
                    "team": {
                        "id": 346,
                        "name": "Watford FC",
                        "shortName": "Watford",
                        "tla": "WAT",
                        "crest": "https://crests.football-data.org/346.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 7,
                    "draw": 4,
                    "lost": 4,
                    "points": 25,
                    "goalsFor": 21,
                    "goalsAgainst": 14,
                    "goalDifference": 7
                },
                {
                    "position": 10,
                    "team": {
                        "id": 72,
                        "name": "Swansea City AFC",
                        "shortName": "Swansea",
                        "tla": "SWA",
                        "crest": "https://crests.football-data.org/72.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 7,
                    "draw": 2,
                    "lost": 6,
                    "points": 23,
                    "goalsFor": 25,
                    "goalsAgainst": 21,
                    "goalDifference": 4
                },
                {
                    "position": 11,
                    "team": {
                        "id": 387,
                        "name": "Bristol City FC",
                        "shortName": "Bristol City",
                        "tla": "BRI",
                        "crest": "https://crests.football-data.org/387.svg"
                    },
                    "playedGames": 17,
                    "form": "",
                    "won": 6,
                    "draw": 5,
                    "lost": 6,
                    "points": 23,
                    "goalsFor": 21,
                    "goalsAgainst": 18,
                    "goalDifference": 3
                },
                {
                    "position": 12,
                    "team": {
                        "id": 389,
                        "name": "Luton Town FC",
                        "shortName": "Luton Town",
                        "tla": "LUT",
                        "crest": "https://crests.football-data.org/389.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 5,
                    "draw": 7,
                    "lost": 3,
                    "points": 22,
                    "goalsFor": 20,
                    "goalsAgainst": 16,
                    "goalDifference": 4
                },
                {
                    "position": 13,
                    "team": {
                        "id": 71,
                        "name": "Sunderland AFC",
                        "shortName": "Sunderland",
                        "tla": "SUN",
                        "crest": "https://crests.football-data.org/71.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 6,
                    "draw": 4,
                    "lost": 5,
                    "points": 22,
                    "goalsFor": 20,
                    "goalsAgainst": 16,
                    "goalDifference": 4
                },
                {
                    "position": 14,
                    "team": {
                        "id": 68,
                        "name": "Norwich City FC",
                        "shortName": "Norwich",
                        "tla": "NOR",
                        "crest": "https://crests.football-data.org/68.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 6,
                    "draw": 4,
                    "lost": 6,
                    "points": 22,
                    "goalsFor": 22,
                    "goalsAgainst": 20,
                    "goalDifference": 2
                },
                {
                    "position": 15,
                    "team": {
                        "id": 322,
                        "name": "Hull City AFC",
                        "shortName": "Hull City",
                        "tla": "HUL",
                        "crest": "https://crests.football-data.org/322.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 6,
                    "draw": 3,
                    "lost": 7,
                    "points": 21,
                    "goalsFor": 18,
                    "goalsAgainst": 23,
                    "goalDifference": -5
                },
                {
                    "position": 16,
                    "team": {
                        "id": 385,
                        "name": "Rotherham United FC",
                        "shortName": "Rotherham Utd",
                        "tla": "ROT",
                        "crest": "https://crests.football-data.org/385.png"
                    },
                    "playedGames": 14,
                    "form": "",
                    "won": 5,
                    "draw": 5,
                    "lost": 4,
                    "points": 20,
                    "goalsFor": 24,
                    "goalsAgainst": 17,
                    "goalDifference": 7
                },
                {
                    "position": 17,
                    "team": {
                        "id": 332,
                        "name": "Birmingham City FC",
                        "shortName": "Birmingham",
                        "tla": "BIR",
                        "crest": "https://crests.football-data.org/332.png"
                    },
                    "playedGames": 17,
                    "form": "",
                    "won": 5,
                    "draw": 5,
                    "lost": 7,
                    "points": 20,
                    "goalsFor": 20,
                    "goalsAgainst": 20,
                    "goalDifference": 0
                },
                {
                    "position": 18,
                    "team": {
                        "id": 715,
                        "name": "Cardiff City FC",
                        "shortName": "Cardiff",
                        "tla": "CAR",
                        "crest": "https://crests.football-data.org/715.png"
                    },
                    "playedGames": 17,
                    "form": "",
                    "won": 5,
                    "draw": 5,
                    "lost": 7,
                    "points": 20,
                    "goalsFor": 13,
                    "goalsAgainst": 16,
                    "goalDifference": -3
                },
                {
                    "position": 19,
                    "team": {
                        "id": 70,
                        "name": "Stoke City FC",
                        "shortName": "Stoke",
                        "tla": "STK",
                        "crest": "https://crests.football-data.org/70.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 5,
                    "draw": 4,
                    "lost": 7,
                    "points": 19,
                    "goalsFor": 20,
                    "goalsAgainst": 18,
                    "goalDifference": 2
                },
                {
                    "position": 20,
                    "team": {
                        "id": 69,
                        "name": "Queens Park Rangers FC",
                        "shortName": "QPR",
                        "tla": "QPR",
                        "crest": "https://crests.football-data.org/69.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 5,
                    "draw": 4,
                    "lost": 7,
                    "points": 19,
                    "goalsFor": 18,
                    "goalsAgainst": 23,
                    "goalDifference": -5
                },
                {
                    "position": 21,
                    "team": {
                        "id": 394,
                        "name": "Huddersfield Town AFC",
                        "shortName": "Huddersfield",
                        "tla": "HUD",
                        "crest": "https://crests.football-data.org/394.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 5,
                    "draw": 3,
                    "lost": 7,
                    "points": 18,
                    "goalsFor": 14,
                    "goalsAgainst": 15,
                    "goalDifference": -1
                },
                {
                    "position": 22,
                    "team": {
                        "id": 336,
                        "name": "Blackpool FC",
                        "shortName": "Blackpool",
                        "tla": "BLA",
                        "crest": "https://crests.football-data.org/336.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 3,
                    "draw": 5,
                    "lost": 7,
                    "points": 14,
                    "goalsFor": 16,
                    "goalsAgainst": 21,
                    "goalDifference": -5
                },
                {
                    "position": 23,
                    "team": {
                        "id": 1081,
                        "name": "Preston North End FC",
                        "shortName": "Preston NE",
                        "tla": "PNE",
                        "crest": "https://crests.football-data.org/1081.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 3,
                    "draw": 5,
                    "lost": 8,
                    "points": 14,
                    "goalsFor": 10,
                    "goalsAgainst": 21,
                    "goalDifference": -11
                },
                {
                    "position": 24,
                    "team": {
                        "id": 75,
                        "name": "Wigan Athletic FC",
                        "shortName": "Wigan Athletic",
                        "tla": "WIG",
                        "crest": "https://crests.football-data.org/75.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 3,
                    "draw": 3,
                    "lost": 10,
                    "points": 12,
                    "goalsFor": 12,
                    "goalsAgainst": 30,
                    "goalDifference": -18
                }
            ]
        },
        {
            "stage": "REGULAR_SEASON",
            "type": "AWAY",
            "group": null,
            "table": [
                {
                    "position": 1,
                    "team": {
                        "id": 328,
                        "name": "Burnley FC",
                        "shortName": "Burnley",
                        "tla": "BUR",
                        "crest": "https://crests.football-data.org/328.png"
                    },
                    "playedGames": 14,
                    "form": "",
                    "won": 8,
                    "draw": 4,
                    "lost": 2,
                    "points": 28,
                    "goalsFor": 26,
                    "goalsAgainst": 14,
                    "goalDifference": 12
                },
                {
                    "position": 2,
                    "team": {
                        "id": 356,
                        "name": "Sheffield United FC",
                        "shortName": "Sheffield Utd",
                        "tla": "SHE",
                        "crest": "https://crests.football-data.org/356.svg"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 8,
                    "draw": 4,
                    "lost": 3,
                    "points": 28,
                    "goalsFor": 18,
                    "goalsAgainst": 11,
                    "goalDifference": 7
                },
                {
                    "position": 3,
                    "team": {
                        "id": 389,
                        "name": "Luton Town FC",
                        "shortName": "Luton Town",
                        "tla": "LUT",
                        "crest": "https://crests.football-data.org/389.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 8,
                    "draw": 4,
                    "lost": 4,
                    "points": 28,
                    "goalsFor": 19,
                    "goalsAgainst": 15,
                    "goalDifference": 4
                },
                {
                    "position": 4,
                    "team": {
                        "id": 1081,
                        "name": "Preston North End FC",
                        "shortName": "Preston NE",
                        "tla": "PNE",
                        "crest": "https://crests.football-data.org/1081.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 8,
                    "draw": 3,
                    "lost": 4,
                    "points": 27,
                    "goalsFor": 18,
                    "goalsAgainst": 16,
                    "goalDifference": 2
                },
                {
                    "position": 5,
                    "team": {
                        "id": 71,
                        "name": "Sunderland AFC",
                        "shortName": "Sunderland",
                        "tla": "SUN",
                        "crest": "https://crests.football-data.org/71.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 7,
                    "draw": 5,
                    "lost": 4,
                    "points": 26,
                    "goalsFor": 26,
                    "goalsAgainst": 17,
                    "goalDifference": 9
                },
                {
                    "position": 6,
                    "team": {
                        "id": 343,
                        "name": "Middlesbrough FC",
                        "shortName": "Middlesbrough",
                        "tla": "MID",
                        "crest": "https://crests.football-data.org/343.png"
                    },
                    "playedGames": 17,
                    "form": "",
                    "won": 8,
                    "draw": 1,
                    "lost": 8,
                    "points": 25,
                    "goalsFor": 30,
                    "goalsAgainst": 25,
                    "goalDifference": 5
                },
                {
                    "position": 7,
                    "team": {
                        "id": 68,
                        "name": "Norwich City FC",
                        "shortName": "Norwich",
                        "tla": "NOR",
                        "crest": "https://crests.football-data.org/68.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 7,
                    "draw": 2,
                    "lost": 6,
                    "points": 23,
                    "goalsFor": 21,
                    "goalsAgainst": 16,
                    "goalDifference": 5
                },
                {
                    "position": 8,
                    "team": {
                        "id": 346,
                        "name": "Watford FC",
                        "shortName": "Watford",
                        "tla": "WAT",
                        "crest": "https://crests.football-data.org/346.png"
                    },
                    "playedGames": 17,
                    "form": "",
                    "won": 5,
                    "draw": 7,
                    "lost": 5,
                    "points": 22,
                    "goalsFor": 17,
                    "goalsAgainst": 21,
                    "goalDifference": -4
                },
                {
                    "position": 9,
                    "team": {
                        "id": 322,
                        "name": "Hull City AFC",
                        "shortName": "Hull City",
                        "tla": "HUL",
                        "crest": "https://crests.football-data.org/322.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 5,
                    "draw": 5,
                    "lost": 6,
                    "points": 20,
                    "goalsFor": 20,
                    "goalsAgainst": 24,
                    "goalDifference": -4
                },
                {
                    "position": 10,
                    "team": {
                        "id": 69,
                        "name": "Queens Park Rangers FC",
                        "shortName": "QPR",
                        "tla": "QPR",
                        "crest": "https://crests.football-data.org/69.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 5,
                    "draw": 5,
                    "lost": 6,
                    "points": 20,
                    "goalsFor": 15,
                    "goalsAgainst": 20,
                    "goalDifference": -5
                },
                {
                    "position": 11,
                    "team": {
                        "id": 74,
                        "name": "West Bromwich Albion FC",
                        "shortName": "West Brom",
                        "tla": "WBA",
                        "crest": "https://crests.football-data.org/74.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 5,
                    "draw": 4,
                    "lost": 6,
                    "points": 19,
                    "goalsFor": 18,
                    "goalsAgainst": 18,
                    "goalDifference": 0
                },
                {
                    "position": 12,
                    "team": {
                        "id": 72,
                        "name": "Swansea City AFC",
                        "shortName": "Swansea",
                        "tla": "SWA",
                        "crest": "https://crests.football-data.org/72.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 4,
                    "draw": 7,
                    "lost": 5,
                    "points": 19,
                    "goalsFor": 20,
                    "goalsAgainst": 25,
                    "goalDifference": -5
                },
                {
                    "position": 13,
                    "team": {
                        "id": 75,
                        "name": "Wigan Athletic FC",
                        "shortName": "Wigan Athletic",
                        "tla": "WIG",
                        "crest": "https://crests.football-data.org/75.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 4,
                    "draw": 6,
                    "lost": 5,
                    "points": 18,
                    "goalsFor": 17,
                    "goalsAgainst": 20,
                    "goalDifference": -3
                },
                {
                    "position": 14,
                    "team": {
                        "id": 332,
                        "name": "Birmingham City FC",
                        "shortName": "Birmingham",
                        "tla": "BIR",
                        "crest": "https://crests.football-data.org/332.png"
                    },
                    "playedGames": 14,
                    "form": "",
                    "won": 5,
                    "draw": 3,
                    "lost": 6,
                    "points": 18,
                    "goalsFor": 16,
                    "goalsAgainst": 20,
                    "goalDifference": -4
                },
                {
                    "position": 15,
                    "team": {
                        "id": 70,
                        "name": "Stoke City FC",
                        "shortName": "Stoke",
                        "tla": "STK",
                        "crest": "https://crests.football-data.org/70.png"
                    },
                    "playedGames": 15,
                    "form": "",
                    "won": 5,
                    "draw": 3,
                    "lost": 7,
                    "points": 18,
                    "goalsFor": 16,
                    "goalsAgainst": 20,
                    "goalDifference": -4
                },
                {
                    "position": 16,
                    "team": {
                        "id": 384,
                        "name": "Millwall FC",
                        "shortName": "Millwall",
                        "tla": "MIL",
                        "crest": "https://crests.football-data.org/384.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 5,
                    "draw": 3,
                    "lost": 8,
                    "points": 18,
                    "goalsFor": 15,
                    "goalsAgainst": 21,
                    "goalDifference": -6
                },
                {
                    "position": 17,
                    "team": {
                        "id": 59,
                        "name": "Blackburn Rovers FC",
                        "shortName": "Blackburn",
                        "tla": "BLA",
                        "crest": "https://crests.football-data.org/59.png"
                    },
                    "playedGames": 17,
                    "form": "",
                    "won": 5,
                    "draw": 3,
                    "lost": 9,
                    "points": 18,
                    "goalsFor": 13,
                    "goalsAgainst": 24,
                    "goalDifference": -11
                },
                {
                    "position": 18,
                    "team": {
                        "id": 387,
                        "name": "Bristol City FC",
                        "shortName": "Bristol City",
                        "tla": "BRI",
                        "crest": "https://crests.football-data.org/387.svg"
                    },
                    "playedGames": 14,
                    "form": "",
                    "won": 4,
                    "draw": 5,
                    "lost": 5,
                    "points": 17,
                    "goalsFor": 20,
                    "goalsAgainst": 22,
                    "goalDifference": -2
                },
                {
                    "position": 19,
                    "team": {
                        "id": 715,
                        "name": "Cardiff City FC",
                        "shortName": "Cardiff",
                        "tla": "CAR",
                        "crest": "https://crests.football-data.org/715.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 4,
                    "draw": 3,
                    "lost": 9,
                    "points": 15,
                    "goalsFor": 12,
                    "goalsAgainst": 20,
                    "goalDifference": -8
                },
                {
                    "position": 20,
                    "team": {
                        "id": 336,
                        "name": "Blackpool FC",
                        "shortName": "Blackpool",
                        "tla": "BLA",
                        "crest": "https://crests.football-data.org/336.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 3,
                    "draw": 5,
                    "lost": 8,
                    "points": 14,
                    "goalsFor": 15,
                    "goalsAgainst": 26,
                    "goalDifference": -11
                },
                {
                    "position": 21,
                    "team": {
                        "id": 1076,
                        "name": "Coventry City FC",
                        "shortName": "Coventry City",
                        "tla": "COV",
                        "crest": "https://crests.football-data.org/1076.png"
                    },
                    "playedGames": 14,
                    "form": "",
                    "won": 3,
                    "draw": 4,
                    "lost": 7,
                    "points": 13,
                    "goalsFor": 12,
                    "goalsAgainst": 18,
                    "goalDifference": -6
                },
                {
                    "position": 22,
                    "team": {
                        "id": 385,
                        "name": "Rotherham United FC",
                        "shortName": "Rotherham Utd",
                        "tla": "ROT",
                        "crest": "https://crests.football-data.org/385.png"
                    },
                    "playedGames": 17,
                    "form": "",
                    "won": 2,
                    "draw": 7,
                    "lost": 8,
                    "points": 13,
                    "goalsFor": 10,
                    "goalsAgainst": 25,
                    "goalDifference": -15
                },
                {
                    "position": 23,
                    "team": {
                        "id": 355,
                        "name": "Reading FC",
                        "shortName": "Reading",
                        "tla": "REA",
                        "crest": "https://crests.football-data.org/355.png"
                    },
                    "playedGames": 17,
                    "form": "",
                    "won": 3,
                    "draw": 2,
                    "lost": 12,
                    "points": 11,
                    "goalsFor": 11,
                    "goalsAgainst": 30,
                    "goalDifference": -19
                },
                {
                    "position": 24,
                    "team": {
                        "id": 394,
                        "name": "Huddersfield Town AFC",
                        "shortName": "Huddersfield",
                        "tla": "HUD",
                        "crest": "https://crests.football-data.org/394.png"
                    },
                    "playedGames": 16,
                    "form": "",
                    "won": 2,
                    "draw": 4,
                    "lost": 10,
                    "points": 10,
                    "goalsFor": 14,
                    "goalsAgainst": 27,
                    "goalDifference": -13
                }
            ]
        }
    ]
}


    }),

})