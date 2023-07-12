
var quotes = [
    `“Be yourself; everyone else is already taken.”`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    '“Be the change that you wish to see in the world.”',
    '“You only live once, but if you do it right, once is enough.”',
    `“In three words I can sum up everything I've learned about life: it goes on.”`,
    `“If you tell the truth, you don't have to remember anything.”`,
    `“To live is the rarest thing in the world. Most people exist, that is all.”`,
    `There's time for you to be all that you want to be`,
    `If you never go, You'll never know`,
    `Dreams don't work unless YOU DO`,
    `Enjoy the process as much as the outcome`,
    `Believe in yourself and you'll be unstoppable`,
    '“Always forgive your enemies; nothing annoys them so much.”',
    `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    `“We accept the love we think we deserve.”`,
]

function generateQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('generated').innerHTML = quotes[randomNumber];
}