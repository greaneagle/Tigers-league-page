/*   STEP 1   */
export const leagueID = "830164086737182720"; // your league ID
export const leagueName = "Tigers Dynasty League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Founded in 2018, the Tigers Dynasty League began as keeper league amongst a small group of friends on 3rd of September, when we held a first live draft. We are slowly working towards converting the league into a full-fledged dynasty league. Each year, the managers compete to win the Dynasty Bowl and avoid the ever-humiliating Toilet Bowl.</p>
<p> </p>
<p>Some managers drafted and built immediate win-now teams, while others began the slow process of building a juggernaut dynasty team. A portion of the league prioritized youth and draft picks, the rest gravitated towards the steadfast value of veterans. While some managers fled from injuries and down years, others bought the dip and built for the future.</p>
<p> </p>
<p>In astounding commitment to building a dynasty franchise, many of the managers have begun to have kids and groom the next generation of managers to take over their teams. The mini managers are being heavily indoctrinated into the fantasy lifestyle and will be expected to take an active role as soon as they can succesfully type out a coherent trade offer.

In contrast to the addition of the mini managers, some managers have also left but, despite that, the league has only gotten stronger. With more passionate managers, the competition has become more intense and more difficult each year.

While the ultimate prize is bragging rights and sending obnoxious texts to the rest of the league for the next year, the champion manager also walks away with $800 and the last place manager ships the Legends Cup to the new champion.
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Gregor Vašcer Erban",
       "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Kranj, Slovenia", // (optional)
       "bio": "I'm that type of the owner who never wants to hit a rebuild mode - win now all the time.",
       "photo": "/managers/grega.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Klemen Svetlin", // Can be anything (usually your rival's name)
         link: 2, // manager array number within this array, or null to link back to all managers page
         image: "/managers/svetlin.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
       "favoritePlayer": 1213, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "If you feel like you always have to win a trade now, your team will probably struggle to be competitive in the future.",
       "tradingScale": 8, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
       "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Astrid Bernik",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Žiri, Slovenia", // (optional)
       "bio": "I have a strong will to win.",
       "photo": "/managers/astrid.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rok Gregorič", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/gregoric.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
       "favoritePlayer": 1466, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Know your position and perform it well!",
       "tradingScale": 4, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Klemen Svetlin",
       "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Domžale, Slovenia", // (optional)
       "bio": "I think I am the best fantasy owner in the league.",
       "photo": "/managers/svetlin.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Lan Bajec", // Can be anything (usually your rival's name)
         link: 7, // manager array number within this array, or null to link back to all managers page
         image: "/managers/bajec.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
       "favoritePlayer": 4034, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "I don't have one.",
       "tradingScale": 8, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
       "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Miha Tivadar",
       "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Ljubljana, Slovenia", // (optional)
       "bio": "I'm here to have fun with the boys I shared the football field with and I don't care if I'm first or last. It is more important for me to have a team that I like than having a team that is good on paper. And I trade possibly meaningless trades, but if I want a certain player, I will give anything for him. I admit that I'm the kind of owner who may not be the most active owner in the league (the gypsies are to blame), but I do my best to fulfill everything we agree on, trade players and have a good time.",
       "photo": "/managers/tivadar.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Urban Repanšek", // Can be anything (usually your rival's name)
         link: 8, // manager array number within this array, or null to link back to all managers page
         image: "/managers/urban.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
       "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Have fun, talk shit, kick ass",
       "tradingScale": 7, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
       "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Žiga Hanžič",
       "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Munich, Germany", // (optional)
       "bio": "A very experianced Fantasy Football manager, with the skills to beat anybody, if the opponent forgets to set the lineup. My goal is to always beat the worst team in the league!",
       "photo": "/managers/hanzo.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Andrej Kuhelj", // Can be anything (usually your rival's name)
         link: 9, // manager array number within this array, or null to link back to all managers page
         image: "/managers/andrej.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
       "favoritePlayer": 344, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "K", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Give rookies a few years! It's dynasty, not the Raiders...",
       "tradingScale": 6, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
       "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Matija Klančar",
       "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Domžale, Slovenia", // (optional)
       "bio": "A lot of the unknown in the known.",
       "photo": "/managers/matija.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Miha Tivadar", // Can be anything (usually your rival's name)
         link: 3, // manager array number within this array, or null to link back to all managers page
         image: "/managers/tivadar.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
       "favoritePlayer": 421, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Always do the best you can.",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
       "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Rok Gregorič",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Ljubljana, Slovenia", // (optional)
       "bio": "I am the most beautiful owner in the league.",
       "photo": "/managers/gregoric.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Lan Bajec", // Can be anything (usually your rival's name)
         link: 7, // manager array number within this array, or null to link back to all managers page
         image: "/managers/bajec.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
       "favoritePlayer": 5927, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Loading for the future",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
       "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Lan Bajec",
       "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Ljubljana, Slovenia", // (optional)
       "bio": "I think ahead, look at the big picture and try that the age difference between the players is as small as possible so they are at the same level in terms of jokes... That someone is not too childish at the end.",
       "photo": "/managers/bajec.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Gregor Vašcer Erban", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
         image: "/managers/grega.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
       "favoritePlayer": 947, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Every player is tradeable for a right price tag. But I try to have younger players, buy them at low price and sell them at high when they are older and at the peak of their career.",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
       "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Urban Repanšek",
       "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Homec, Slovenia", // (optional)
       "bio": "Always on the lookout for buy low sell high. And yeah, I watch way too much football.",
       "photo": "/managers/urban.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "lv", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Gregor Vašcer Erban", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
         image: "/managers/grega.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
       "favoritePlayer": 1181, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Trade everything after the 2nd round. There is not much value after that.",
       "tradingScale": 8, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
       "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Andrej Kuhelj",
       "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Gorjuša, Slovenia", // (optional)
       "bio": "100% get emotionally attached to my squad",
       "photo": "/managers/andrej.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "ari", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rok Gregorič", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/gregoric.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
       "favoritePlayer": 1576, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Get points now, retire later!",
       "tradingScale": 8, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
