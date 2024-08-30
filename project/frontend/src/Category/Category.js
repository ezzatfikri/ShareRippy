import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Global.css';
import './Category.css';

function Category() {
  const [selectedCategory, setSelectedCategory] = useState('default');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case 'beverage':
        return (
          <div>
            <h1 className="mb-4">Beverage</h1>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="iced_coffee.jpg"
                    className="card-img-top"
                    alt="Beverage 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Iced Coffee</h5>
                    <p className="card-text">A refreshing cold brew perfect for any time of the day.</p>
                    <a href="#iced-coffee" className="btn btn-primary">View Recipe</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="mango_smoothie.jpg"
                    className="card-img-top"
                    alt="Beverage 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mango Smoothie</h5>
                    <p className="card-text">A tropical blend that’s sweet and healthy.</p>
                    <a href="#mango-smoothie" className="btn btn-primary">View Recipe</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="lemonade.jpg"
                    className="card-img-top"
                    alt="Beverage 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lemonade</h5>
                    <p className="card-text">A classic beverage, perfect for hot summer days.</p>
                    <a href="#lemonade" className="btn btn-primary">View Recipe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'main dish':
        return (
          <div>
            <h1 className="mb-4">Main Dish</h1>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="nasi_lemak.jpeg"
                    className="card-img-top"
                    alt="Main Dish 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Nasi Lemak</h5>
                    <p className="card-text">The most popular breakfast among malaysian.</p>
                    <a href="#nasi-lemak" className="btn btn-primary">View Recipe</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="mee_goreng.jpg"
                    className="card-img-top"
                    alt="Main Dish 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mee Goreng</h5>
                    <p className="card-text">A local everytime favorite food for all malaysian</p>
                    <a href="#mee-goreng" className="btn btn-primary">View Recipe</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="pizza.jpg"
                    className="card-img-top"
                    alt="main dish 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Pizza</h5>
                    <p className="card-text">A western cuisine for a pizza lover.</p>
                    <a href="#pizza" className="btn btn-primary">View Recipe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'dessert':
        return (
          <div>
          <h1 className="mb-4">Dessert</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="pudding.jpg"
                  className="card-img-top"
                  alt="Dessert 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Pudding Caramel</h5>
                  <p className="card-text">A refreshing cold pudding for everyday meal.</p>
                  <a href="#pudding" className="btn btn-primary">View Recipe</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="cake.jpg"
                  className="card-img-top"
                  alt="Dessert 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Moist Choclate Cake</h5>
                  <p className="card-text">A must menu for the choclate cake lover.</p>
                  <a href="#cake" className="btn btn-primary">View Recipe</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="cendol.jpg"
                  className="card-img-top"
                  alt="Dessert 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Cendol</h5>
                  <p className="card-text">A classic dessert on the hot sunny day.</p>
                  <a href="#cendol" className="btn btn-primary">View Recipe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
   
      case 'others':
        return (
          <div>
          <h1 className="mb-4">Others</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="lekor.jpg"
                  className="card-img-top"
                  alt="other 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Keropok Lekor</h5>
                  <p className="card-text">Tea time menu, love by all malaysians.</p>
                  <a href="#lekor" className="btn btn-primary">View Recipe</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="churros.jpg"
                  className="card-img-top"
                  alt="Other 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Churros</h5>
                  <p className="card-text">Sweet and savory menu for tea time.</p>
                  <a href="#churros" className="btn btn-primary">View Recipe</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="Mashed-potato.jpeg"
                  className="card-img-top"
                  alt="Other 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Mashed Potato</h5>
                  <p className="card-text">Perfect match for any western cuisine</p>
                  <a href="#mashed-potato" className="btn btn-primary">View Recipe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
      default:
        return (
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Category</h1>
              <p className="card-text">Select a category from the sidebar to explore.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="category-container">
      <nav className="side-nav">
        <h4>Recipes Category:</h4>
        <ul>
          <li>
            <a href="#main dish" onClick={() => handleCategoryClick('main dish')}>Main Dish</a>
          </li>
          <li>
            <a href="#beverage" onClick={() => handleCategoryClick('beverage')}>Beverage</a>
          </li>
          <li>
            <a href="#dessert" onClick={() => handleCategoryClick('dessert')}>Dessert</a>
          </li>
          <li>
            <a href="#others" onClick={() => handleCategoryClick('others')}>Others</a>
          </li>
        </ul>
      </nav>
      <div className="category-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Category;

