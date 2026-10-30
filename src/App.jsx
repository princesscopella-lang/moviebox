import React, { use, useState } from "react";
import { Items } from "./Components/Items";
import { TITRE_APP, sub } from "./date/films";
import FilmCard from "./Components/FilmCard";
import { films } from "./date/films";
import Header from "./Components/Header";
import "./App.css";
import {
  Box,
  Container,
  Grid,
  Alert,
  TextField,
  Stack,
  Button,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ButtonAppBar } from "./Components/ButtonAppBar";
import InputAdornment from "@mui/material/InputAdornment";
import { Icon } from "@iconify/react";

import SelectEst from "./Components/SelectEst";

function App() {
  const [likesState, setLikesState] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const [favoris, setFavoris] = useState([]);
  const [value, setValue] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [movies, setMovies] = useState(films);

  const favoriteCount = favoris.length;

  const toggleFavori = (id) => {
    setFavoris((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  const handleChangeNew = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleAddMovie = (newFilm) => {
    setMovies((prev) => [...prev, newFilm]);
  };

  const displayedMovies = movies.filter((film) => {
    const matchesSearch = film.titre
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre = selectedGenre === "" || films.genre === selectedGenre;

    const matchesFavorites = value === 1 || favoris.includes(film.id);

    return matchesSearch && matchesGenre && matchesFavorites;
  });
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // Ton return vient ici...

  return (
    <Stack position="relative">
      {" "}
      <Container maxWidth="xl">
        <ButtonAppBar
          favoriteCount={favoriteCount}
          titre={TITRE_APP}
          sousTitre={sub}
        />

        <Stack
          direction={"row"}
          sx={{
            backgroundColor: "white",
            p: 2,
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              backgroundColor: "white",
              width: "100%",
              borderRadius: 2,
              mb: 2,
            }}
          >
            <Stack
              direction={{
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
              }}
              spacing={2}
            >
              <Stack direction={"row"} spacing={2}>
                <Button
                  onClick={() => setValue(1)}
                  disableElevation
                  variant={value === 1 ? "contained" : "outlined"}
                  sx={{
                    textTransform: "capitalize",
                    p: "10px 25px",
                    borderRadius: 2,
                    // position: "relative",
                    // left: 8,
                  }}
                >
                  Tous les films
                </Button>
                <Button
                  onClick={() => setValue(2)}
                  startIcon={
                    <Icon
                      icon="andrsrxn:heart-filled"
                      style={{ fontSize: "24px", color: "#5382c3" }}
                    />
                  }
                  disableElevation
                  variant={value === 2 ? "contained" : "outlined"}
                  sx={{
                    textTransform: "capitalize",
                    p: "10px 30px",
                    borderRadius: 2,
                  }}
                >
                  {" "}
                  Mes Favoris
                </Button>
              </Stack>

              <Stack direction={"row"} spacing={2}>
                <TextField
                  placeholder="Rechercher un film.. "
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <SearchIcon sx={{ color: "text.secondary" }} /> */}
                        <Icon icon="akar-icons:search" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    borderColor: "#f4eeee",

                    backgroundColor: "white",
                    "& .MuiInputBase-input": {
                      padding: "12px 8px",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#E0E3E7",
                        borderRadius: 3,
                      },
                    },
                  }}
                />

                <SelectEst
                  selectedGenre={selectedGenre}
                  handleChangeNew={handleChangeNew}
                />

                <Box sx={{ my: 2 }}>
                  {" "}
                  <Button
                    sx={{
                      position: {
                        xs: "fixed",
                        sm: "ab",
                        md: "static",
                      },
                      bottom: { xs: 16, sm: "auto" },
                      right: { xs: 170, sm: "auto" },
                      zIndex: 1000,
                      // width: { xs: "calc(100% - 32px" },
                      textTransform: "capitalize",
                      p: "10px 25px",
                      borderRadius: 2,
                      // position: "relative",
                      // left: 8,
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => setShowForm(!showForm)}
                  >
                    {isMobile ? "+" : "Ajouter un film"}
                  </Button>
                  <Drawer
                    anchor={isMobile ? "bottom" : "right"}
                    open={showForm}
                    onClose={(event, reason) => {
                      if (reason == "backdropClick") {
                        return;
                      }
                      setShowForm(false);
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "100%", sm: 400 },
                        maxHeight: { xs: "80vh", sm: "100vh" },
                        p: 2,
                        overflowY: "auto",
                      }}
                    >
                      <Items
                        onAddMovie={handleAddMovie}
                        onClose={() => setShowForm(false)}
                      />{" "}
                    </Box>
                  </Drawer>
                </Box>
              </Stack>

              {/* <TextField
            placeholder="Rechercher un film.. "
            variant="outlined"
            size="small"
            sx={{
              border: 1,
              borderColor: "#f4eeee",
              borderRadius: 2,
              backgroundColor: "#f8f9fa",
            }}
          /> */}
            </Stack>
          </Stack>
        </Stack>

        {/* AFFICHAGE DES FILMS */}
        <Box sx={{ mt: 2 }}>
          {displayedMovies.length === 0 ? (
            <Alert severity="info" sx={{ mt: 2 }}>
              Aucun film trouvé.
            </Alert>
          ) : (
            <Grid container columnSpacing={2} rowSpacing={5}>
              {displayedMovies.map((film) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={film.id}>
                  <FilmCard
                    titre={film.titre}
                    annee={film.annee}
                    genre={film.genre}
                    estFavori={favoris.includes(film.id)}
                    onToggle={() => toggleFavori(film.id)}
                    image={film.image}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        {/* {/* <Box sx={{ mt: 2 }}> */}
      </Container>
    </Stack>
  );
}

export default App;
