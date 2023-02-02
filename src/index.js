import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import App from "./App"
import NewsLayout from "./NewsLayout"
import NewsResults from "./NewsResults"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const root = createRoot(document.querySelector('#root'))

root.render(
    // <React.StrictMode>
    <Router>
        <Routes>
            <Route element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<NewsLayout />}>
                    <Route path=":newsTopic" element={<NewsResults />} />
                </Route>
            </Route>
        </Routes>
    </Router>
    // </React.StrictMode>
)