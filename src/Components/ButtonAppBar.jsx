import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Icon } from "@iconify/react";
import { Stack } from "@mui/material";

export function ButtonAppBar({ titre, sousTitre, favoriteCount }) {
  return (
    <Box sx={{ mb: 4, pt: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          m: 0,
          p: 0,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Stack sx={{ justifyContent: "space-between", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Stack direction={"row"} spacing={1}>
              <Icon
                icon="reicon:video-play-filled"
                style={{ color: "#2d8ebb", fontSize: "80px" }}
              />

              <Box>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{ fontWeight: "bold", fontSize: "38px", color: "black" }}
                >
                  {titre}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    color: "#555555",
                  }}
                >
                  {sousTitre}
                </Typography>
              </Box>
            </Stack>
            <Box
              sx={{
                border: "1px solid rgba(240, 235, 235, 4)",
                borderRadius: 2,
                padding: "12px 45px",
                width: "150px",
                boxShadow: "1px 4px 20px -3px rgba(240, 235, 235, 0.47)",
                background: "white",
              }}
            >
              <Stack direction={"row"} spacing={1}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  {favoriteCount}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  films favoris
                </Typography>
              </Stack>
            </Box>

            {/* <Stack>
              <Button>Login</Button>
            </Stack> */}
          </Box>
        </Stack>
      </AppBar>
    </Box>
  );
}
