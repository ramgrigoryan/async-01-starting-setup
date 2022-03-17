const button = document.querySelector("button");
const output = document.querySelector("p");

const currentLocation = (optn) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        resolve(success);
      },
      optn
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    resolve("Promise is made");
    setTimeout(() => {
      console.log("Timeout is set");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let position;
  currentLocation().then((data) => {
    position = data;
    return setTimer(2000);
  }).then(data=>{
    console.log(data,position);
  });
  console.log("Clicked!");
}

button.addEventListener("click", trackUserHandler);
