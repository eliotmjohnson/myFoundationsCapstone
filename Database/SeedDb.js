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

let christmasVacation = `Christmas Vacation  Once upon a time, during the (adjective) holiday season of Christmas, (name) and their (adjective) family decided to take a (adjective) vacation to (location). They packed their bags with (plural noun) and plenty of (adjective) holiday cheer, and set off on their adventure.  Upon arriving at their destination, they were greeted by a (adjective) snowfall and (verb ending in -ing) carolers singing their favorite (plural noun). They checked into their (adjective) hotel room, which was decorated with (plural noun) and a (adjective) Christmas tree.  During their vacation, they enjoyed (verb ending in -ing) in the snow, building a (adjective) snowman and having (adjective) snowball fights. They also went (verb ending in -ing) in the local shops, picking out (adjective) souvenirs and (plural noun) to bring back home.  On Christmas day, they woke up to find that (name) had left (plural noun) under the tree for each member of the family. They spent the day (verb ending in -ing), playing (plural noun) and enjoying a (adjective) feast of holiday (noun).  As their vacation came to an end, they reflected on all of the (adjective) memories they had made together. They packed up their (plural noun) and headed home, grateful for the (adjective) Christmas vacation they had shared.`;

let spookyHalloween = `Spooky Halloween  It was a dark and (adjective) Halloween night. The wind was howling like a (animal) and the leaves were rustling like (plural noun). As I walked down the (adjective) street, I couldn''t shake the feeling that I was being (verb past-tense).  Suddenly, I heard a (adjective) noise coming from a nearby (noun). I cautiously approached the (noun) and peered inside. To my horror, I saw a group of (plural noun) dressed in (adjective) costumes, dancing around a (adjective) fire.  I tried to back away, but one of the (plural noun) spotted me and shouted, "Join us!" I (verb past-tense) and ran as fast as I could, but I could hear their (adjective) laughter following me.  As I turned the corner, I saw a (adjective) haunted house looming in front of me. Despite my fear, I knew I had to (verb) inside to escape the (plural noun). The creaky door opened with a loud (noun) and I stepped inside.  The house was (adjective) and (adjective), with cobwebs hanging from the ceiling and (plural noun) scurrying across the floor. Suddenly, a ghostly figure appeared before me, (verb ending in -ing) and (verb ending in -ing).  I screamed and ran through the house, dodging (plural noun) and narrowly avoiding (adjective) traps. Finally, I burst through the front door and collapsed onto the (noun) outside, gasping for breath.  As I looked up at the moonlit sky, I couldn''t help but feel relieved that the (adjective) Halloween night was over.`;

let birthdayParty = `Birthday Party!  Dear (Your name),  You are cordially invited to (adverb) celebrate (name of person)''s (age) year old birthday party on (date) at (time) at (Place). It''s going to be a fun celebration with (adjective) decorations, (adjective) music, and of course, (adjective) cake!  We''ll have (type of food plural) and (adjective) drinks, as well as (adjective) party games and activities. Don''t forget to (verb) in your favorite outfit, because there will be a[n] (adjective) photo booth to capture all the fun memories.  At night, we''ll (verb) to sing "Happy Birthday" to (name of same person), followed by (adjective) presents and a toast to their health and happiness.  Please RSVP by (date) to let us know if you can join us. We hope to see you there to help them ring in another (adjective) year of life!  Best regards, (another name)`;

let roadTrip = `Family Roadtrip  Once upon a time, the (Adjective) family decided to go on a (Adjective) road trip. They packed up the (Adjective) car with (Plural Noun) and (Plural Noun) and set off on their adventure.  Their first stop was at a (Adjective) rest stop, where they stretched their (Body Part) and grabbed some (Adjective) snacks from the vending machine. The kids were excited to see a (Animal) running around the rest stop, while the parents were just happy to stretch their (Body Part) after driving for so long.  As they drove through (Adjective) countryside, they played (Noun) and (Noun) to pass the time. They even stopped at a (Adjective) diner for lunch and tried some (Adjective) local cuisine. The (Adjective) waitress recommended the (Noun), which everyone loved.  The next day, they arrived at their destination, a (Adjective) campground near a (Adjective) lake. They set up their (Adjective) tent and spent the day swimming in the (Adjective) lake and hiking the (Adjective) trails. They even saw a (Adjective) bird nesting in a tree.  On the last day of their road trip, they visited a (Adjective) amusement park. The kids went on (Adjective) roller coasters and ate (Adjective) cotton candy, while the parents watched from a (Adjective) bench. They all had so much fun that they didn''t even mind the (Adjective) traffic on the way home.  Overall, the family had a (Adjective) time on their road trip and made memories that they would never forget.`;

let thanksgiving = `Thanksgiving  At Thanksgiving, families gather together to celebrate this holiday of gratitude and appreciation. The day typically starts with a big (adjective) breakfast, featuring dishes like (noun) and (noun).  Then, everyone gets to work preparing the Thanksgiving feast, which usually includes a (adjective) turkey, (adjective) mashed potatoes, and (adjective) stuffing.  As the meal is being prepared, family members catch up on each other''s lives, sharing stories about (noun) and (noun). The aroma of delicious food fills the air, and soon it''s time to gather around the table and give thanks for all the good things in life.  Before digging in, someone usually says a (adjective) prayer or shares a story about the history of Thanksgiving. Then, the feast begins! Everyone fills their plates with food and enjoys the (adjective) flavors of the season.  After the meal, there''s often a game of (noun) or a long walk outside to work off some of the calories. And of course, no Thanksgiving is complete without a slice of (adjective) pumpkin pie for dessert!  Overall, Thanksgiving is a time to come together with loved ones, appreciate all that we have, and enjoy a delicious meal.`;

let scoobyDoo = `Scooby-Doo!  One dark and stormy night, Scooby Doo and his (adjective) friends, Shaggy, Velma, Fred, and Daphne, found themselves stranded in a (adjective) old mansion. As they tried to find a way out, they heard (adjective) noises and saw strange shadows moving across the walls.  Scooby, being a (adjective) dog, was scared out of his wits and hid behind Shaggy, who was (adjective) as usual. But Velma, who was always (adjective) and logical, encouraged the gang to search for clues and solve the mystery.  As they explored the mansion, they discovered (noun) hidden behind secret passages, and heard (verb ending in "ing") coming from the attic. They also encountered (adjective) suspects, including the (noun), the (noun), and the (noun).  Despite their fear, the gang continued to search for clues, with Scooby and Shaggy providing some much-needed comic relief. Eventually, they solved the mystery and unmasked the culprit, who turned out to be the (noun) all along!  After their (adjective) adventure, Scooby and his friends enjoyed some (noun) and reminisced about their spooky escapades. They knew that wherever they went, they could always count on each other and their trusty mystery-solving skills to save the day.`;

let disneyWorld = `Trip to Disney World  Once upon a time, my family and I decided to take a trip to Disney World. We were so excited to see all of the (adjective) attractions and ride the (adjective) rides.  As soon as we arrived, we headed straight to (Disney World attraction) and waited in line for (number) minutes. The ride was (adjective) and made us feel like we were (verb ending in -ing) through space!  After that, we decided to grab some lunch at (restaurant in Disney World). We ordered (food item) and (drink), which were both (adjective).  Next, we headed to (Disney World attraction) and got to meet our favorite Disney character, (character name). We took a (adjective) photo together and got their (noun) as a souvenir.  As the day went on, we rode more (adjective) rides like (Disney World ride) and (Disney World ride). We even caught a parade and saw (adjective) floats and characters dancing to the music.  Before we knew it, the day had come to an end. We watched the fireworks show and it was (adjective). We left Disney World feeling (adjective) and can''t wait to come back again someday!`;

let charlieBrown = `Charlie Brown  Once upon a (adjective) day, Charlie Brown woke up feeling (adverb) (emotion). He got out of bed and looked out the window to see a (adjective) sky. He decided to go for a walk to clear his (noun).  As he was walking, he saw his friends Lucy, Linus, and Snoopy playing (sport or game) in the park. They invited him to join in, but Charlie Brown was feeling too (adjective) to play. Instead, he sat down on a nearby (noun) and watched them have fun.  After a while, Charlie Brown started to feel (adverb) (emotion) again. He realized that he didn''t need to be good at the game to have fun with his friends. He got up and joined in, (verb ending in -ing) and (verb ending in -ing) with his friends.  Soon, it was time for everyone to go home. Charlie Brown said goodbye to his friends and headed back to his house. As he walked, he looked up at the sky again and saw a beautiful (adjective) (noun).  He smiled to himself, feeling (adjective) and (adjective) once again. Charlie Brown knew that even though life could be (adjective), there was always something to be grateful for.  The end.`;

let avengers = `The Avengers  Once upon a time, the Avengers were called to a (adjective) mission to stop the evil villain, (villain''s name), from destroying the world. "Assemble!" Captain America shouted.  Iron Man quickly put on his (article of clothing) and flew into the sky. The Hulk smashed through a (noun) to get to the villain''s lair. Black Widow and Hawkeye stealthily made their way through the (adjective) corridors.  Meanwhile, Thor arrived with his mighty (noun), ready to take down the villain once and for all. But the villain had a surprise up their sleeve - they had stolen the (adjective) crystal that powered the Avengers'' weapons!  With their weapons useless, the Avengers had to rely on their wits and (noun) to defeat the villain. The team worked together, using their unique powers and skills to take down the villain''s army of (plural noun).  In the end, the Avengers emerged victorious, thanks to their bravery and (adjective) teamwork. As they celebrated their triumph, they knew that they would always be ready to protect the world from any threat that came their way.`;

let spongebobSquarepants = `Spongebob Squarepants  Once upon a (adjective) time in the (noun) of Bikini Bottom, SpongeBob woke up feeling (adjective). He jumped out of bed and (verb) to the kitchen to make himself a (adjective) breakfast. As he cooked, he listened to his favorite (plural noun) on the radio and danced around the room.  After finishing his breakfast, SpongeBob decided to (verb) with his best friend, (name). They went to the (adjective) beach and played (noun) together. As they built sandcastles, they saw (name of character) and his pet (name of animal) walking by. SpongeBob and (name) invited them to play and they all had a (adjective) time together.  Later, SpongeBob went to work at the (place of work) where he makes (noun). He loves his job and is always (adverb) when he''s there. But today, he accidentally (verb past tense) and caused a big mess. His boss, (name), was angry at first but then saw how hard SpongeBob was trying to clean up and forgave him.  At the end of the day, SpongeBob went home feeling (adjective) and (adjective). He snuggled up in his (noun) and watched his favorite TV show, (name of TV show). He fell asleep dreaming of (noun) and (plural noun), grateful for another (adjective) day in Bikini Bottom.`;

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

module.exports = {
	seed: (req, res) => {
		sequelize
			.query(
				`
			DROP TABLE IF EXISTS mad_libs;
			DROP TABLE IF EXISTS user_mad_libs;

			CREATE TABLE mad_libs (
				madlib_id SERIAL PRIMARY KEY,
				madlib_name VARCHAR(255) NOT NULL,
				madlib_content TEXT NOT NULL,
				madlib_word_types TEXT NOT NULL
			);

			CREATE TABLE user_mad_libs (
				user_madlib_id SERIAL PRIMARY KEY,
				author_name VARCHAR(255) NOT NULL,
				madlib_topic VARCHAR(255) NOT NULL,
				madlib_content TEXT NOT NULL,
				date_created VARCHAR(255) NOT NULL
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
			)}', '${wordPromptMagic(spongebobSquarepants)}')
			`
			)
			.then(() => {
				console.log("DB Seeded!");
				res.sendStatus(200);
			})
			.catch((err) => console.log("Error seeding DB", err));
	},
};
