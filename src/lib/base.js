//  copyright lexilogos.com

function convertUnicode(input) {
    return input.replace(/\\u(\w{4,4})/g,function(a,b) {
        var charcode = parseInt(b,16);
        return String.fromCharCode(charcode);
    });
}

function alpha(item) {    

    var input = document.conversion.saisie;
    if (document.selection) {
        input.focus();
        let range = document.selection.createRange();
        range.text = convertUnicode(item);
        range.select();
    }
    else if (input.selectionStart || input.selectionStart === '0') {
        var startPos = input.selectionStart;
        var endPos = input.selectionEnd;
        var cursorPos = startPos;
        var scrollTop = input.scrollTop;
        var baselength = 0;
        input.value = input.value.substring(0, startPos)
            + item
            + input.value.substring(endPos, input.value.length);
        cursorPos += item.length;
        input.focus();
        input.selectionStart = cursorPos;
        input.selectionEnd = cursorPos;
        input.scrollTop = scrollTop;
    }
    else {
        input.value += item;
        input.focus();
    }
}

function copier() {
    document.conversion.saisie.focus();
    document.conversion.saisie.select();
    let CopiedTxt = document.selection.createRange();
    CopiedTxt.execCommand("Copy");
}

function copy() {
    let textRange = document.conversion.saisie.createTextRange();
    textRange.execCommand("Copy");
    textRange = "";
}

var car;

function annuler() {
    car = document.conversion.saisie.value;
    car = car.replace(/\u200b/g, "");
    document.conversion.saisie.value = car;
}

export {
    annuler,
    copy,
    copier,
    alpha,
    convertUnicode
}