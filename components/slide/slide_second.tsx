


export const Second_slide = ()=>{
    return(
        <section id="slider" className="section">
        <div className="slider">
          <div className="slider__container">
            <div className="slider__item slide-burger">
              <div className="slider__content grid">
                <div className="column">
                  <h1 className="title">Veggie</h1>
                  <h1 className="title">Burguer</h1>
                </div>
                <div className="column">
                    <img src="https://mverissimo.github.io/tweenslideshow/dist/assets/images/burger.png" className="image burger" /></div>
              </div>
            </div>
            <div className="slider__item slide-astronaut">
              <div className="slider__content grid">
                <div className="column">
                  <h1 className="title">lost</h1>
                  <h1 className="title">in space</h1>
                </div>
                <div className="column"><img src="https://mverissimo.github.io/tweenslideshow/dist/assets/images/astronaut.png" className="image astronaut"/></div>
              </div>
            </div>
            <div className="slider__item slide-coffee">
              <div className="slider__content grid">
                <div className="column">
                  <h1 className="title">I Love</h1>
                  <h1 className="title">Coffee</h1>
                </div>
                <div className="column"><img src="https://mverissimo.github.io/tweenslideshow/dist/assets/images/cup-2.png" className="image cup"/></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}