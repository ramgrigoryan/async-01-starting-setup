const button = document.querySelector("button");
const output = document.querySelector("p");

const currentLocation = (optn) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
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

async function trackUserHandler() {
  let posData= await currentLocation()
  let timer = await setTimer(2000);
  console.log(posData,timer);
  console.log("Clicked!");
}

button.addEventListener("click", trackUserHandler);
