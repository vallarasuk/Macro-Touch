import React from 'react';
import NavBarCommon from '../Helpers/NavBarCommon';
import FileUpload from '../Helpers/FileUpload';
import UserProfile from '../Helpers/UserProfile';

const FileSection = () => {
  return (
    <div className='container'>
        <NavBarCommon/>
        <FileUpload/>
    </div>
  )
}

export default FileSection;