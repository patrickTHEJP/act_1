
import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCard.css'; 

const ProfileCard = ({ name, title, imageUrl, bio }) => {
  return (
    <div className="profile-card">
      {imageUrl && <img src={imageUrl} alt={`${name}'s profile`} className="profile-card__image" />}
      <div className="Student">
        <h2 className="John Patrick S. Yusingco">{name}</h2>
        <p className="HALLO">{title}</p>
        <p className="Lives in Qc">{bio}</p>
      </div>
    </div>

    
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  bio: PropTypes.string,
};

ProfileCard.defaultProps = {
  title: '',
  imageUrl: '',
  bio: '',
};

export default ProfileCard;
