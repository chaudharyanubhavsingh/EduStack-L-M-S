import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Link, useLocation } from 'react-router-dom';

function AdminApp() {
  const profileData = {
    name: 'John Doe',
    email:'hi@gmail.com'
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [userPanelOpen, setUserPanelOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const navRef = useRef();
  const notificationRef = useRef();
  const userPanelRef = useRef();
  const location = useLocation();
  const userid = localStorage.getItem('userName');
   
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handlelogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
 
  }

  const toggleNotificationPanel = () => {
    setNotificationOpen(!notificationOpen);
  };

  const toggleUserPanel = () => {
    setUserPanelOpen(!userPanelOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
    if (notificationRef.current && !notificationRef.current.contains(event.target) && !event.target.classList.contains('icon-bell')) {
      setNotificationOpen(false);
    }
    if (userPanelRef.current && !userPanelRef.current.contains(event.target) && !event.target.classList.contains('icon-user')) {
      setUserPanelOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const linkStyle = {
    padding: '10px',
    display: '',
    textDecoration: 'none',
    color: 'black',
  };

  const activeLinkStyle = {
    ...linkStyle,
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftWidth: '13px',
    borderTopLeftRadius: '28px',
  };

  const getLinkStyle = (path) => {
    if (location.pathname === path) {
      return activeLinkStyle;
    }
    if (hoveredLink === path) {
      return activeLinkStyle;
    }
    return linkStyle;
  };

 
  const getCurrentLinkName = () => {
    switch (location.pathname) {
      case '/admin':
        return 'Dashboard';
      case '/adminprofile':
        return 'Approve leave';
      case '/adminattendance':
        return 'Attendance';
      case '/admintimetable':
        return 'Timetable';
      case '/admincourse':
        return 'Add Students/Teachers';
      case '/adminadd':
        return 'Add Batches/Courses';
      default:
        return '';
    }
  };

  return (
    <>
      <div className="d3tgxv0x">
        <div className="zwzood3u">
          <div className="lkgru36t">
            <img
              src="https://assets-global.website-files.com/625653855a98a355d49f4743/62565a4fcbde990d20496daf_Toggle%20Image.png"
              alt="Toggle Menu"
              className="f03ikfv7"
              onClick={toggleMenu}
              style={{ maxWidth: '12%' }}
            />
            <h2 className="fxwcqo1d">{getCurrentLinkName()}</h2>
          </div>
          <div className="qf5ujpok">
            <div className="jd4ks0q4">
              <div className="lf4bfb0e">
              <div className="nav-item" ref={notificationRef}>
                  <FontAwesomeIcon icon={faBell} className="icon icon-bell" onClick={toggleNotificationPanel} />
                  {notificationOpen && (
                    <div className="notification-panel dropdown">
                      <ul className="notification-dropdown">
                        <li>No new notifications</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="alwoqm6w">
                <div className="user-panel" ref={userPanelRef}>
                  <FontAwesomeIcon icon={faUser} className="icon icon-user" onClick={toggleUserPanel} />
                  {userPanelOpen && (
                    <div className="user-dropdown dropdown">
                      <ul className="user-dropdown-content">
                        <li>Welcome, {userid}!</li>
                        <li><Link style={{ color:"#070505",textDecoration:"none"}} to="/adminprofile">Leave</Link></li>
                        <li><Link style={{ color:"#070505",textDecoration:"none"}} onClick={handlelogout} to="/signin">Logout</Link></li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={navRef} className={`knheq7h2 side-navbar ${menuOpen ? 'active' : ''}`}>
        <div className="datu50o0">
        <Link
  className="heading"
  to="/"
  style={{ textDecoration: "none", color: "black" }}
  onMouseEnter={(e) => (e.currentTarget.style.color = "black")}
  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
>
  L.M.S
</Link>

          <img
            src="https://assets-global.website-files.com/625653855a98a355d49f4743/62639aaf66a97b17ac34a9a0_Clouse.svg"
            alt="Close Menu"
            className="v1s4netz"
            style={{ filter: 'brightness(0%) grayscale(100%) invert(100%)' }}
            onClick={toggleMenu}
          />
        </div>
        <div className="side-navbar-content">
          <Link
            to="/admin"
            style={getLinkStyle('/admin')}
            onMouseEnter={() => setHoveredLink('/admin')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <i className="fas fa-tachometer-alt" style={{ color: 'purple' }}></i> Dashboard
          </Link>
          <Link
            to="/adminprofile"
            style={getLinkStyle('/adminprofile')}
            onMouseEnter={() => setHoveredLink('/adminprofile')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <i className="fas fa-check-circle" style={{ color: 'blue' }}></i> Leave
          </Link>
          <Link
            to="/adminattendance"
            style={getLinkStyle('/adminattendance')}
            onMouseEnter={() => setHoveredLink('/adminattendance')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <i className="fas fa-calendar-check" style={{ color: 'green' }}></i> Attendance
          </Link>
          <Link
            to="/admintimetable"
            style={getLinkStyle('/admintimetable')}
            onMouseEnter={() => setHoveredLink('/admintimetable')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <i className="fas fa-table" style={{ color: 'red' }}></i> Timetable
          </Link>
          <Link
            to="/admincourse"
            style={getLinkStyle('/admincourse')}
            onMouseEnter={() => setHoveredLink('/admincourse')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <i className="fas fa-add" style={{ color: 'purple' }}></i> Add Student/Teacher
          </Link>
          <Link
            to="/adminadd"
            style={getLinkStyle('/adminadd')}
            onMouseEnter={() => setHoveredLink('/adminadd')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <i className="fas fa-add" style={{ color: 'purple' }}></i> Add Batch/Course
          </Link>
          <Link
            to="/signin"
            style={getLinkStyle('/signin')}
            onMouseEnter={() => setHoveredLink('/signin')}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={handlelogout}
          >
            <i className="fas fa-lock" style={{ color: 'teal' }}></i> Logout
          </Link>
          
        </div>
      </div>
      <div className="w-embed"></div>
    </>
  );
}

export default AdminApp;
