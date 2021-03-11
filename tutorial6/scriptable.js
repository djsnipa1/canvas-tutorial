// insert your Pocket consumer key and access token
let pocketConsumerKey = "96009-bab116d5de0a8c32c7183f03"
let pocketAccessToken = "6dc60d01-b962-8d62-509d-f16085"

// the pocket base url
let pocketUrl = "https://getpocket.com/v3/get?"

// the amount of bookmarks to fetch (starting with the latest backwards)
let amountOfBookmarksToFetch = 10

let widget = new ListWidget()
// widget layout
widget.setPadding(0, 5, 3, 5)
widget.backgroundColor = new Color("#000000")

// widget.bottomAlignContent()

await getPocketItems()
await loadPocketIcon()

Script.setWidget(widget)
Script.complete()

// query the getPocket API
async function getPocketItems() { 
    let urlParams = "consumer_key=" + pocketConsumerKey + "&access_token=" + pocketAccessToken + "&count=" + amountOfBookmarksToFetch
    let req = new Request(pocketUrl + urlParams)
    req.headers = {"Content-Type":"application/json"}
    let result = await req.loadJSON()
    
    var pocketItems = []; 
    for(var i in result.list) 
      pocketItems.push(result.list[i]);

    let shuffledItem = pocketItems[getRandomNumber(1,amountOfBookmarksToFetch) - 1]
    let title = shuffledItem.resolved_title
    let titleText = widget.addText(title)
//     titleText.applySubheadlineTextStyling()
    titleText.textColor = Color.white()
    titleText.textSize = 13
    titleText.lineLimit = 2
    titleText.leftAlignText()
    
    let excerpt = shuffledItem.excerpt
    let excerptText = widget.addText(excerpt)
//     excerptText.applySubheadlineTextStyling()
    excerptText.textColor = Color.gray()
    excerptText.textSize = 12
    excerptText.lineLimit = 4
    excerptText.leftAlignText()

    let source = ""
    if(shuffledItem.domain_metadata != null) {
        source = "🔗 " + shuffledItem.domain_metadata.name + " • "
    }
    let dateAdded = new Date(shuffledItem.time_added * 1000)
    let df = new DateFormatter()
    df.useMediumDateStyle()
    df.useShortTimeStyle()
    let strDate = df.string(dateAdded)
    let dateAddedText = widget.addText(source + "📅 " + strDate)
    dateAddedText.textColor = Color.white()
    dateAddedText.textSize = 10
    dateAddedText.centerAlignText()

    widget.url = shuffledItem.resolved_url
}

// random number, min and max included 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// helper function to download the icon
async function loadPocketIcon() {
    let req = new Request("https://www.pngkit.com/png/full/230-2308488_pocket-png.png")
    let image = await req.loadImage()
    let widgetImage = widget.addImage(image)
    widgetImage.imageSize = new Size(60,20)
    widgetImage.rightAlignImage()
}

console.log(getPocketItems());