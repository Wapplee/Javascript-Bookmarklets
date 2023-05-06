/*press ' to start/stop. does not work on google.com related websites (docs.google.com) because google prevents it (stinky) */
var listening = false;
var listened = [];
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 222) {
    listening = !listening;
    if (!listening) {
      var endstr = listened.join("");
      listened = [];
      alert(endstr);
    }
  } else if (listening) {
    if (event.keyCode == 8) {
      listened.pop();
    } else if (event.key.length == 1) {
      listened.push(event.key);
    }
  }
});
