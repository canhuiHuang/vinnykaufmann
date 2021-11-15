$(document).ready(function () {
  $(document).on('click', '#myModal', function () {
    modal.style.display = "block";
  })
  $(document).on('click', '#myModal', function () {
    modal.style.display = "block";
  })

  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
})
