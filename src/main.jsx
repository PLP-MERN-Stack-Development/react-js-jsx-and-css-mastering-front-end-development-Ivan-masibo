import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // 👈 Make sure this line exists!

// Ensure there's a root element to mount into (helps when index.html is missing or misconfigured)
const ensureRoot = () => {
		const id = 'root'
		let root = document.getElementById(id)
		if (!root) {
				root = document.createElement('div')
				root.id = id
				document.body.appendChild(root)
		}
		return root
}

const rootElement = ensureRoot()

try {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	)
} catch (err) {
	// If render fails, show a simple message and log the error for debugging.
	console.error('React render failed:', err)
	rootElement.innerHTML = '<div style="padding:20px;font-family:sans-serif;"><h1>Failed to load app</h1><p>Check the console and terminal for errors.</p></div>'
}
