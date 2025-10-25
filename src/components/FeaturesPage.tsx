import '../App.css';

const FeaturesPage = () => {
  const features = [
    {
      number: '01',
      title: '3D Space Environment',
      description: 'Experience a fully interactive 3D space with satellites, asteroids, and particle effects that respond to your movements.'
    },
    {
      number: '02',
      title: 'Responsive Design',
      description: 'Seamlessly adapts to any screen size, from mobile devices to large desktop displays.'
    },
    {
      number: '03',
      title: 'Modern Tech Stack',
      description: 'Built with the latest technologies including React 18, TypeScript, and Three.js for optimal performance.'
    },
    {
      number: '04',
      title: 'Smooth Animations',
      description: 'Every interaction is enhanced with carefully crafted animations for a delightful user experience.'
    },
    {
      number: '05',
      title: 'Interactive Controls',
      description: 'Intuitive controls that make navigating the 3D space feel natural and responsive.'
    },
    {
      number: '06',
      title: 'Performance Optimized',
      description: 'Carefully optimized to ensure smooth performance across all devices and network conditions.'
    }
  ];

  return (
    <div className="features-page">
      <div className="container">
        <h1 className="features-title">Our Features</h1>
        <p className="features-subtitle">
          Discover the powerful features that make our platform stand out from the rest. Built with cutting-edge technology
          to deliver an exceptional user experience.
        </p>
        
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-number">{feature.number}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
