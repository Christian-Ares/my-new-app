// components/Header.js

import React, { Component } from 'react';
import Title from './components/Title';
import Description from './components/Description';
import logo from '../logo.svg';

const header = () => {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title data="Welcome to React, Ironhacker!"></Title>
        <Description data="You are ready to take this to the next level!"></Description>
      </header>
  );
}

export default header;

