var React = require('react')
var ReactDOM = require('react-dom')

var DragRange = React.createClass({
  getInitialState() {
    return {
      isDragging: false,
      startX: 0,
      startY: 0,
      valueX: this.treat(0, 0, this.props.initialX),
      valueY: this.treat(0, 0, this.props.initialY),
    }
  },

  getDefaultProps() {
    return {
      pixels: 50,
      rate: 1.1,
      min: 3,
      max: 6,
      initialX: 4,
      initialY: 4,
      decimals: 2,
      cursor: 'all-scroll'
    }
  },

  setIsDragging(val) {
    return function(evt) {
      var s = {isDragging: val}
      if (val) {
        s.startX = evt.clientX
        s.startY = evt.clientY
      }
      this.setState(s)
    }.bind(this)
  },

  clamp(min, max, value) {
    return value < min ? min : value > max ? max : value
  },

  treat(client, start, initial) {
    var delta = client -start
    var val = Math.floor(delta/this.props.pixels)*this.props.rate +initial
    var clamped = this.clamp(this.props.min, this.props.max, val)
    return clamped.toFixed(this.props.decimals)
  },

  trackDelta(evt) {
    if ( ! this.state.isDragging) return
    var s = {}
    var valueX = this.treat(evt.clientX, this.state.startX, this.props.initialX)
    var valueY = this.treat(evt.clientY, this.state.startY, this.props.initialY)
    if (valueX != this.state.valueX) s.valueX = valueX
    if (valueY != this.state.valueY) s.valueY = valueY
    this.setState(s)
  },

  startSetPercent(e) {
    this.isSettingPercent = true
    this.setPercent(e)
  },

  setPercent(e) {
    if ( ! this.isSettingPercent)
      return
    const target = ReactDOM.findDOMNode(this.refs['range'])
    const rect = target.getBoundingClientRect()
    const percent = (e.clientX -rect.left)*100/rect.width
    
    this.setState({percent})
  },

  endSetPercent(e) {
    this.isSettingPercent = false
  },

  handleMouseMove(e) {
    this.trackDelta(e)
    this.setPercent(e)
  },

  handleMouseUp(e) {
    this.endSetPercent()
    this.setIsDragging(false)(e)
  },

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove)
    document.addEventListener('mouseup', this.handleMouseUp)
  },

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove)
    document.removeEventListener('mouseup', this.handleMouseUp)
  },

  render() {
    return (
      <div>
        percent: {this.state.percent} %
        <br/>
        isDragging: {JSON.stringify(this.state.isDragging)}
        <br/>
        ({this.state.valueX}, {this.state.valueY})
        <div onMouseDown={this.setIsDragging(true)}>
          <span style={{cursor: this.props.cursor}}
            onMouseDown={this.startSetPercent}
          >
            <span ref='range'>
              {this.props.children}
            </span>
          </span>
        </div>
      </div>
    )
  }
})

module.exports = DragRange
