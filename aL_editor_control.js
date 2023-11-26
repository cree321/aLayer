function setupPaint() {
  const shadowDOM = this.shadowRoot;
  const aL_canvas_element = shadowDOM.querySelector(".aL-canvas");
  const context = aL_canvas_element.getContext("2d");

  function beginPainting(event) {
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath();
    if(event.isPrimary) {
      context.moveTo(event.clientX, event.clientY);
    }
  }
  function resumePainting(event) {
    if(event.isPrimary) {
      context.moveTo(event.clientX, event.clientY);
    }
  }
  function draw(event) {
      event.preventDefault();
    context.lineTo(event.clientX, event.clientY);
  }
  function endPainting(event) {
    context.stroke();
  }
  aL_canvas_element.onpointerdown = beginPainting;
  aL_canvas_element.onpointerenter = resumePainting;
  aL_canvas_element.onpointermove = draw;
  aL_canvas_element.onpointerup = endDrawing;
  aL_canvas_element.onpointerleave = endDrawing;
}
