import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingBackdrop({ open, message = "Logging Out" }) {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 9999, 
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      open={open} 
    >
      <CircularProgress color="inherit" />
      <span className="text-white text-sm font-medium tracking-wide">
        {message} {/* Menerima pesan teks dinamis lewat props */}
      </span>
    </Backdrop>
  );
}

export default LoadingBackdrop;