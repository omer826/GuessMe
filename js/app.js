'use strict';



$(document).ready(init);

function init() {
    createQuests();

}

function renderModal(isWin, ans) {
    var elModal = $('.modal');
    var elBodyModal = $('.modal-body');
    var strHtml = '';
    if (isWin) {
        strHtml = `<p> <h4 >You right '${ans}' is the answer</h4></p>`
        elBodyModal.html(strHtml);
    } else {

    }


    elModal.show();

}
function CloseModal() {
    $('.modal').hide();
}

function startGuessing() {
    $('.gameStart').hide();
    renderQuest();
    $('.gameQuest').show();
}

function renderQuest() {
    $('.gameQuest > h2').text(gCurrQuest.txt);
}
function renderAns() {
    $('.gameQuest > h2').text(gCurrQuest.yes.txt);
}

function userResponse(res) {
    var isParent = isChildless(gCurrQuest);
    // If this node has no children
    console.log('res', res)
    if (isParent) {
        if (res === 'yes') {
            // alert('Yes, I knew it!');
            $('.gameQuest').hide();
            renderModal(true, gCurrQuest.txt);
            restartGame();
        } else {
            // alert('I dont know...teach me!')
            $('.gameQuest').hide();
            $('.gameNewQuest').show()
        }
    } else {
        gLastRes = res;
        gPrevQuest = gCurrQuest;
        gCurrQuest = gCurrQuest[res]
        renderQuest();
    }
}

function addGuess() {

    var inputPersonName = $('#newGuess').val();
    var inputQst = $('#newQuest').val();

    gCurrQuest = createQuest(inputQst)
    gCurrQuest.yes = createQuest(inputPersonName);
    gCurrQuest.no = gPrevQuest[gLastRes];
    gPrevQuest[gLastRes] = gCurrQuest;

    saveQsts();

    restartGame();
    inputPersonName = $('#newGuess').val(' ');
    inputQst = $('#newQuest').val(' ');
}


function restartGame() {
    $('.gameNewQuest').hide();
    $('.gameStart').show();
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
    gLastRes = null;
}



