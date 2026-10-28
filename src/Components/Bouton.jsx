import { Button } from "@mui/material";
function Bouton({ texte, onClick, color, disabled, textColor = "white", bgColor }) {
  return (
    <Button
      variant="contained"
      size="large"
      color={color}
      onClick={onClick}
      disabled={disabled}
      disableElevation
      sx={{
        borderRadius: 2,
        textTransform: "none",
        flexGrow: 1,
        color: textColor,
        // backgroundColor: bgColor,
      }}
    >
      {" "}
      {texte}
    </Button>
  );
}
export default Bouton;
