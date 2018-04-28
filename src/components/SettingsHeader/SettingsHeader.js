import React from 'react';
import './SettingsHeader.css';
import { Link } from 'react-router-dom';

const SettingsHeader = ({ children }) => {
  return (
    <div className="settings-header">
      <Link to="/">
        <button>{'<'}</button>
      </Link>
      <span>{children}</span>
    </div>
  );
};

export default SettingsHeader;
