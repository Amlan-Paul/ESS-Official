(function() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Oct 03, 2021 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      //seconds
    }, 0)
}());









(function() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Oct 03, 2021 23:59:59",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("day").innerText = Math.floor(distance / (day)),
        document.getElementById("hour").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minute").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("second").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline02"),
          countdown = document.getElementById("countdowns"),
          content = document.getElementById("content02");

        headline.innerText = "";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      //seconds
    }, 0)
}());

