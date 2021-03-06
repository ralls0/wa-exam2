import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
      margin: "7%",
      maxWidth: "100vw",
      minWidth: "60vw",
      minHeight: "70vh",
      maxHeight: "70vh",
      borderRadius: "25px",
      listStyle: "none",
      overflowY: "scroll",
      overflowX: "hidden",
    },
  }));

  export { useStyles }
