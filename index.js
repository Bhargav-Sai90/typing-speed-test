let container = document.getElementById('speedTypingTest');
let timer = document.getElementById('timer');
let quote = document.getElementById('quoteDisplay');
let text = document.getElementById('quoteInput');
let result = document.getElementById('result');
let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');
let load = document.getElementById('spinner');


let count = 0;
timer.textContent = String(count) + " " + 'seconds';
let countdown = setInterval(function() {
    count += 1;
    timer.textContent = String(count) + " " + 'seconds';
}, 1000);
let option = {
    method: 'GET',
};
let url = 'https://apis.ccbp.in/random-quote';
fetch(url, option)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        quote.textContent = data.content;
    });

function checkQuote() {
    clearInterval(countdown);
    if (text === "") {
        result.textContent = "You typed  incorrect sentence";
    } else {
        if (quote.textContent === text.value) {
            result.textContent = 'You typed in ' + timer.textContent;
        } else {
            result.textContent = "You typed  incorrect sentence";
        }
    }
}

submitBtn.addEventListener('click', checkQuote);

function resetQuote() {
    load.classList.remove('d-none');
    let count = 0;
    timer.textContent = String(count) + " " + 'seconds';
    let countdown = setInterval(function() {
        count += 1;
        timer.textContent = String(count) + " " + 'seconds';
    }, 1000);
    text.value = "";
    result.textContent = "";
    let option = {
        method: 'GET',
    };
    let url = 'https://apis.ccbp.in/random-quote';
    fetch(url, option)
        .then(function(response) {
            load.classList.add('d-none');
            return response.json();
        })
        .then(function(data) {
            quote.textContent = data.content;
        });
}

resetBtn.addEventListener('click', resetQuote);