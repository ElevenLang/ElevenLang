import React from 'react';
import Reactdom from 'react-dom';
import Hello from './component/Hello/Hello';
import getRouter from './router/router';
Reactdom.render(
    getRouter(),
    document.getElementById("app")
)