import React from "react"
import DragRange from "../DragRange.js"

class DragRangeImage extends React.Component {
  state = {
    "valueX": 50,
    "valueY": 50,
  }

  onChange = (key, e) => {
    const value = e && e.target ? e.target.value : e
    const s = {}
    s[key] = value
    this.setState (s)
  }

  render = () => {
    const imageStyle = {
      "width": 200,
      "height": 100,
      "borderRadius": "10%",
      "border": "3px solid #000",
      "backgroundImage": `radial-gradient(circle at ${
        this.state.valueX}% ${
        this.state.valueY}%, cyan, blue)`,
      "display": "block",
      "marginLeft": "auto",
      "marginRight": "auto",
    }

    return (
      <div>
        Detection of both X (width) and Y (height) axis
        <div style={{ "padding": 30 }}>
          <DragRange
            percent yAxis
            getTarget={() => this.target}
            default={50}
            value={this.state.valueY}
            onChange={(valueY) => this.setState ({ valueY })}
          >
            <DragRange
              percent
              getTarget={() => this.target}
              default={50}
              value={this.state.valueX}
              onChange={(valueX) => this.setState ({ valueX })}
            >
              <div ref={(ref) => {this.target = ref}} style={imageStyle} />
            </DragRange>
          </DragRange>
        </div>

        ({this.state.valueX}%, {this.state.valueY}%)

      </div>
    )
  }
}

export default DragRangeImage
