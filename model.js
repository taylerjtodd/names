var MODEL = (function () {

    let testNames = [
        'Liam',
        'Noah',
        'Oliver',
        'William',
        'Elijah',
        'James',
        'Benjamin',
        'Lucas',
        'Mason',
        'Ethan',
        'Alexander',
        'Henry',
        'Jacob',
        'Michael',
        'Daniel',
        'Logan',
        'Jackson',
        'Sebastian',];

    let boyNames = [
        'Liam',
        'Noah',
        'Oliver',
        'William',
        'Elijah',
        'James',
        'Benjamin',
        'Lucas',
        'Mason',
        'Ethan',
        'Alexander',
        'Henry',
        'Jacob',
        'Michael',
        'Daniel',
        'Logan',
        'Jackson',
        'Sebastian',
        'Jack',
        'Aiden',
        'Owen',
        'Samuel',
        'Matthew',
        'Joseph',
        'Levi',
        'Mateo',
        'David',
        'John',
        'Wyatt',
        'Carter',
        'Julian',
        'Luke',
        'Grayson',
        'Isaac',
        'Jayden',
        'Theodore',
        'Gabriel',
        'Anthony',
        'Dylan',
        'Leo',
        'Lincoln',
        'Jaxon',
        'Asher',
        'Christopher',
        'Josiah',
        'Andrew',
        'Thomas',
        'Joshua',
        'Ezra',
        'Hudson',
        'Charles',
        'Caleb',
        'Isaiah',
        'Ryan',
        'Nathan',
        'Adrian',
        'Christian',
        'Maverick',
        'Colton',
        'Elias',
        'Aaron',
        'Eli',
        'Landon',
        'Jonathan',
        'Nolan',
        'Hunter',
        'Cameron',
        'Connor',
        'Santiago',
        'Jeremiah',
        'Ezekiel',
        'Angel',
        'Roman',
        'Easton',
        'Miles',
        'Robert',
        'Jameson',
        'Nicholas',
        'Greyson',
        'Cooper',
        'Ian',
        'Carson',
        'Axel',
        'Jaxson',
        'Dominic',
        'Leonardo',
        'Luca',
        'Austin',
        'Jordan',
        'Adam',
        'Xavier',
        'Jose',
        'Jace',
        'Everett',
        'Declan',
        'Evan',
        'Kayden',
        'Parker',
        'Wesley',
        'Kai',
        'Brayden',
        'Bryson',
        'Weston',
        'Jason',
        'Emmett',
        'Sawyer',
        'Silas',
        'Bennett',
        'Brooks',
        'Micah',
        'Damian',
        'Harrison',
        'Waylon',
        'Ayden',
        'Vincent',
        'Ryder',
        'Kingston',
        'Rowan',
        'George',
        'Luis',
        'Chase',
        'Cole',
        'Nathaniel',
        'Zachary',
        'Ashton',
        'Braxton',
        'Gavin',
        'Tyler',
        'Diego',
        'Bentley',
        'Amir',
        'Beau',
        'Gael',
        'Carlos',
        'Ryker',
        'Jasper',
        'Max',
        'Juan',
        'Ivan',
        'Brandon',
        'Jonah',
        'Giovanni',
        'Kaiden',
        'Myles',
        'Calvin',
        'Lorenzo',
        'Maxwell',
        'Jayce',
        'Kevin',
        'Legend',
        'Tristan',
        'Jesus',
        'Jude',
        'Zion',
        'Justin',
        'Maddox',
        'Abel',
        'King',
        'Camden',
        'Elliott',
        'Malachi',
        'Milo',
        'Emmanuel',
        'Karter',
        'Rhett',
        'Alex',
        'August',
        'River',
        'Xander',
        'Antonio',
        'Brody',
        'Finn',
        'Elliot',
        'Dean',
        'Emiliano',
        'Eric',
        'Miguel',
        'Arthur',
        'Matteo',
        'Graham',
        'Alan',
        'Nicolas',
        'Blake',
        'Thiago',
        'Adriel',
        'Victor',
        'Joel',
        'Timothy',
        'Hayden',
        'Judah',
        'Abraham',
        'Edward',
        'Messiah',
        'Zayden',
        'Theo',
        'Tucker',
        'Grant',
        'Richard',
        'Alejandro',
        'Steven',
        'Jesse',
        'Dawson',
        'Bryce',
        'Avery',
        'Oscar',
        'Patrick',
        'Archer',
        'Barrett',
        'Leon',
        'Colt',
        'Charlie',
        'Peter',
        'Kaleb',
        'Lukas',
        'Beckett',
        'Jeremy',
        'Preston',
        'Enzo',
        'Luka',
        'Andres',
        'Marcus',
        'Felix',
        'Mark',
        'Ace',
        'Brantley',
        'Atlas',
        'Remington',
        'Maximus',
        'Matias',
        'Walker',
        'Kyrie',
        'Griffin',
        'Kenneth',
        'Israel',
        'Javier',
        'Kyler',
        'Jax',
        'Amari',
        'Zane',
        'Emilio',
        'Knox',
        'Adonis',
        'Aidan',
        'Kaden',
        'Paul',
        'Omar',
        'Brian',
        'Louis',
        'Caden',
        'Maximiliano',
        'Holden',
        'Paxton',
        'Nash',
        'Bradley',
        'Bryan',
        'Simon',
        'Phoenix',
        'Lane',
        'Josue',
        'Colin',
        'Rafael',
        'Kyle',
        'Riley',
        'Jorge',
        'Beckham',
        'Cayden',
        'Jaden',
        'Emerson',
        'Ronan',
        'Karson',
        'Arlo',
        'Tobias',
        'Brady',
        'Clayton',
        'Francisco',
        'Zander',
        'Erick',
        'Walter',
        'Daxton',
        'Cash',
        'Martin',
        'Damien',
        'Dallas',
        'Cody',
        'Chance',
        'Jensen',
        'Finley',
        'Jett',
        'Corbin',
        'Kash',
        'Reid',
        'Kameron',
        'Andre',
        'Gunner',
        'Jake',
        'Hayes',
        'Manuel',
        'Prince',
        'Bodhi',
        'Cohen',
        'Sean',
        'Khalil',
        'Hendrix',
        'Derek',
        'Cristian',
        'Cruz',
        'Kairo',
        'Dante',
        'Atticus',
        'Killian',
        'Stephen',
        'Orion',
        'Malakai',
        'Ali',
        'Eduardo',
        'Fernando',
        'Anderson',
        'Angelo',
        'Spencer',
        'Gideon',
        'Mario',
        'Titus',
        'Travis',
        'Rylan',
        'Kayson',
        'Ricardo',
        'Tanner',
        'Malcolm',
        'Raymond',
        'Odin',
        'Cesar',
        'Lennox',
        'Joaquin',
        'Kane',
        'Wade',
        'Muhammad',
        'Iker',
        'Jaylen',
        'Crew',
        'Zayn',
        'Hector',
        'Ellis',
        'Leonel',
        'Cairo',
        'Garrett',
        'Romeo',
        'Dakota',
        'Edwin',
        'Warren',
        'Julius',
        'Major',
        'Donovan',
        'Caiden',
        'Tyson',
        'Nico',
        'Sergio',
        'Nasir',
        'Rory',
        'Devin',
        'Jaiden',
        'Jared',
        'Kason',
        'Malik',
        'Jeffrey',
        'Ismael',
        'Elian',
        'Marshall',
        'Lawson',
        'Desmond',
        'Winston',
        'Nehemiah',
        'Ari',
        'Conner',
        'Jay',
        'Kade',
        'Andy',
        'Johnny',
        'Jayceon',
        'Marco',
        'Seth',
        'Ibrahim',
        'Raiden',
        'Collin',
        'Edgar',
        'Erik',
        'Troy',
        'Clark',
        'Jaxton',
        'Johnathan',
        'Gregory',
        'Russell',
        'Royce',
        'Fabian',
        'Ezequiel',
        'Noel',
        'Pablo',
        'Cade',
        'Pedro',
        'Sullivan',
        'Trevor',
        'Reed',
        'Quinn',
        'Frank',
        'Harvey',
        'Princeton',
        'Zayne',
        'Matthias',
        'Conor',
        'Sterling',
        'Dax',
        'Grady',
        'Cyrus',
        'Gage',
        'Leland',
        'Solomon',
        'Emanuel',
        'Niko',
        'Ruben',
        'Kasen',
        'Mathias',
        'Kashton',
        'Franklin',
        'Remy',
        'Shane',
        'Kendrick',
        'Shawn',
        'Otto',
        'Armani',
        'Keegan',
        'Finnegan',
        'Memphis',
        'Bowen',
        'Dominick',
        'Kolton',
        'Jamison',
        'Allen',
        'Philip',
        'Tate',
        'Peyton',
        'Jase',
        'Oakley',
        'Rhys',
        'Kyson',
        'Adan',
        'Esteban',
        'Dalton',
        'Gianni',
        'Callum',
        'Sage',
        'Alexis',
        'Milan',
        'Moises',
        'Jonas',
        'Uriel',
        'Colson',
        'Marcos',
        'Zaiden',
        'Hank',
        'Damon',
        'Hugo',
        'Ronin',
        'Royal',
        'Kamden',
        'Dexter',
        'Luciano',
        'Alonzo',
        'Augustus',
        'Kamari',
        'Eden',
        'Roberto',
        'Baker',
        'Bruce',
        'Kian',
        'Albert',
        'Frederick',
        'Mohamed',
        'Abram',
        'Omari',
        'Porter',
        'Enrique',
        'Alijah',
        'Francis',
        'Leonidas',
        'Zachariah',
        'Landen',
        'Wilder',
        'Apollo',
        'Santino',
        'Tatum',
        'Pierce',
        'Forrest',
        'Corey',
        'Derrick',
        'Isaias',
        'Kaison',
        'Kieran',
        'Arjun',
        'Gunnar',
        'Rocco',
        'Emmitt'
    ];
    let girlNames = [
        'Olivia',
        'Emma',
        'Ava',
        'Sophia',
        'Isabella',
        'Charlotte',
        'Amelia',
        'Mia',
        'Harper',
        'Evelyn',
        'Abigail',
        'Emily',
        'Ella',
        'Elizabeth',
        'Camila',
        'Luna',
        'Sofia',
        'Avery',
        'Mila',
        'Aria',
        'Scarlett',
        'Penelope',
        'Layla',
        'Chloe',
        'Victoria',
        'Madison',
        'Eleanor',
        'Grace',
        'Nora',
        'Riley',
        'Zoey',
        'Hannah',
        'Hazel',
        'Lily',
        'Ellie',
        'Violet',
        'Lillian',
        'Zoe',
        'Stella',
        'Aurora',
        'Natalie',
        'Emilia',
        'Everly',
        'Leah',
        'Aubrey',
        'Willow',
        'Addison',
        'Lucy',
        'Audrey',
        'Bella',
        'Nova',
        'Brooklyn',
        'Paisley',
        'Savannah',
        'Claire',
        'Skylar',
        'Isla',
        'Genesis',
        'Naomi',
        'Elena',
        'Caroline',
        'Eliana',
        'Anna',
        'Maya',
        'Valentina',
        'Ruby',
        'Kennedy',
        'Ivy',
        'Ariana',
        'Aaliyah',
        'Cora',
        'Madelyn',
        'Alice',
        'Kinsley',
        'Hailey',
        'Gabriella',
        'Allison',
        'Gianna',
        'Serenity',
        'Samantha',
        'Sarah',
        'Autumn',
        'Quinn',
        'Eva',
        'Piper',
        'Sophie',
        'Sadie',
        'Delilah',
        'Josephine',
        'Nevaeh',
        'Adeline',
        'Arya',
        'Emery',
        'Lydia',
        'Clara',
        'Vivian',
        'Madeline',
        'Peyton',
        'Julia',
        'Rylee',
        'Brielle',
        'Reagan',
        'Natalia',
        'Jade',
        'Athena',
        'Maria',
        'Leilani',
        'Everleigh',
        'Liliana',
        'Melanie',
        'Mackenzie',
        'Hadley',
        'Raelynn',
        'Kaylee',
        'Rose',
        'Arianna',
        'Isabelle',
        'Melody',
        'Eliza',
        'Lyla',
        'Katherine',
        'Aubree',
        'Adalynn',
        'Kylie',
        'Faith',
        'Mary',
        'Margaret',
        'Ximena',
        'Iris',
        'Alexandra',
        'Jasmine',
        'Charlie',
        'Amaya',
        'Taylor',
        'Isabel',
        'Ashley',
        'Khloe',
        'Ryleigh',
        'Alexa',
        'Amara',
        'Valeria',
        'Andrea',
        'Parker',
        'Norah',
        'Eden',
        'Elliana',
        'Brianna',
        'Emersyn',
        'Valerie',
        'Anastasia',
        'Eloise',
        'Emerson',
        'Cecilia',
        'Remi',
        'Josie',
        'Alina',
        'Reese',
        'Bailey',
        'Lucia',
        'Adalyn',
        'Molly',
        'Ayla',
        'Sara',
        'Daisy',
        'London',
        'Jordyn',
        'Esther',
        'Genevieve',
        'Harmony',
        'Annabelle',
        'Alyssa',
        'Ariel',
        'Aliyah',
        'Londyn',
        'Juliana',
        'Morgan',
        'Summer',
        'Juliette',
        'Trinity',
        'Callie',
        'Sienna',
        'Blakely',
        'Alaia',
        'Kayla',
        'Teagan',
        'Alaina',
        'Brynlee',
        'Finley',
        'Catalina',
        'Sloane',
        'Rachel',
        'Lilly',
        'Ember',
        'Kimberly',
        'Juniper',
        'Sydney',
        'Arabella',
        'Gemma',
        'Jocelyn',
        'Freya',
        'June',
        'Lauren',
        'Amy',
        'Presley',
        'Georgia',
        'Journee',
        'Elise',
        'Rosalie',
        'Ada',
        'Laila',
        'Brooke',
        'Diana',
        'Olive',
        'River',
        'Payton',
        'Ariella',
        'Daniela',
        'Raegan',
        'Alayna',
        'Gracie',
        'Mya',
        'Blake',
        'Noelle',
        'Ana',
        'Leila',
        'Paige',
        'Lila',
        'Nicole',
        'Rowan',
        'Hope',
        'Ruth',
        'Alana',
        'Selena',
        'Marley',
        'Kamila',
        'Alexis',
        'Mckenzie',
        'Zara',
        'Millie',
        'Magnolia',
        'Kali',
        'Kehlani',
        'Catherine',
        'Maeve',
        'Adelyn',
        'Sawyer',
        'Elsie',
        'Lola',
        'Jayla',
        'Adriana',
        'Journey',
        'Vera',
        'Aspen',
        'Joanna',
        'Alivia',
        'Angela',
        'Dakota',
        'Camille',
        'Nyla',
        'Tessa',
        'Brooklynn',
        'Malia',
        'Makayla',
        'Rebecca',
        'Fiona',
        'Mariana',
        'Lena',
        'Julianna',
        'Vanessa',
        'Juliet',
        'Camilla',
        'Kendall',
        'Harley',
        'Cali',
        'Evangeline',
        'Mariah',
        'Jane',
        'Zuri',
        'Elaina',
        'Sage',
        'Amira',
        'Adaline',
        'Lia',
        'Charlee',
        'Delaney',
        'Lilah',
        'Miriam',
        'Angelina',
        'Mckenna',
        'Aniyah',
        'Phoebe',
        'Michelle',
        'Thea',
        'Hayden',
        'Maggie',
        'Lucille',
        'Amiyah',
        'Annie',
        'Alexandria',
        'Myla',
        'Vivienne',
        'Kiara',
        'Alani',
        'Margot',
        'Adelaide',
        'Briella',
        'Brynn',
        'Saylor',
        'Destiny',
        'Amari',
        'Evelynn',
        'Haven',
        'Phoenix',
        'Izabella',
        'Kaia',
        'Lilliana',
        'Harlow',
        'Alessandra',
        'Madilyn',
        'Nina',
        'Logan',
        'Adelynn',
        'Amina',
        'Kate',
        'Fatima',
        'Samara',
        'Winter',
        'Giselle',
        'Evie',
        'Arielle',
        'Jessica',
        'Talia',
        'Leia',
        'Gabriela',
        'Gracelyn',
        'Lexi',
        'Laura',
        'Makenzie',
        'Melissa',
        'Royalty',
        'Rylie',
        'Raelyn',
        'Gabrielle',
        'Paris',
        'Daleyza',
        'Joy',
        'Maisie',
        'Oakley',
        'Ariyah',
        'Kailani',
        'Alayah',
        'Stephanie',
        'Amora',
        'Willa',
        'Gracelynn',
        'Elle',
        'Keira',
        'Tatum',
        'Veronica',
        'Milani',
        'Felicity',
        'Paislee',
        'Allie',
        'Nylah',
        'Ariah',
        'Cassidy',
        'Lyric',
        'Madeleine',
        'Miracle',
        'Gwendolyn',
        'Octavia',
        'Dahlia',
        'Heidi',
        'Celeste',
        'Remington',
        'Makenna',
        'Everlee',
        'Scarlet',
        'Esmeralda',
        'Maci',
        'Lainey',
        'Jacqueline',
        'Kira',
        'Lana',
        'Brinley',
        'Demi',
        'Ophelia',
        'Lennon',
        'Reign',
        'Bristol',
        'Sabrina',
        'Alaya',
        'Jennifer',
        'Kenzie',
        'Angel',
        'Luciana',
        'Anaya',
        'Hallie',
        'Ryan',
        'Camryn',
        'Kinley',
        'Daniella',
        'Lilith',
        'Blair',
        'Amanda',
        'Collins',
        'Jordan',
        'Maliyah',
        'Rosemary',
        'Cataleya',
        'Kaylani',
        'Gia',
        'Alison',
        'Leighton',
        'Nadia',
        'Sutton',
        'Carolina',
        'Skye',
        'Alicia',
        'Regina',
        'Viviana',
        'Yaretzi',
        'Heaven',
        'Serena',
        'Raven',
        'Emely',
        'Carmen',
        'Wren',
        'Helen',
        'Charleigh',
        'Danielle',
        'Daphne',
        'Esme',
        'Nayeli',
        'Maddison',
        'Sarai',
        'Dylan',
        'Frances',
        'Elisa',
        'Mabel',
        'Skyler',
        'Jenna',
        'Emelia',
        'Kaitlyn',
        'Miranda',
        'Marlee',
        'Matilda',
        'Selah',
        'Jolene',
        'Wynter',
        'Hattie',
        'Bianca',
        'Haley',
        'Lorelei',
        'Mira',
        'Braelynn',
        'Annalise',
        'Madelynn',
        'Katie',
        'Palmer',
        'Aylin',
        'Elliott',
        'Kyla',
        'Rory',
        'Avianna',
        'Liana',
        'Shiloh',
        'Kalani',
        'Jada',
        'Kelsey',
        'Elianna',
        'Jimena',
        'Kora',
        'Kamryn',
        'Ainsley',
        'Averie',
        'Kensley',
        'Helena',
        'Holly',
        'Emory',
        'Macie',
        'Amber',
        'Zariah',
        'Erin',
        'Eve',
        'Kathryn',
        'Renata',
        'Kayleigh',
        'Emmy',
        'Celine',
        'Francesca',
        'Fernanda',
        'April',
        'Shelby',
        'Poppy',
        'Colette',
        'Meadow',
        'Nia',
        'Sierra',
        'Cheyenne'
    ];

    let config;

    let rounds = [];
    let choices = [];

    let currentRound = [];

    let nextChoice;

    let roundIndex = 0;

    function init() {
    }

    function saveConfig(_config) {
        config = _config;

        rounds = twoD(config.podiumSize);
        choices = twoD(config.podiumSize);

        let names;
        if (config.startingList === 'test') {
            names = shuffle(testNames);
        } else if (config.startingList === 'boys') {
            names = shuffle(boyNames);
        } else {
            names = shuffle(girlNames);
        }
        names.forEach(name => {
            rounds[0].push(name);
        });

        roundIndex = 0;

        initCurrentRound();

        nextChoice = currentRound[0];
    }

    function initCurrentRound() {
        currentRound = [];
        for (let i = 0; i < rounds[roundIndex].length; i++) {
            let choice = {};
            choice.first = rounds[roundIndex][i];
            i++;
            if (i < rounds[roundIndex].length) {
                choice.second = rounds[roundIndex][i];
            }
            currentRound.push(choice);
        }
    }

    function reset() {
        saveConfig(config);
    }

    function shuffle(unshuffled) {

        return unshuffled
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
    }

    function choose(name) {
        if (name) {
            choices[roundIndex].push(name);
            if (roundIndex + 1 < rounds.length) {
                let loser = nextChoice.first;
                if (loser === name) {
                    loser = nextChoice.second;
                }
                if (loser) {
                    choices[roundIndex + 1].push(loser);
                }
            }
        }

        currentRound = currentRound.slice(1);
        while (!currentRound || !currentRound.length) {
            advanceRound();
        }
        nextChoice = currentRound[0];
        if (isDone()) {
            nextChoice = null;
        } else if (!nextChoice.second) {
            choose(nextChoice.first);
        }
    }

    function isDone() {
        return !rounds.find(round => round.length > 1);
    }

    function advanceRound() {
        roundIndex--;
        if (roundIndex < 0) {
            rounds = choices;
            rounds = rounds.map(round => shuffle(round));
            choices = twoD(config.podiumSize);
            roundIndex = rounds.length - 1;
        }
        initCurrentRound();
    }

    function dump() {
        const data = { rounds: rounds, currentRound: currentRound, choices: choices };
        console.log(data);
        return data;
    }

    function twoD(size) {
        let array = [];
        for (let i = 0; i < size; i++) {
            array.push([]);
        }
        return array;
    }

    return {
        init: init,
        rounds: () => { return rounds; },
        choices: () => { return choices; },
        nextChoice: () => { return nextChoice; },
        roundIndex: () => { return roundIndex; },
        currentRound: () => { return currentRound; },
        config: () => { return config; },
        saveConfig: saveConfig,
        reset: reset,
        choose: choose,
        dump: dump
    }
})();
