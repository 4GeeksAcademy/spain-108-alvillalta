import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Logo</span>
				</Link>
				<div className="ml-auto">
					<Link to="/characters">
						<span className="navbar-brand mb-0 h1">Characters</span>
					</Link>
					<Link to="/planets">
						<span className="navbar-brand mb-0 h1">Planets</span>
					</Link>
					<Link to="/starships">
						<span className="navbar-brand mb-0 h1">Starships</span>
					</Link>
					<Link to="/contacts">
						<span className="navbar-brand mb-0 h1">Contacts</span>
					</Link>
					<Link to="/demo">
						<button className="btn btn-primary">Favoritos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};