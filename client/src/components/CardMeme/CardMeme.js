import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CallSplitSharpIcon from '@material-ui/icons/CallSplitSharp';
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FAEAAC",
    padding: "1%",
    margin: "3%",
    maxWidth: "90vw",
    minWidth: "30vw",
    maxHeight: "100vh",
    borderRadius: "25px",
    overflow: "hidden",
    cursor: "pointer",
    listStyle: "none",
  },
  textPurple: {
    fontFamily: "Impact",
    textDecoration: "none",
    color: "#D153FF",
  },
  textDarkPurple: {
    fontFamily: "Impact",
    textDecoration: "none",
    color: "#2C223F",
  },
  textGreen: {
    fontFamily: "Impact",
    textDecoration: "none",
    color: "#98CC6D",
    textShadow: "1px 1px 0 #000000",
  },
  copy: {
    color: "#0BB7E5",
  },
  open: {
    color: "#6F9D58",
  }

}));

function CardMeme(props) {
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  const toggleOpen = () => setIsOpen((oldIsOpen) => !isOpen);

  return (
    <Card layout onClick={toggleOpen} className={classes.container}>
      <CardContent>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography
              variant="h6"
              className={classes.textDarkPurple}
              gutterBottom
            >
              {props.meme.title}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Typography
                variant="subtitle1"
                className={classes.textGreen}
                gutterBottom
              >
                By: {props.meme.user}
              </Typography>
              </Grid>
              <Grid item>
              {props.meme.private ? (<LockIcon color="error" />) : (<LockOpenIcon color="secondary" />)}
            </Grid>
              <Grid item>
              {props.meme.copy && (<CallSplitSharpIcon className={classes.copy} />)}
            </Grid>
          </Grid>
        </Grid>
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </CardContent>
    </Card>
  );
}

function Content(props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row" />
      <div className="row" />
      <div className="row" />
    </motion.div>
  );
}

export { CardMeme };
