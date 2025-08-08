import React from 'react'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Storage Page</h1>
      </header>
      <main>
        <section className="hero">
          <h2>Samuel Indra Bastian</h2>
          <p>SMK PGRI 3 Malang</p>
          <p>Welcome to my storage landing page built with React and TypeScript.</p>
        </section>
      </main>
      <footer className="footer">
        <small>&copy; {new Date().getFullYear()} Samuel Indra Bastian</small>
      </footer>
    </div>
  )
}

export default App
