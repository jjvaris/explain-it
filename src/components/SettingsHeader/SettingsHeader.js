import React from 'react';
import './SettingsHeader.css';
import { Link } from 'react-router-dom';
import Close from '../Close/Close';

const SettingsHeader = ({ title }) => {
  return (
    <div className="settings-header">
      <div className="settings-header__btn">
        <Link to="/">
          <Close />
        </Link>
      </div>

      <span>{title}</span>
    </div>
  );
};

export default SettingsHeader;
