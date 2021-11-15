<script>
</script>


<div class="flex flex-col items-center">
  <h2>This is a picture</h2>
  <img class="card-image logo-img1" src={`/img/context_logo1.png`} alt="context coding logo" />
</div>

<div>
  <!-- <iframe height="200" src={`${envars.PATH_TO_VIDEOS}/multi-cursor.mp4`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="vid-test" allowfullscreen></iframe> -->
</div>

<style>
@media screen and (min-width: 0px) and (max-width: 400px) {
  .logo-img1 {
    height: 100px;
  }
}
@media screen and (min-width: 401px) and (max-width: 700px) {
  .logo-img1 {
    height: 500px;
  }
}
@media screen and (min-width: 701px) {
  .logo-img1 {
    height: 800px;
  }
}

.vid-test {
  margin-top: 20px;
  border-radius: 30px;
}

</style>