import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Typography, Grid, Alert } from "@mui/material";
import { films } from "../date/films";
import FilmCard from "./FilmCard";
export default function SelectEst({
 
  selectedGenre,
  handleChangeNew,
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <FormControl sx={{ minWidth: { xs: 140, sm: 150, md: 300 } }}>
        <InputLabel id="demo-select-small-label">Tous les genres</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedGenre}
          sx={{
            borderRadius: 3,
            "& .MuiInputBase-input": {
              fontSize: 16,
              padding: "12px 26px 12px 12px",
              // Use the system font instead of the default Roboto font.
            },
          }}
          label="Tous les genres"
          onChange={handleChangeNew}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Action</MenuItem>
          <MenuItem value={20}>Animation</MenuItem>
          <MenuItem value={30}>Science-fiction</MenuItem>
        </Select>
      </FormControl>
      {/* <Box
        sx={{
          p: 2,
          bgcolor: "Background.paper",
          borderRadius: 2,
          boxShadow: 2,
          border: "1px solid",
          borderColor: "divider",
          width: "100%",
        }}
      >
        {" "}
        <Typography>
          {filteredMovies.length} films{filteredMovies.length > 1 ? "s" : ""}{" "}
          trouve {filteredMovies.length > 1 ? "s" : ""}
        </Typography>{" "}
      </Box>
      <Box>
        <Grid container columnSpacing={2} rowSpacing={5}>
          {filteredMovies.map((film) => {
            const estFavori = favoris.includes(film.id);
            return (
              <Grid item key={film.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <FilmCard
                  titre={film.titre}
                  annee={film.annee}
                  genre={film.genre}
                  image={film.image}
                  estFavori={estFavori}
                  isFavori={favoris.includes(film.id)}
                  onToggleFavori={toggleFavori}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box> */}
    </Box>
  );
}
