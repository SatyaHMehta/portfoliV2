import "./works.scss"

export default function works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/writing.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam non error officiis est dolore iure ad eos expedita cum tenetur voluptatum, asperiores, excepturi, ducimus vel laudantium recusandae delectus sed accusamus.</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/shake.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
