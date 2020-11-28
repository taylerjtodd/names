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
            hash = "#";
        }

        if (hash === '#setup') {
            renderSetup();
        } else if (hash === '#') {
            renderStatus();
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