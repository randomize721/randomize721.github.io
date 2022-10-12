<?php
  include('php/youtube_api.php');
  include('template/header.php');
?>
<div class="container">
    <div class="row my-3  justify-content-center text-center">
        <div class="col-md-12 my-3">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" width="100">
            <h1>Youtube</h1>
        </div>
    </div>
    <div class="row my-3 justify-content-center">
        <div class="col-md-3 mb-3 text-center youtube-profile">
            <img src="<?= $youtube_profile_pic ?>" class="rounded-circle">
        </div>
        <div class="col-md-5">
            <ul class="list-group">
                <li class="list-group-item">
                    <h1 class="mb-0"><?= $youtube_channel_name ?></h1>
                    <div class="mb-3"><?= $subscriber_count ?> Subscribers</div>
                    <div class="g-ytsubscribe" data-channelid="UCJgKoSpz2fSeu_KNFC_uqtw" data-layout="default" data-count="default"></div>
                </li>
                <li class="list-group-item">
                <p><?= $youtube_channel_desc ?></p>
                </li>
            </ul>
        </div>
    </div>
    <div class="row my-3 text-center">
        <h1>My Latest Video</h1>
        <?php
            foreach ($latest_youtube_videos as $video) {
        ?>
        <div class="col-md-4">
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/<?= $video['id']['videoId'] ?>?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
        </div>
        <?php
            }
        ?>
    </div>
    <a href="https://www.youtube.com/channel/UCJgKoSpz2fSeu_KNFC_uqtw" class="btn btn-danger w-100" target="_blank"><i class="fas fa-home "></i><br> Visit Channel</a>
</div>
<script src="https://apis.google.com/js/platform.js"></script>
<?php
  include('template/footer.php');
?>