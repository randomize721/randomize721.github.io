<?php
  include('template/header.php');
?>
<div class="container">
    <h1 class="text-center my-3">Movies</h1>
    <div class="row my-3 justify-content-center">
        <div class="col-md-10">
            <form action="">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search Your Movie Here..." id="form-search-movie">
                    <button class="btn btn-primary" type="submit" id="btn-search-movie">Search</button>
                </div>
            </form>
        </div>
    </div>
    <hr>
    <div class="row" id="content">
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="MovieDetailModal" tabindex="-1" aria-labelledby="MovieDetailModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Movie Detail</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<script src="js/omdb-api.js"></script>
<?php
  include('template/footer.php');
?>