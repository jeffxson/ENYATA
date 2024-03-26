import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Layout from "./component/layout";
import SpaceShip from "./pages/spaceship";
import People from "./pages/people";
import Species from "./pages/species";
import PeopleInfo from "./pages/peopleInfo";
import SpeciesInfo from "./pages/speciesInfo";
import SpaceShipInfo from "./pages/spaceshipinfo";
import FilmInfo from "./pages/filmInfo";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="spaceship" element={<SpaceShip />} />
        <Route path="species" element={<Species />} />
        <Route path="people" element={<People />} />
        <Route path="people-info/:id" element={<PeopleInfo />} />
        <Route path="species-info/:id" element={<SpeciesInfo />} />
        <Route path="spaceship-info/:id" element={<SpaceShipInfo />} />
        <Route path="film-info/:id" element={<FilmInfo />} />
      </Route>
    </Route>
  )
);
