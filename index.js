"use strict";

const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

//  Prompt the user to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Whoops, error hare", error.message);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;

  // Start Pictur in Pictur
  await videoElement.requestPictureInPicture();

  // Reset Button
  button.disabled = false;
});

selectMediaStream();
