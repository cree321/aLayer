var last_target;
var last_event_deltaT;
function doubleTapFocus(event) {
  const elapsed_deltaT = Date.now() - last_event_deltaT;
  if((event.target == last_target) && (elapsed_deltaT < 500)) {
    const aL_editor_element = document.querySelector("al-editor");
    aL_editor_element.style.display = "inline-block";
  } else{
    last_target = event.target;
    last_event_deltaT = Date.now();
  }
}

window.addEventListener("load", (e) => {
  if(!document.querySelector("al-editor")) {
    console.log("added")
    document.body.innerHTML += "<al-editor></al-editor>";
  }
  document.addEventListener("pointerup", doubleTapFocus);
});