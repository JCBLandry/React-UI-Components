import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent'

function HeaderContainer(){
    return <div class="container">
        <CardBanner />
        <CardContent />
    </div>
}

export default HeaderContainer;