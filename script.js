var toggleButton = document.getElementById('toggle');
var get = document.getElementById('get');
toggleButton.addEventListener("click", function () {
    if (get.style.display === 'none') {
        get.style.display = 'block';
    }
    else {
        get.style.display = 'none';
    }
});
