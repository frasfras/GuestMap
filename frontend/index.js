import {initializeBlock} from '@airtable/blocks/ui';
import React, { Component, Fragment }  from 'react';
import Guests from './guests/Guests';
// import axios from 'axios';
import Maps from './components/Maps';

//import MoviesApplication from './guests/Guests';
import MarkerList from './components/MarkerList';
import Markers from './components/Markers';


function HelloWorldBlock() {
    // YOUR CODE GOES HERE
    return <div> <div id="container"> </div> <Markers /><Guests /></div>;
}

initializeBlock(() => <HelloWorldBlock />);
