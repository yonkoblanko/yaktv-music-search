const $tracks = $('#tracks');
const $albumName = $('#albumName')
const $artistNames = $('#artistNames')
const $imageUrl = $('#imageUrl')
const $isrc = $('#isrc')

let musicData;
$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://musicapi13.p.rapidapi.com/search",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "X-RapidAPI-Key": "d81fdfe6a0msh4fe16c3505f4b94p17ccddjsnfb8ca76471cf",
            "X-RapidAPI-Host": "musicapi13.p.rapidapi.com"
        },
        "processData": false,
        "data": JSON.stringify({
            "track": $("#track").val(),
            // "artist": ,
            "type": "track",
            "sources": [
                "spotify",
                "youtube"
            ]
            
        })
        
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        render(response);
    });
}

function render(response) {
    const data = response.tracks[0].data;
    $tracks.text(data.name);
    $albumName.text(data.albumName);
    $artistNames.text(data.artistNames);
    $imageUrl.text(data.imageUrl);
    }