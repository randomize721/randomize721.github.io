<?php

    function do_curl($url)
    {
        $curl = curl_init();
        
        $curl_options = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => TRUE,
        );
        
        curl_setopt_array($curl, $curl_options);
        $result = curl_exec($curl);
        curl_close($curl);
    
        return json_decode($result,True);
    }

    // YOUTUBE INFO
    $result = do_curl('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCJgKoSpz2fSeu_KNFC_uqtw&key=AIzaSyDW7AC7ioEViIWrL2e0vDg47-53aS71eOg');
    $youtube_profile_pic    = $result['items'][0]['snippet']['thumbnails']['high']['url'];
    $youtube_channel_name   = $result['items'][0]['snippet']['title'];
    $subscriber_count       = $result['items'][0]['statistics']['subscriberCount'];
    $youtube_channel_desc   = $result['items'][0]['snippet']['description'];

    // YOUTUBE LATEST VIDEO
    $result = do_curl('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDW7AC7ioEViIWrL2e0vDg47-53aS71eOg&channelId=UCJgKoSpz2fSeu_KNFC_uqtw&maxResults=3&order=date&part=snippet');
    $latest_youtube_videos   = $result['items'];

    // echo $subscriber_count;
    // var_dump($result);
?>