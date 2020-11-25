var MODEL = (function () {

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
        if (config.startingList === 'boys') {
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
        saveConfig: saveConfig,
        reset: reset,
        choose: choose,
        dump: dump
    }
})();
