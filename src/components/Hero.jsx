const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE' RE HERE TO HELP YOU WITH
          OURSHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
          OURSHOES.
        </p>

        <div className="hero-btn">
          <button className="button"><span>Shop Now</span></button>
          <button className="secondary-btn"><span>Category</span></button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
