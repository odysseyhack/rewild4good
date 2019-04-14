import React from 'react';
import { APP_NAME } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-light py-3 mt-auto">
      <div className="container">@{APP_NAME}</div>
    </footer>
  );
}
