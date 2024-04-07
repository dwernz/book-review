// Copyright date functionality
const date = new Date();
const year = date.getFullYear();

const copyrightYear = document.getElementById('year');

copyrightYear.innerText = year;
// Copyright date functionality - END



// Random Quote functionality
const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("quote-author");
const quoteButton = document.getElementById("quote-button");

const quotesLength = quotes.length;

quoteButton.addEventListener('click', nextQuote);
quoteButton.addEventListener('load', nextQuote);

window.onload = function () {
    const randomNumber = generateRandomNumber();

    quote.innerText = quotes[randomNumber].quote;
    quoteAuthor.innerText = quotes[randomNumber].author;
}



function nextQuote() {
    const randomNumber = generateRandomNumber();

    quote.innerText = quotes[randomNumber].quote;
    quoteAuthor.innerText = quotes[randomNumber].author;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * quotesLength);
}

// Random Quote functionality - END