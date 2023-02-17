const joinNow = new Date().toLocaleDateString('en-us', {weeday:'long', year:'numeric', month:'long', day:'numeric'});
const joinTime = new Date().toLocaleTimeString();
const hidden = document.getElementById("hidden");
hidden.value = `Date & Time: ${joinNow} ${joinTime}`;
