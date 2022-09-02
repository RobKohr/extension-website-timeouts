/* eslint-disable quotes */
// Type your JavaScript code here.
const limitedSites = [
  "quora",
  "amazon",
  "facebook",
  "reddit",
  "youtube",
  "twitter",
  "thingiverse",
];

let isLimitedSite = false;
for (let site of limitedSites) {
  // eslint-disable-next-line no-undef
  if (document.location.href.includes(site)) {
    isLimitedSite = site;
    console.log({ siteMatch: site });
  }
}
console.log({ isLimitedSite });

let showCoverRan = false;
if (isLimitedSite) {
  setTimeout(showCover, 1000);
}

setInterval(() => {
  console.log(document.documentElement.scrollTop, showCoverRan);
  if (!showCoverRan && document.documentElement.scrollTop > 5000) {
    showCover();
  }
}, 2000);

function showCover() {
  showCoverRan = true;

  document.querySelector("#hide-overlay").style.display = "block";
  document.querySelector("#show-page-button").style.display = "none";
  document.querySelector("#show-page-countdown").style.display = "block";
  if (
    document.querySelector(".ytp-play-button") &&
    document
      .querySelector(".ytp-play-button")
      .attributes.title.value.includes("Pause")
  ) {
    //     document.querySelector(".ytp-play-button").click()
  }
  const waitPeriod = 20;
  let startTime = new Date().getTime();
  let endTime = startTime + waitPeriod * 1000;
  const intervalId = setInterval(() => {
    const now = new Date().getTime();
    document.querySelector("#show-page-countdown").textContent = Math.floor(
      (endTime - now) / 1000
    );
    if (now > endTime) {
      document.querySelector("#show-page-button").style.display = "block";
      document.querySelector("#show-page-countdown").style.display = "none";
      clearInterval(intervalId);
    }
  }, 1000);
  console.log({ intervalId });
}

function showPage() {
  document.querySelector("#hide-overlay").style.display = "none";
  const minutesTillShowsAgain = 3;
  if (
    document.querySelector(".ytp-play-button") &&
    document
      .querySelector(".ytp-play-button")
      .attributes.title.value.includes("Play")
  ) {
    document.querySelector(".ytp-play-button").click();
  }
  setTimeout(() => {
    showCover();
  }, minutesTillShowsAgain * 60 * 1000);
}
