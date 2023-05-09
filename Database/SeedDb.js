require("dotenv").config();
const { CONNECTION_STRING } = process.env;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(CONNECTION_STRING, {
	dialect: "postgres",
	dialectOptions: {
		ssl: {
			rejectUnauthorized: false,
		},
	},
});

let christmasVacation = `Christmas Vacation  Once upon a time, during the (adjective) holiday season of Christmas, (name) and their (adjective) family decided to take a vacation to (place). They packed their bags with (plural noun) and plenty of (adjective) holiday cheer, and set off on their adventure.  Upon arriving at their destination, they were (verb past-tense) by a (adjective) snowfall and (verb ending in -ing) carolers singing their favorite (plural noun). They checked into their hotel room, which was decorated with (plural noun) and a[n] (adjective) Christmas tree.  During their vacation, they enjoyed (verb ending in -ing) in the snow, building a[n] (adjective) snowman and having wild (noun) fights. They also went (verb ending in -ing) in the local shops, picking out (adjective) souvenirs and (plural noun) to bring back home.  On Christmas day, they woke up to find that santa had left (plural noun) under the tree for each member of the family. They spent the day (verb ending in -ing), playing games and enjoying a (adjective) feast of holiday (type of food).  As their vacation came to an end, they reflected on all of the (adjective) memories they had made together. They (verb past-tense) up their (plural noun) and headed home, grateful for the (adjective) Christmas vacation they had shared.`;

let spookyHalloween = `Spooky Halloween  It was a dark and (adjective) Halloween night. The wind was howling like a[n] (animal) and the leaves were (verb ending in -ing). As I walked down the (adjective) street, I couldn''t shake the feeling that I was being watched.  Suddenly, I heard a loud (noun) coming from a (adjective) house. I cautiously approached the house and peered inside. To my horror, I saw a group of (plural noun) dressed in (adjective) costumes, dancing around a hot (noun).  I tried to back away, but one of the them spotted me and shouted, "Join us!" I (verb past-tense) as fast as I could, but I could hear their (adjective) laughter following me.  As I turned the corner, I saw a haunted house looming in front of me. Despite my fear, I knew I had to (verb) inside it to escape them. The (adjective) door opened with a loud (noun) and I stepped inside.  The house was dark and (adjective), with (plural noun) hanging from the ceiling and rats scurrying across the floor. Suddenly, a ghostly (noun) appeared before me, flying and (verb ending in -ing).  I screamed and ran through the house, dodging (plural noun) and narrowly avoiding (adjective) traps. Finally, I burst through the front door and collapsed onto the (noun) outside, gasping for breath.  As I looked up at the moonlit sky, I couldn''t help but feel relieved that the (adjective) Halloween night was over.`;

let birthdayParty = `Birthday Party!  Dear (your name),  You are cordially invited to (adverb) celebrate (name of person)''s (age) year old birthday party on (date) at (time) at (place near you). It''s going to be a fun celebration with (adjective) decorations, (adjective) music, and of course, (adjective) cake!  We''ll have (type of food plural) and (adjective) drinks, as well as party (plural noun) and activities. Don''t forget to (verb) in your favorite outfit, because there will be a[n] (adjective) photo booth to capture all the fun memories.  At night, we''ll sing "Happy Birthday" to (name of same person), followed by (verb ending in -ing) presents and a toast to their health and happiness.  Please RSVP by (another date) to let us know if you can join us. We hope to see you there to help them (verb) in another (adjective) year of life!  Best regards, Dan`;

let roadTrip = `Family Roadtrip  Once upon a time, the (any last name) family decided to go on a[n] (adjective) road trip. They packed up the car with (plural Noun) and (plural Noun) and set off on their adventure.  Their first stop was at a (adjective) rest stop, where they (verb past-tense) their legs and grabbed some yummy (plural noun) from the vending machine. The kids were excited to see a[n] (animal) running around the rest stop, while the parents were just (emotion) to stretch their legs after so long.  As they drove through the countryside, they played (plural noun) and (plural noun) to pass the time. They even stopped at a (adjective) diner for lunch and tried some local cuisine. The (adjective) waitress recommended the (name of favorite dish), which everyone loved.  The next day, they arrived at their destination, a (adjective) campground near a beautiful (noun in nature). They set up their (adjective) tent and spent the day swimming in the lake and hiking the winding (plural noun). They even saw a (noun) nesting in a tree.  On the last day of their road trip, they visited a[n] (adjective) amusement park. The kids went on roller coasters and ate (adjective) cotton candy, while the parents watched from afar. They all had so much fun that they didn''t even mind the (adjective) traffic on the way home.  Overall, the family had a (adjective) time on their road trip and made memories that they would never forget.`;

let thanksgiving = `Thanksgiving  At Thanksgiving, families gather together to celebrate this holiday of (plural noun) and appreciation. The day typically starts with a (adjective) breakfast, featuring dishes like toast and (type of food plural).  Then, everyone gets to work preparing the Thanksgiving feast, which usually includes a turkey, mashed potatoes, and (adjective) stuffing.  As the meal is being (verb past-tense), family members catch up on each other''s lives, sharing stories about fun times and (plural noun). The aroma of (adjective) food fills the air, and soon it''s time to gather around the table and give thanks for all the (adjective) things in life.  Before digging in, someone usually says a (adjective) prayer or shares a story about the history of Thanksgiving. Then, the (event) begins! Everyone fills their plates with (plural noun) and enjoys the (adjective) flavors of the season.  After the meal, there''s often a game of (game) or a long walk outside to work off some of the calories. And of course, no Thanksgiving is complete without a slice of (adjective) pumpkin pie for dessert!  Overall, Thanksgiving is a time to come together with loved ones, appreciate all that we have, and (verb) a delicious (noun).`;

let scoobyDoo = `Scooby-Doo!  One dark and stormy night, Scooby Doo and his (adjective) friends, Shaggy, Velma, Fred, and Daphne, found themselves stranded in a (adjective) old mansion. As they tried to find a way out, they heard creepy (plural noun) and saw (adjective) shadows moving across the walls.  Scooby was (verb past-tense) out of his wits and hid behind Shaggy, who was (adjective) as usual. But Velma, who was always (adjective) and logical, encouraged the gang to (verb) for clues and solve the mystery.  As they explored the mansion, they discovered (plural noun) hidden behind secret passages, and heard a[n] (noun) coming from the attic. They also encountered (adjective) suspects, including the (noun), and the (occupation).  Despite their fear, the gang continued to (verb) for clues, with Scooby and Shaggy providing some much-needed comic relief. Eventually, they solved the mystery and unmasked the culprit, who turned out to be the (same occupation) all along!  After their (adjective) adventure, Scooby and his friends enjoyed some (type of drink) and reminisced about their spooky escapades. They knew that wherever they went, they could always (verb) on each other and their trusty mystery-solving skills to save the day.`;

let disneyWorld = `Trip to Disney World  Once upon a time, my family and I decided to take a trip to Disney World. We were so (emotion) to see all of the amazing (plural noun) and ride the (adjective) rides.  As soon as we arrived, we headed straight to the slinky (animal) and waited in line for (number) minute[s]. The ride was (adjective) and made us feel like we were (verb ending in -ing) through space!  After that, we decided to (verb) some lunch. We ordered (type of food plural) and (type of drink), which were both (adjective).  Next, we headed to the Tower of (plural noun) and got to meet our favorite Disney character, (favorite Disney character). We took a (adjective) photo together and got their (noun) as a souvenir.  As the day went on, we rode more rides like Expedition (noun) and Space (noun in nature). We even caught a parade and saw (adjective) characters dancing to the music.  Before we knew it, the day had come to an end. We watched the (noun) and it was amazing! We left Disney World feeling (emotion) and couldn''t wait to come back again!`;

let charlieBrown = `Charlie Brown  Once upon a (adjective) day, Charlie Brown woke up feeling (adverb) (emotion). He got out of bed and looked out the window to see a (adjective) sky. He decided to go for a walk to clear his (noun).  As he was walking, he saw his friends Lucy, Linus, and Snoopy playing (sport or game) in the park. They invited him to join in, but Charlie Brown was feeling too (adjective) to play. Instead, he sat down on a nearby (noun) and watched them have fun.  After a while, Charlie Brown started to feel (adverb) (emotion) again. He realized that he didn''t need to be good at the game to have fun with his friends. He got up and joined in, (verb ending in -ing) and (verb ending in -ing) with his friends.  Soon, it was time for everyone to go home. Charlie Brown said goodbye to his friends and headed back to his house. As he walked, he looked up at the sky again and saw a beautiful (adjective) (noun).  He smiled to himself, feeling (adjective) and(emotion) once again. Charlie Brown knew that even though life could be (adjective), there was always something to be grateful for.  The end.`;

let avengers = `The Avengers  Once upon a time, the Avengers were called to a (adjective) mission to stop the evil villain, (villain''s name), from destroying the world. "(verb)!" Captain America shouted.  Iron Man quickly put on his (article of clothing) and flew into the (noun). The Hulk smashed through a (noun) to get to the villain''s lair. Black Widow and Hawkeye stealthily made their way through the (adjective) corridors.  Meanwhile, Thor arrived with his mighty (tool), ready to take down the villain once and for all. But the villain had a (adjective) surprise up their sleeve - they had stolen the (adjective) (noun) that powered the Avengers'' weapons!  With their weapons (adjective), the Avengers had to rely on their wits and (plural noun) to defeat the villain. The team worked together, using their (adjective) powers and skills to take down the villain''s army of (plural noun).  In the end, the Avengers emerged victorious, thanks to their bravery and (adjective) teamwork. As they celebrated their triumph, they knew that they would always be ready to protect the world from any (noun) that came their way.`;

let spongebobSquarepants = `Spongebob Squarepants  Once upon a (adjective) time in the town of Bikini Bottom, SpongeBob woke up feeling (emotion). He jumped out of bed and (verb past-tense) to the kitchen to make himself a (adjective) breakfast. As he cooked, he listened to his favorite (plural noun) on the radio and (verb past-tense) around the room.  After finishing his breakfast, SpongeBob decided to (verb) with his best friend, patrick. They went to the (adjective) beach and played (game) together. As they built (plural noun), they saw (name) and his pet (animal) walking by. SpongeBob and Patrick invited them to (verb) and they all had a (adjective) time together.  Later, SpongeBob went to work at (place of work) where he makes (plural noun). He loves his job and is always (adjective) when he''s there. But today, he accidentally caused a (adjective) mess. His boss, Mr. Krabs, was (emotion) at first but then saw how (adjective) SpongeBob was trying to (verb) and forgave him.  At the end of the day, SpongeBob went home feeling (adjective) and (emotion). He snuggled up in his (noun) and watched his favorite TV show, (name of TV show). He fell asleep dreaming of (plural noun), and was grateful for another (adjective) day in Bikini Bottom.`;

const wordPromptMagic = (txt) => {
	let text = txt;
	let textPrep = text.replaceAll("(", ",(").replaceAll(")", "),");
	let textArr = textPrep.split(",");
	let promptsArr = [];

	for (let i = 0; i < textArr.length; i++) {
		if (textArr[i].includes("(") && textArr[i].includes(")")) {
			promptsArr.push(textArr[i].replace("(", "").replace(")", ""));
		}
	}
	return promptsArr;
};
// DROP TABLE IF EXISTS user_mad_libs;

// CREATE TABLE user_mad_libs (
// 	user_madlib_id SERIAL PRIMARY KEY,
// 	author_name VARCHAR(255) NOT NULL,
// 	madlib_topic VARCHAR(255) NOT NULL,
// 	madlib_content TEXT NOT NULL,
// 	date_created VARCHAR(255) NOT NULL
// );
module.exports = {
	seed: (req, res) => {
		sequelize
			.query(
				`
			DROP TABLE IF EXISTS mad_libs;
		
			CREATE TABLE mad_libs (
				madlib_id SERIAL PRIMARY KEY,
				madlib_name VARCHAR(255) NOT NULL,
				madlib_content TEXT NOT NULL,
				madlib_word_types TEXT NOT NULL
			);

			INSERT INTO mad_libs (madlib_name, madlib_content, madlib_word_types)
			VALUES
			
			('Christmas Vacation', '${christmasVacation.replace(
				"`",
				""
			)}', '${wordPromptMagic(christmasVacation)}'),
			
			('Spooky Halloween', '${spookyHalloween.replace("`", "")}', '${wordPromptMagic(
					spookyHalloween
				)}'),
				
			('Birthday Party!', '${birthdayParty.replace("`", "")}', '${wordPromptMagic(
					birthdayParty
				)}'),

			('Family Roadtrip', '${roadTrip.replace("`", "")}', '${wordPromptMagic(
					roadTrip
				)}'),

			('Thanksgiving', '${thanksgiving.replace("`", "")}', '${wordPromptMagic(
					thanksgiving
				)}'),

			('Scooby-Doo!', '${scoobyDoo.replace("`", "")}', '${wordPromptMagic(
					scoobyDoo
				)}'),

			('Trip to Disney World', '${disneyWorld.replace("`", "")}', '${wordPromptMagic(
					disneyWorld
				)}'),

			('Charlie Brown', '${charlieBrown.replace("`", "")}', '${wordPromptMagic(
					charlieBrown
				)}'),

			('The Avengers', '${avengers.replace("`", "")}', '${wordPromptMagic(
					avengers
				)}'),

			('Spongebob Squarepants', '${spongebobSquarepants.replace(
				"`",
				""
			)}', '${wordPromptMagic(spongebobSquarepants)}');
			`
			)
			.then(() => {
				console.log("DB Seeded!");
				res.sendStatus(200);
			})
			.catch((err) => console.log("Error seeding DB", err));
	},
};
