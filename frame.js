const Nanocomponent = require('nanocomponent')
const html = require('nanohtml');
const css = require('sheetify')
const style = css('./frame.css')

class Frame extends Nanocomponent {

  constructor () {
    super()

    this.MAXCHARS = 13;
    const offsets = new Map;
    offsets.set(1, "40%");
    offsets.set(2, "35%");
    offsets.set(3, "25%");
    offsets.set(4, "20%");
    offsets.set(5, "15%");
    offsets.set(6, "15%");
    offsets.set(7, "15%");
    offsets.set(8, "15%");
    offsets.set(9, "15%");
    offsets.set(10, "16%");
    offsets.set(11, "15%");
    offsets.set(12, "12%");
    offsets.set(13, "10%");

    this.offsets = offsets;

    const sizes = new Map;
    sizes.set(1, '12px')
    sizes.set(2, '10px')
    sizes.set(3, '10px')
    sizes.set(4, '9px')
    sizes.set(5, '9px')
    sizes.set(6, '8px')
    sizes.set(7, '6px')
    sizes.set(8, '6px')
    sizes.set(9, '5px')
    sizes.set(10, '4px')
    sizes.set(11, '4px')
    sizes.set(12, '4px')
    sizes.set(13, '4px')

    this.sizes = sizes;

    this.handleInput = this.handleInput.bind(this);
  }




  handleInput (e) {
    let name = e.target.value;
    name = name.slice(0,this.MAXCHARS);
    const textPath = $('#myTextPath')
    textPath.attr("startOffset", this.offsets.get(name.length));
    textPath.css("fontSize", this.sizes.get(name.length))
    textPath.html(name)
  }

  createElement (name) {
  return html`
  <div>
  <svg class="${style}" width="150px" height="150px" viewBox="0 0 40 40">
    <defs>
    <pattern id="image" patternUnits="userSpaceOnUse" width="45px" height="45px" x="0" y="0">
      <image xlink:href="portrait.png" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMinYMin slice"/>
    </pattern>
    </defs>
    <path id="curve" fill="transparent" d="M 0,35 Q 20,40 40,35" />
    <path
    class="track"
    fill="url(#image)"
    stroke-width="0.25"
    d="M 0,5 Q 20,0 40,5 L 40,35 Q 20,40 0,35 L 0,5 Z" />
    <circle  class="marker2" r="1" stroke-width="0.25" stroke="black" fill="orange" />
    <circle class="marker2b" r="1" stroke-width="0.25" stroke="black" fill="red" />
    <text>
      <textPath id='myTextPath' startOffset="0%" stroke='1' xlink:href="#curve">
      </textPath>
    </text>
   </svg>
   <input id="inputName" type="text" value="" oninput=${this.handleInput}/>
   </div>`
  }

  load (el) {
    console.log("load!!");
  }
}

module.exports = exports = Frame;
