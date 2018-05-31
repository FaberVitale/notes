// for IE 11
if (typeof Number.isNaN === "undefined") {
  Number.isNaN = function isNaN(val) {
    /* eslint-disable-next-line no-self-compare */
    return val !== val;
  };
}

/* dont polyfill in an env that does not have window */
if (
  typeof window !== "undefined" &&
  window.requestAnimationFrame === "undefined"
) {
  window.requestAnimationFrame =
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      var bindCallback = function() {
        callback.call(null, Date.now());
      };

      window.setTimeout(bindCallback, 1000 / 60);
    };
}
