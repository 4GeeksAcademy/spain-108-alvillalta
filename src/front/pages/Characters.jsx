import React from "react";
import { Link } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";
import { getPeople } from "../services/star-wars-services.js";


export const Characters = () => {
    const { store, dispatch } = useGlobalReducer();
    const starWars = store.starWars

    useEffect(() => {
        const getCharactersInComponent = async () => {
            const people = await getPeople();
            dispatch({
                type: "get-star-wars",
                payload: people
            })
        };
        getCharactersInComponent();
    }, [])

    return (
        <div className="text-center mt-5">
            <h3 className="m-3">Characters</h3>
            <div>
                <ul>
                    {starWars.map((item) => {
                        return (
                            <li>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}