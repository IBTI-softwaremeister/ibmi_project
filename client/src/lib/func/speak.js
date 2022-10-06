export const speak = (text) => {
  window.speechSynthesis.cancel();

  const speechMsg = new SpeechSynthesisUtterance();
  speechMsg.rate = 1;
  speechMsg.pitch = 1;
  speechMsg.lang = "ko-KR";
  speechMsg.text = text;

  window.speechSynthesis.speak(speechMsg);
};
