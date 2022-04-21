import Landing from "./pages/LandingPage";
import CreatePlaylist from "./pages/CreatePlaylist";
import Header from "./component/Header";
import NewReleases from "./pages/new-releases";
import { useAppSelector } from "./store";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./component/sideBar";
import { Grid } from "@chakra-ui/react";

function App() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return (
    <BrowserRouter>
			<Header />
				{<Sidebar />}
				<Grid as={"main"} templateColumns={isAuthenticated ? "1fr 4fr" : "1fr"}>
				{isAuthenticated && <Sidebar />}
				<Switch>
					<Route exact path="/create-playlist">
						{isAuthenticated ? <CreatePlaylist /> : <Redirect to="/" />}
					</Route>
					<Route exact path="/new-releases">
						{isAuthenticated ? <NewReleases /> : <Redirect to="/" />}
					</Route>
					<Route exact path="/">
						<Landing />
					</Route>
				</Switch>
			</Grid>
		</BrowserRouter>
  );
}

export default App;
