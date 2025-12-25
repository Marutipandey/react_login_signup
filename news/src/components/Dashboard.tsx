import { Link } from 'react-router-dom';
import '../Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">MyNews</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>

      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Manage your account, view news, and customize settings.</p>
      </header>

      <section className="cards-container">
        <div className="card">
          <h3>Latest News</h3>
          <p>Check the latest news from your favorite categories.</p>
          <Link to="/news" className="card-btn">View News</Link>
        </div>

        <div className="card">
          <h3>Profile</h3>
          <p>Update your profile, change password, and manage preferences.</p>
          <Link to="/profile" className="card-btn">Go to Profile</Link>
        </div>

        <div className="card">
          <h3>Settings</h3>
          <p>Customize your account settings and notifications.</p>
          <Link to="/settings" className="card-btn">Manage Settings</Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
