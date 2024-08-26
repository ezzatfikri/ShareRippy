import React from 'react'

function Home() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ float: 'left', marginLeft: '10px', width: '50%' }}>
          <h1>Welcome to ShareRippy</h1>
          <h5 style={{ color: 'white' }}>At Share Amogus, we connect food lovers globally to share and discover favorite recipes and cooking tips. Whether you're an experienced chef or a home cook seeking inspiration, our community lets you exchange culinary creations and celebrate the joy of cooking together. Join us and be part of a global amogus kitchen where every recipe tells a story..</h5>
        </div>

        <div style={{ float: 'right', marginRight: '10px', width: '45%' }}>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="cabonara.jpg" className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="lasagna.jpeg" className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="meatball.jpeg" className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'cover' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <br></br>
        <h3 style={{ color: 'white', backgroundColor: 'grey' }} >LIST OF RECIPES</h3>
       <div className='d-flex justify-content-center'>
       <div className='row'>
          <div className= 'col-md-4'>
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="..." class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="..." class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="..." class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}









export default Home