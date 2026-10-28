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
  const totalLikes = Object.values(likesState).reduce(
    (acc, curr) => acc + curr,
    0,
  );
  const updateLikes = (id, newLikes) => {
    setLikesState((prev) => ({ prev, [id]: newLikes }));
  };
  const [favoris, setFavoris] = useState([]);
  const favoriteCount = favoris.length;
  const toggleFavori = (id) => {
    if (favoris.includes(id)) {
      setFavoris(favoris.filter((favId) => favId !== id));
    } else {
      setFavoris([...favoris, id]);
    }
  };
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [showForm, setShowForm] = useState(false);
  const filmsList = films.filter((film) => favoris.includes(film.id));
  const handleAddMovie = (newMovie) => {
    setMovies((prevMovie) => [newMovie, ...prevMovies]);
    setShowForm(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
                  disableElevation
                  variant={value === 2 ? "contained" : "outlined"}
                  sx={{
                    textTransform: "capitalize",
                    p: "10px 25px",
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

                <SelectEst />
                <Box sx={{ my: 2 }}>
                  {" "}
                  <Button
                    sx={{
                      position: {
                        xs: "absolute",
                        sm: "absolute",
                        md: "static",
                      },
                      top: { xs: 0 },
                      right: { xs: 130 },
                      zIndex: 999,
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
                    Ajouter un film
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
                      {" "}
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
        <Box
          sx={{
            mt: 2,
          }}
        >
          {value === 1 ? (
            <>
              <Grid container columnSpacing={2} rowSpacing={5}>
                {films.map((film) => {
                  const estFavori = favoris.includes(film.id);
                  return (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={film.id}>
                      <FilmCard
                        titre={film.titre}
                        annee={film.annee}
                        genre={film.genre}
                        estFavori={estFavori}
                        onToggle={() => toggleFavori(film.id)}
                        image={film.image}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </>
          ) : (
            <>
              {filmsList.length === 0 ? (
                <Alert severity="info" sx={{ mt: 2 }}>
                  Aucun film dans cette catégorie.
                </Alert>
              ) : (
                <Grid container spacing={2}>
                  {filmsList.map((film) => (
                    <Grid item key={film.id} xs={12} sm={6} md={4}>
                      <FilmCard
                        titre={film.titre}
                        annee={film.annee}
                        genre={film.genre}
                        image={film.image}
                        isFavori={favoris.includes(film.id)}
                        onToggleFavori={toggleFavori}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </>
          )}
          {/* <Box sx={{ width: "100%", color: "text.secondary", mt: 4, mb: 4 }}>
            <TabContext value={value}>
              <Box
                sx={{
                  border: 1,
                  borderColor: "#f4eeee",
                  borderRadius: 3,
                  backgroundColor: "#f5f5f5",
                  gap: 15,
                  display: "flex",
                  direction: "row",
                }}
              >
                <Box
                  sx={{
                    border: 1,
                    borderColor: "#f4eeee",
                    borderRadius: 2,
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab tabs"
                    indicatorColor="primary"
                    textColor="secondary"
                    sx={{ height: "25px" }}
                  >
                    <Tab
                      label="Tous les films"
                      value="1"
                      sx={{ textTransform: "none" }}
                    />
                    <Tab
                      label="Mes favoris"
                      value="2"
                      sx={{ textTransform: "none" }}
                    />
                  </TabList>
                </Box>
                <TextField
                  label="Rechercher un film.. "
                  variant="outlined"
                  sx={{
                    border: 1,
                    borderColor: "#f4eeee",
                    borderRadius: 2,
                    backgroundColor: "#f8f9fa",
                  }}
                />
              </Box>

              <TabPanel value="1" tabIndex={0}>
                <Grid container columnSpacing={2} rowSpacing={5}>
                  {films.map((film) => {
                    const estFavori = favoris.includes(film.id);
                    return (
                      <Grid size={{ xs: 12, sm: 6, md: 4 }} key={film.id}>
                        <FilmCard
                          titre={film.titre}
                          annee={film.annee}
                          genre={film.genre}
                          estFavori={estFavori}
                          onToggle={() => toggleFavori(film.id)}
                          image={film.image}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </TabPanel>
              <TabPanel value="2" tabIndex={0}>
                {filmsList.length === 0 ? (
                  <Alert severity="info" sx={{ mt: 2 }}>
                    Aucun film dans cette catégorie.
                  </Alert>
                ) : (
                  <Grid container spacing={2}>
                    {filmsList.map((film) => (
                      <Grid item key={film.id} xs={12} sm={6} md={4}>
                        <FilmCard
                          titre={film.titre}
                          annee={film.annee}
                          genre={film.genre}
                          image={film.image}
                          isFavori={favoris.includes(film.id)}
                          onToggleFavori={toggleFavori}
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </TabPanel>
            </TabContext>
          </Box> */}
        </Box>
      </Container>
    </Stack>
  );
}

export default App;
