/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
File: src/main.jsx
--- a/file:///c%3A/Users/Admin.DESKTOP-O21FVQJ/Desktop/farmhub_frontend/src/main.jsx
+++ b/file:///c%3A/Users/Admin.DESKTOP-O21FVQJ/Desktop/farmhub_frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
