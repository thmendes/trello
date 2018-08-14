var List = function(cards, labels){
    this.cards = cards
    this.labels = labels
}

List.prototype.countCards = function()
{
    return this.cards.length
}

module.exports = List