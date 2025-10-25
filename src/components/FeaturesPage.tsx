import { Link } from 'react-router-dom';
import '../App.css';

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <div className="container">
        <h1 className="features-title">Amazing Features</h1>
        <p className="features-subtitle">Discover what makes AZSpace special</p>
        
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-number">01</div>
            <h3>3D Space Environment</h3>
            <p>Experience a fully interactive 3D space with satellites, asteroids, and particle effects that respond to your movements.</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">02</div>
            <h3>Responsive Design</h3>
            <p>Seamlessly adapts to any screen size, from mobile devices to large desktop displays.</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">03</div>
            <h3>Modern Tech Stack</h3>
            <p>Built with the latest technologies including React 18, TypeScript, and Three.js for optimal performance.</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">04</div>
            <h3>Smooth Animations</h3>
            <p>Every interaction is enhanced with carefully crafted animations for a delightful user experience.</p>
          </div>
        </div>
        
        <div className="features-footer">
          <div className="footer-brand">
            <div className="logo">🚀AZSpace</div>
            <p>Exploring the future of interactive web experiences with cutting-edge technology.</p>
          </div>
          
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
