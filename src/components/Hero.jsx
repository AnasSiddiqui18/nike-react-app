const Hero = () => {
  return (
    <main>
      <div className="container">
        <div className="Hero-section">
          <div className="left">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="Hero-button">
              <a href="#" className="login-btn shop-btn">
                Shop Now
              </a>
              <a href="#" className="category-btn">
                Category
              </a>
            </div>
            <div className="shopping">
              <p>Also Available On</p>
              <div className="brand-icons">
                <img src="public/images/flipkart.png" alt="#" />
                <img src="public/images/amazon.png" alt="#" />
              </div>
            </div>
          </div>
          <div className="image">
            <img src="images/shoe_image.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
