const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (error) => {
      console.log(error);
    }
  );
  console.log("Clicked!");
}

button.addEventListener("click", trackUserHandler);
