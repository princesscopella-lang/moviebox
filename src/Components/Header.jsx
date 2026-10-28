import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useState } from "react";
import { Box, Tab, Grid, TextField } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { films } from "../date/films";
import FilmCard from "./FilmCard";

function Header() {
  const [value, setValue] = useState("1");
  const [favoris, setFavoris] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const filmsList = films.filter((film) => {
  //   if (value === 1) {
  //     return favoris.includes(film.id);
  //   }
  //   return true;
  // });

  const toggleFavori = (id) => {
    if (favoris.includes(id)) {
      setFavoris(favoris.filter((favId) => favId !== id));
    } else {
      setFavoris([...favoris, id]);
    }
  };

  // const toggleFavori = (id) => {
  //   setFavoris((prevFavoris) =>
  //     prevFavoris.includes(id)
  //       ? prevFavoris.filter((favId) => favId !== id)
  //       : [...prevFavoris, id],
  //   );
  // };

  const mesFavorisList = films.filter((film) => favoris.includes(film.id));

  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
      }}
    >
      <Box
        sx={{
          width: "100%",
          color: "text.secondary",
          mt: 4,
          mb: 4,
        }}
      >
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="lab tabs"
            sx={{
              border: 1,
              borderColor: "#f4eeee",
              borderRadius: 3,
              backgroundColor: "#f8f9fa",
            }}
          >
            <Tab
              label="Tous les films"
              value="1"
              sx={{ textTransform: "none" }}
            />
            <Tab label="Mes favoris" value="2" sx={{ textTransform: "none" }} />
          </TabList>
          <TabPanel value="1">
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
          <TabPanel value="2">
            <TabPanel value="2">
              <Grid container columnSpacing={2} rowSpacing={5}>
                {mesFavorisList.length > 0 ? (
                  mesFavorisList.map((film) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={film.id}>
                      <FilmCard
                        titre={film.titre}
                        annee={film.annee}
                        genre={film.genre}
                        estFavori={true}
                        onToggle={() => toggleFavori(film.id)}
                        image={film.image}
                      />
                    </Grid>
                  ))
                ) : (
                  <Box sx={{ p: 3, textAlign: "center", width: "100%" }}>
                    Aucun film dans vos favoris pour le moment.
                  </Box>
                )}
              </Grid>
            </TabPanel>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export default Header;
