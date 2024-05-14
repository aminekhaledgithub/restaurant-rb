import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Resto from "./components/resto/Resto"
import Portfolio from "./components/portfolio/PortfolioProject"
import PortfolioLorem from "./components/portfolio-lorem/PortfolioLorem"

export default function RoutesApp() {
    return (
        <Routes >
            <Route path="/" element={<Resto />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfoliolorem" element={<PortfolioLorem />} />
        </Routes>
    )
}
