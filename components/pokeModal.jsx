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
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
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
                  variant="h6"
                  component="h2"
                  color="text.secondary"
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
                  color="text.secondary"
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
              <Typography>Close</Typography>
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
