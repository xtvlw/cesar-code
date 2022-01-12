const alphabet = "abcdefghijklmnopqrstuvwxyz"


function cript() {

    let textIn = document.getElementById("text").value.toLowerCase()
    let key = parseInt(document.getElementById("key").value)
    let elemResult = document.getElementById("result")
    let result = ''

    if (textIn == '' || isNaN(key)) {
        alert("inset data!")
    } else {
        for (let i = 0 ; i < textIn.length ; i++){
            let caracterIndex = alphabet.indexOf(textIn[i])

            if (caracterIndex == -1) {
                result += textIn[i]
            } else if (caracterIndex + key >= alphabet.length) {
                caracterIndex -= alphabet.length
                result += alphabet[caracterIndex + key]
            }
            else {
                result += alphabet[caracterIndex + key]
            }
        }
        elemResult.innerHTML = `${textIn} cripted in cesar code key=${key} is <strong>${result}</strong>`
    }
}


function decript() {

    let textIn = document.getElementById("text").value.toLowerCase()
    let key = parseInt(document.getElementById("key").value)
    let elemResult = document.getElementById("result")
    let result = ''

    if (textIn == '' || isNaN(key)) {
        alert("insert data!")
    } else {
        for (let i = 0 ; i < textIn.length ; i++){
            let caracterIndex = alphabet.indexOf(textIn[i])

            if (caracterIndex == -1) {
                result += textIn[i]
            } else if (caracterIndex - key < 0) {
                caracterIndex += alphabet.length
                result += alphabet[caracterIndex - key]
            }
            else {
                result += alphabet[caracterIndex - key]
            }
        }
        elemResult.innerHTML = `${textIn} decripted in cesar code key=${key} is <strong>${result}</strong>`
    }
}

