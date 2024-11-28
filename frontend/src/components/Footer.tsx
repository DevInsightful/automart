const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Luxuryzip</h2>
            <p>2715 Ash Dr. San Jose,</p>
            <p>South Dakota 83475</p>
            <p>+1 (316) 555-0116</p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Shop</h2>
            <ul>
              <li>Sports Car</li>
              <li>Electric</li>
              <li>Hybrid</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Company</h2>
            <ul>
              <li>About Us</li>
              <li>Our Service</li>
              <li>Contact Us</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">About Luxuryzip</h2>
            <ul>
              <li>Our Company</li>
              <li>Corporate Responsibility</li>
              <li>Company News</li>
              <li>Career</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex justify-between">
            <p>&copy; Luxuryzip car sell. All Right Reserved 2024</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;