import React from "react"

import DragRangeModifyEachProp from "./Examples/DragRangeModifyEachProp.js"
import DragRangeTangleJS from "./Examples/DragRangeTangleJS.js"
import DragRangeSimplePercent from "./Examples/DragRangeSimplePercent.js"
import DragRangeHashProgressBar from "./Examples/DragRangeHashProgressBar.js"
import DragRangeCssHighlight from "./Examples/DragRangeCssHighlight.js"
import DragRangeAnalogStick from "./Examples/DragRangeAnalogStick.js"
import DragRangeKnobControl from "./Examples/DragRangeKnobControl.js"
import DragRangeSliderVertical from "./Examples/DragRangeSliderVertical.js"
import DragRangeHorizontalSliders from "./Examples/DragRangeHorizontalSliders.js"

export default () => {
  const rowStyle = {
    "backgroundColor": "#eee",
    "textAlign": "center",
    "margin": 10,
    "padding": 20,
    "boxShadow": "0px 5px 10px #888",
  }
  return (
    <div style={{ "textAlign": "center" }}>

      <div style={rowStyle}><DragRangeModifyEachProp /></div>
      <div style={rowStyle}><DragRangeTangleJS /></div>
      <div style={rowStyle}><DragRangeSimplePercent /></div>
      <div style={rowStyle}><DragRangeHashProgressBar /></div>
      <div style={rowStyle}><DragRangeCssHighlight /></div>
      <div style={rowStyle}><DragRangeAnalogStick /></div>
      <div style={rowStyle}><DragRangeKnobControl /></div>
      <div style={rowStyle}><DragRangeSliderVertical /></div>
      <div style={rowStyle}><DragRangeHorizontalSliders /></div>

    </div>
  )
}
