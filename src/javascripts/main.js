(function () {

  // switch 'no-js' to 'has-js' class on body
  //document.body.classList.toggle('has-js');
  document.body.className = 'has-js';

  // content slider
  contentSlider = function (val, opt1, opt2) {

    // grab elements append and append class to show arrows
    var elm = document.getElementsByClassName(val);
    for (var i = 0; i < elm.length; i++) {
      var arrow = document.createElement('span');
      arrow.className = opt1;
      elm[i].appendChild(arrow);
    }

    // toggle content fucntion
    function toggleContent(evt) {
      if (evt.target && evt.target.className == val) {
        var content = evt.target.nextElementSibling;
        if (content.style.display == 'none') {
          content.style.display = 'block';
          evt.target.lastChild.className = opt2;
        } else {
          content.style.display = 'none';
          evt.target.lastChild.className = opt1;
        }
      }
    }

    // click event listener
    document.addEventListener('click', toggleContent, true);
  };
})();
