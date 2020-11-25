var APPLICATION = (function () {

    function init() {
        MODEL.init();

        window.addEventListener('hashchange', function () {
            render()
        }, false);

        render();

    }

    function render() {

        let navTemplate = $('#navTemplate').html();
        $('#nav').html(Mustache.render(navTemplate, {}));

        let hash = window.location.hash;
        if (!hash) {
            hash = "#choose";
        }

        if (hash === '#setup') {
            renderSetup();
        } else if (hash === '#status') {
            renderStatus();
        } else if (hash === '#choose') {
            renderChoice();
        } else {
            renderSetup();
        }
    }

    function renderSetup() {
        let bodyTemplate = $('#setupTemplate').html()
        $('#body').html(Mustache.render(bodyTemplate, {}));
    }

    function renderStatus() {
        let rounds = MODEL.rounds();
        let choices = MODEL.choices();
        if (rounds.length) {
            let renderData = { rounds: [], choices:[] };
            rounds.forEach((round, i) => {
                renderData.rounds.push({ names: round, idx: i + 1 })
            });
            choices.forEach((round, i) => {
                renderData.choices.push({ names: round, idx: i + 1 })
            });
            let bodyTemplate = $('#statusTemplate').html()
            $('#body').html(Mustache.render(bodyTemplate, renderData));
        } else {
            renderSetup();
        }
    }

    function renderChoice() {
        let nextChoice = MODEL.nextChoice();
        if (!nextChoice) {
            renderStatus();
        } else {
            let bodyTemplate = $('#choiceTemplate').html()
            $('#body').html(Mustache.render(bodyTemplate, nextChoice));
        }
    }

    function saveConfig() {
        let startingList = $('#startingList').val();
        let podiumSize = $('#podiumSize').val();
        MODEL.saveConfig({ startingList: startingList, podiumSize: podiumSize });
        render();
    }

    function reset() {
        MODEL.reset();
        render();
    }

    function choose(name) {
        MODEL.choose(name);
        render();
    }

    return {
        init: init,
        saveConfig: saveConfig,
        reset: reset,
        choose: choose,
    };

})();