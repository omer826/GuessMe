'use strict';

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
var gLastRes = null;
var QSTS_KEY = 'qsts';

function createQuests(){

    var qstsTree = {};
    qstsTree = loadFromStorage(QSTS_KEY);

    if (!qstsTree || qstsTree.length === 0) {
        qstsTree = {};
        qstsTree = createQuest('Male?');
        qstsTree.yes = createQuest('Gandhi');
        qstsTree.no = createQuest('Rita');
    }
    gQuestsTree = qstsTree
    gCurrQuest = gQuestsTree;
        saveQsts();
      
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}
function isChildless(node) {
    return (node.yes === null && node.no === null)
}
function saveQsts() {
    saveToStorage(QSTS_KEY, gQuestsTree);
}

function getQsts() {
    var qsts = loadFromStorage(QSTS_KEY);
    return qsts;
}






function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

 