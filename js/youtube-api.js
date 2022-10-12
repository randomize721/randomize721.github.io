const channelId = 'UCJgKoSpz2fSeu_KNFC_uqtw';
const apiKey = 'AIzaSyDW7AC7ioEViIWrL2e0vDg47-53aS71eOg';

function appendChannelData (data) {
    let youtube_profile_pic    = data.snippet.thumbnails.high.url;
    let youtube_channel_name   = data.snippet.title;
    let subscriber_count       = data.statistics.subscriberCount;
    let youtube_channel_desc   = data.snippet.description;

    $("#channel-pp").attr("src",youtube_profile_pic);
    $("#channel-name").html(youtube_channel_name);
    $("#channel-subs").html(subscriber_count+' Subscribers');
    $("#channel-desc").html(youtube_channel_desc);
}

function appendLatestVideos (data) {
    let latestVideos = '';
    $.each(data, (i,video) => {
        latestVideos += `
            <div class="col-md-4">
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/`+video.id.videoId+`?rel=0" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>
        `;
    });
    $("#latest-videos").html(latestVideos);
}

function findChannelDetail () {

    $.ajax({
        type: 'get',
        url: 'https://www.googleapis.com/youtube/v3/channels/',
        dataType: 'json',
        data: {
            'part' : 'snippet,statistics',
            'id' : channelId,
            'key' : apiKey
        },
        success: function (response) {
            appendChannelData(response.items[0]);
        }
    });
}

function findLatestVideo () {

    $.ajax({
        type: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search/',
        dataType: 'json',
        data: {
            'part' : 'snippet',
            'channelId' : channelId,
            'key' : apiKey,
            'maxResults' : 3,
            'order' : 'date'
        },
        success: function (response) {
            appendLatestVideos(response.items);
        }
    });
}

$(document).ready(() => {
    findChannelDetail ();
    findLatestVideo ();
});