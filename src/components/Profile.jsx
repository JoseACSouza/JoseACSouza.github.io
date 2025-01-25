import React from 'react';
import profileImage from '../img/profileImage.png';
import {personalPerfil, professionalPerfil} from '../database/profile';

function Profile() {
  return (
    <div>
      <h1>{personalPerfil.name}</h1>
      <p>{professionalPerfil.description}</p>
      <img alt="profile-image" src={ profileImage } />
      <ul>
        {professionalPerfil.formations.map((formation) =>(
          <li>
            {
              `${formation.name} - ${formation.institute}: ${formation.period[0]}~${formation.period[1]}`
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;