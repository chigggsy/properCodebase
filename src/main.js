import animateTitle from './features/animateTitle'
import sayGlobalCode from './features/sayGlobalCode'
import pageBlue from './pages/page_blue'
import pageGreen from './pages/page_green'
import pageRed from './pages/page_red'
import pageYellow from './pages/page_yellow'
import './styles/style.css'

// Global
sayGlobalCode()
animateTitle()

// Page specific
if (window.location.pathname === '/') {
  console.log('This is the home page')
} else if (window.location.pathname === '/red') {
  pageRed()
} else if (window.location.pathname === '/blue') {
  pageBlue()
} else if (window.location.pathname === '/yellow') {
  pageYellow()
} else if (window.location.pathname === '/green') {
  pageGreen()
}
