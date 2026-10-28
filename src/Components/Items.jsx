import React, { useState } from "react";
import { estRecent } from "../utils/helper.js";
import { Box, MenuItem, TextField,Button,Typography ,Stack} from "@mui/material";
import { Icon } from "@iconify/react";

const genreList = ["Action", "Animation", "science-fiction"];
export function Items({ onAddMovie,onClose }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() / !year / !genre / !posterUrl.trim()) {
      setError("Vruillez remplir tous les champs.");
      return;
    }
    setError("");

    const newFilm = {
      id: Date.now(),
      title: title.trim(),
      year: year.trim(),
      genre: genre.trim(),
      posterUrl: posterUrl.trim(),
      likes: 0,
      estRecent: true,
    };

    onAddMovie(newFilm);
    setTitle("");
    setGenre("");
    setYear("");
    setPosterUrl("");
  };
  return (
    <Box
      spacing={2}
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 3,
        position: "relative",
        borderRadius: 2,

        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: 400,
        mx: "auto",
        mt: 2,

        backgourdColor: '"#fff',
      }}
    >
      <Stack direction={"row"} spacing={1}>
        <Icon
          icon="reicon:video-play-filled"
          style={{ color: "#2d8ebb", fontSize: "40px" }}
        />
        <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
          Ajouter un film
        </Typography>
      </Stack>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Box>
        <Typography>Titre du film</Typography>
        <TextField
          type="text"
          placeholder="Ex :Dune"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
      </Box>

      <Box>
        {" "}
        <Typography>Annee du film</Typography>
        <TextField
          placeholder="Ex :2021"
          type="number"
          variant="outlined"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          fullWidth
        />
      </Box>

      <Box>
        <Typography>Genre</Typography>
        <label htmlFor=""></label>
        <TextField
          select
          placeholder="Selectionnez un genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          fullWidth
        >
          <MenuItem>
            <em>genre</em>
          </MenuItem>
          {genreList.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}{" "}
        </TextField>
      </Box>
      <Box>
        <Typography>URL de l'affiche</Typography>
        <TextField
          placeholder="https://..."
          variant="outlined"
          value={posterUrl}
          onChange={(e) => setPosterUrl(e.target.value)}
          fullWidth
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ textTransform: "capitalize" }}
      >
        Ajouter le film
      </Button>
      {onClose && (
        <Button sx={{ position: "absolute" , right: 1,
                      top: 10,color:"inherit"}} onClick={onClose}>
          x
        </Button>
      )}
    </Box>
  );
}
