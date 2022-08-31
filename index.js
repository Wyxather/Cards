var totalCards = 0;

function setTotalCards(count)
{
    document.getElementById("info").innerHTML =
    '<h1 class="text-light">' + count + '</h1>'
}

function createCard(parent, group, index)
{
    var card = document.createElement("div");
    card.className = "card shadow";
    card.innerHTML = '<img src="' + "https://raw.githubusercontent.com/hanhaechi/playing-cards/master/" + group + "_" + index + ".png" + '">';
    card.onclick = function()
    {
        if (this.classList.toggle("card-closed")) {
            totalCards--;
        }
        else {
            totalCards++;
        }
        setTotalCards(totalCards);
    }
    parent.appendChild(card);
    totalCards++;
}

window.onload = function()
{
    const cards = ["diamonds", "clubs", "hearts", "spades"];
    const symbols = ["J", "Q", "K", "A"];
    for (const card of cards) {
        var element = document.getElementById(card);
        for (var i = 2; i <= 10; i++)
            createCard(element, card, i);
        for (const symbol of symbols)
            createCard(element, card, symbol);
    }
    setTotalCards(totalCards);
}