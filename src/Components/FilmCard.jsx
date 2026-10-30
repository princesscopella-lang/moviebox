import React, { useState } from "react";
import Bouton from "./Bouton.jsx";
import { estRecent, getMessageLikes } from "../utils/helper.js";
import { Icon } from "@iconify/react";

import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Box,
  colors,
  Chip,
} from "@mui/material";

function FilmCard({ titre, annee, genre, estFavori, onToggle, image }) {
  const [likes, setLikes] = useState(0);
  const [numberLike, setNumberLike] = useState(false);

  // so that when we click the like increase
  const handleLike = () => {
    setLikes((prev) => prev + 1);
    // so that at 5 likes it changes to pink
    if (likes >= 4) {
      setNumberLike(true);
    } else {
      setNumberLike(false);
    }
  };
  // so when we click the like reduce
  const handleDisLike = () => {
    setLikes((prev) => Math.max(0, prev - 1));
    if (likes >= 6) {
      setNumberLike(true);
    } else {
      setNumberLike(false);
    }
  };

  const messagelikes = getMessageLikes(likes);
  const filmEstRecent = estRecent(annee);
  return (
    <Card
      sx={{
        boxShadow: "1px 4px 20px -3px rgba(240, 235, 235, 0.47)",
        maxWidth: 500,
        borderRadius: 4,
        position: "relative",
      }}
    >
      <CardContent>
        {/* what is written */}
        <Stack spacing={2}>
          <Stack direction={"row"} spacing={2}>
            <Stack>
              <CardMedia
                component="img"
                height="194"
                src={image}
                alt={titre}
                sx={{
                  borderRadius: 2,
                }}
              />
            </Stack>
            <Stack>
              <Stack direction={"row"} spacing={20}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: "bold" }}
                >
                  {titre}
                </Typography>

                {filmEstRecent && (
                  <Chip
                    label="Recent"
                    color="primary"
                    sx={{
                      position: "absolute",
                      right: 6,
                      top: 10,
                    }}
                  />
                )}
              </Stack>

              <Typography sx={{ mt: 2 }}>Annee: {annee}</Typography>
              <Typography variant="body2" color="text.secondary">
                Genre: {genre}
              </Typography>
              <Stack direction="row" sx={{ mt: 5 }}>
                <Typography variant="body2" sx={{ fontSize: "20px" }}>
                  {" "}
                  <Icon
                    icon="andrsrxn:heart-filled"
                    style={{ fontSize: "17px", color: "red" }}
                  />{" "}
                  {likes}
                  {likes <= 1 ? "like" : "likes"}
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                sx={{
                  color: likes >= 1 ? "red" : "text.secondary",
                  mt: 0.5,
                  fontSize: "19px",
                }}
              >
                {messagelikes}
              </Typography>
            </Stack>
          </Stack>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Bouton
              startIcon={
                <Icon
                  icon="mdi:heart"
                  style={{ fontSize: "24px", color: "#5382c3" }}
                />
              }
              texte="J'aime"
              color="error"
              onClick={handleLike}
              textColor="white"
              // bgColor={"red"}
            />

            <Bouton
              texte="J'aime plus"
              color="inherit"
              onClick={handleDisLike}
              textColor="black"
            />
            {/* <Button onClick={onToggle} variant="outlined">
              {estFavori ? (
                <Icon icon="andrsrxn:heart-filled" style={{ color: "red" }} />
              ) : (
                <Icon icon="akar-icons:heart" style={{ color: "" }} />
              )}
            </Button> */}

            <Button
              onClick={onToggle}
              variant="outlined"
              sx={{
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                minWidth: "unset",
                p: 0,
                borderColor: "transparent",
                backgroundColor: "rgba(227, 100, 20, 0.1)",
              }}
            >
              {estFavori ? (
                <Icon icon="andrsrxn:heart-filled" style={{ color: "red" }} />
              ) : (
                <Icon icon="akar-icons:heart" style={{ color: "red" }} />
              )}
            </Button>
          </Box>
        </Stack>

        {/* <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          <h3>{titre}</h3>
        </Typography>
      

        <Typography variant="body2" color="text.secondary" sx={{ mt: -2 }}>
          Annee: {annee}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: {genre}
        </Typography>

        <Stack direction="row" sx={{ mt: 5 }}>
          <Typography variant="body2" sx={{ fontSize: "15px" }}>
            {likes}
            {likes <= 1 ? "like" : "likes"}
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            color: likes >= 1 ? "red" : "text.secondary",
            mt: 0.5,
            fontSize: "19px",
          }}
        >
          {messagelikes}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "200",
            mt: 6,
            gap: 5,
          }}
        >
          <Bouton
            texte="J'aime plus"
            color="inherit"
            onClick={handleDisLike}
            textColor="black"
          />

          <Button onClick={onToggle} variant="contained">
            {estFavori ? (
              <Icon icon="andrsrxn:heart-filled" style={{ color: "red" }} />
            ) : (
              <Icon icon="akar-icons:heart" style={{ color: "" }} />
            )}
          </Button>
        </Box> */}
      </CardContent>
    </Card>
  );
}
export default FilmCard;
