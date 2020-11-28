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

        if (window.location.hash === '#setup') {
            renderSetup();
        } else {
            renderStatus();
        }
    }

    function renderSetup() {
        let bodyTemplate = $('#setupTemplate').html()
        const renderData = {};
        let config = MODEL.config();
        if(config) {
            renderData.boys = config.startingList === 'boys';
            renderData.girls = config.startingList === 'girls';
            renderData.test = config.startingList === 'test';
            renderData.customNames = config.customNames;
            renderData.podiumSize = config.podiumSize;
        }

        $('#body').html(Mustache.render(bodyTemplate, renderData));
    }

    function renderStatus() {
        let rounds = MODEL.rounds();
        let choices = MODEL.choices();
        if (rounds.length) {

            let nextChoice = MODEL.nextChoice();

            let renderData = { rounds: [], choices:[], nextChoice: nextChoice };
            for (let i = 0; i < MODEL.config().podiumSize; i++) {
                let renderRound = {idx: i + 1};
                if(i < MODEL.roundIndex()) {
                    renderRound.names = rounds[i];
                } else {
                    renderRound.names = choices[i];
                }

                if(i === MODEL.roundIndex()) {
                    renderRound.choices = MODEL.currentRound();
                }
                renderData.rounds.push(renderRound);
            }
            let bodyTemplate = $('#statusTemplate').html()
            $('#body').html(Mustache.render(bodyTemplate, renderData));
        } else {
            renderSetup();
        }
    }

    function saveConfig() {
        let startingList = $('#startingList').val();
        let podiumSize = $('#podiumSize').val();
        let customNames = $('#customNames').val();
        MODEL.saveConfig({ startingList: startingList, podiumSize: podiumSize, customNames: customNames });
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