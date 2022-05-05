import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Store } from "/utils/globalStore.js";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgb(6,24,54)",
  // border: "2px solid #000",
  boxShadow: "10px -5px 4px white, -10px 5px 4px red",
  p: 4,
};

export default function TransitionsModal(props) {
  const { state, dispatch } = useContext(Store);
  const { modalControl, modalData } = state;
  const modalCloseHandler = () => {
    dispatch({ type: "CLOSE_MODAL" });
    dispatch({ type: "SET_MODAL_DATA", payload: {} });
  };
  // console.log(modalData);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalControl}
        onClose={modalCloseHandler}
        onBackdropClick={modalCloseHandler}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <Box sx={style}>
            {modalData?.data ? (
              <>
                <Typography
                  id="transition-modal-title"
                  variant="h4"
                  component="h4"
                  color="text.primary"
                >
                  {modalData.data.name}
                </Typography>
                <Image
                  src={modalData.data.images.large}
                  alt={`${modalData.data.name} card`}
                  width={200}
                  height={300}
                />
                <Typography
                  id="transition-modal-description"
                  color="text.primary"
                  letterSpacing="1px"
                  sx={{ mt: 2 }}
                >
                  {modalData.data.flavorText
                    ? modalData.data.flavorText
                    : "No Description Available"}
                </Typography>
              </>
            ) : (
              <Typography>Loading...</Typography>
            )}
            <Button onClick={modalCloseHandler}>
              <Typography
              sx={{
                "&:hover":{
                  color: "red"
                }
              }}
              >Close</Typography>
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
