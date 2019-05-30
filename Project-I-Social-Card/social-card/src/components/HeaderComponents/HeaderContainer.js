import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumb from './ImageThumbnail';

function Header(){
        return <div class='container'>
            <div class='flexit'>
            <ImageThumb />
            <HeaderTitle />
            </div>
            <HeaderContent />

    </div>
}

export default Header;