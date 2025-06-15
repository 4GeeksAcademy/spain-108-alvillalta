import { Link, useNavigate } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";

import starWarsLogo from "../assets/star-wars-logo.png";

export const Navbar = () => {

	//  Declatations
	const { store, dispatch } = useGlobalReducer();
	const favorites = store.favorites

	//  Handlers
	const handleDeleteFavorites = (item) => {
		dispatch({
			type: "REMOVE-FAVORITES",
			payload: { name: item.name, like: false, id: item.id }
		});
	}

	//  Render
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container my-2">
				<Link to="/">
					<span>
						<img src={starWarsLogo} className="img-fluid rounded w-25" />
					</span>
				</Link>
				<div className="d-flex justify-content-end">
					<Link to="/characters">
						<span className="navbar-brand mb-0 h1">Characters</span>
					</Link>
					<Link to="/starships">
						<span className="navbar-brand mb-0 h1">Starships</span>
					</Link>
					<Link to="/planets">
						<span className="navbar-brand mb-0 h1">Planets</span>
					</Link>
					<Link to="/contacts">
						<span className="navbar-brand mb-0 h1">Contacts</span>
					</Link>
					<div className="dropdown">
						<button className={`btn btn-${favorites.length > 0 ? "primary dropdown-toggle" : "secondary"} position-relative`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
							{favorites.length > 0 ?
								<span>
									Favorites
									<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
										{favorites.length}
									</span>
								</span>
								:
								<span>
									Favorites
								</span>
							}
						</button>
						{favorites.length > 0 ?
							<div className="dropdown-menu dropdown-menu-end">
								{favorites.map((item) => {
									return (
										<div key={item.id} className="d-flex justify-content-between p-2">
											<span>{item.name}</span>
											<button onClick={() => handleDeleteFavorites(item)} type="button" ><i className="fa-solid fa-xmark"></i></button>
										</div>
									)
								})}
							</div>
							:
							<div className="dropdown-menu d-none"></div>
						}
					</div>
				</div>
			</div>
		</nav>
	);
};