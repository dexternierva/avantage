import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ScrollToTop, Topbar, Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Applicant from "./pages/ApplicantPage/Applicant";
import Company from "./pages/CompanyPage/Company";
import Partners from "./pages/PartnersPage/Partners";
import BusinessSolutions from "./pages/BusinessSolutionsPage/BusinessSolutions";
import Jobs from "./pages/JobsPage/Jobs";
import News from "./pages/NewsPage/News";
import Contact from "./pages/ContactPage/Contact";
import Policy from "./pages/PolicyPage/Policy";

function App() {

	return (
		<Router>
			<ScrollToTop />
			<Topbar />
			<Navbar />
			<Switch>
				<Route path='/' exact component={ Home } />
				<Route path='/about' component={ About } />
				<Route path='/applicant' component={ Applicant } />
				<Route path='/company' component={ Company } />
				<Route path='/partners' component={ Partners } />
				<Route path='/businesssolutions' component={ BusinessSolutions } />
				<Route path='/jobs' component={ Jobs } />
				<Route path='/news' component={ News } />
				<Route path='/contact' component={ Contact } />
				<Route path='/policy' component={ Policy } />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
