import "./styles.css";
import "react";
import * as confettiReact from "https://esm.run/confetti-react";
import { Route, browserHistory } from "react-router";
import { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Tooltip,
  Slide,
  useScrollTrigger
} from "@material-ui/core";
import RainbowScrollbar from "react-rainbow-scrollbar";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createSpacing from "@material-ui/core/styles/createSpacing";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Info } from "@material-ui/icons";
import { Info as Infoo } from "@mui-treasury/components/info";
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ffffff"
    }
  }
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  buttons: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  cardmedia: {
    height: "300px",
    width: "100%",
    objectFit: "cover"
  },
  card: {
    zIndex: 1,
    position: "absolute",
    height: "300px",
    width: "100%"
  },
  cardcontent: {
    zIndex: 2,
    position: "absolute",
    display: "flex",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  }
}));
const TopBar = (props) => {
  const topbarthing = useStyles();
  return (
    <div className={topbarthing.root}>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Link to="/">
              <Avatar src="https://tse3.mm.bing.net/th?id=OIP.Aj5qEEOiSAdnOB5K6vYLHQEsCm&pid=Api" />
            </Link>
            <Typography variant="h6" className={topbarthing.title}>
              PLACEHOLDER
            </Typography>
            <Link to="/info">
              <ThemeProvider theme={theme}>
                <Tooltip title="About">
                  <IconButton
                    className={topbarthing.buttons}
                    edge="end"
                    color="secondary"
                  >
                    <Info />
                  </IconButton>
                </Tooltip>
              </ThemeProvider>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {props.children}
    </div>
  );
};

class Home extends Component {
  constructor(props) {
    super();
  }
  render() {
    $("#title").html("{PLACEHOLDER} - Home");
    return (
      <>
        <RainbowScrollbar />
        <TopBar></TopBar>
        <Card className={this.props.topbarthing.card}>
          <CardMedia
            className={this.props.topbarthing.cardmedia}
            image="https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg"
          ></CardMedia>
          <Box>
            <Infoo className={this.props.topbarthing.cardcontent}>
              <Typography varaint="h2">PLACEHOLDER</Typography>
            </Infoo>
          </Box>
        </Card>
        <Card
          variant="outlined"
          style={{
            position: "absolute",
            bottom: "-200px",
            minWidth: 275,
            left: "50%",
            transform: "translate(-50%,-50%)"
          }}
        >
          <CardHeader title="PLACEHOLDER" subheader="PLACEHOLDER" />
          <CardContent>
            <Typography
              component="p"
              style={{
                textAlign: "center"
              }}
              variant="body2"
            >
              PLACEHOLDER
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }
}
const About = (props) => {
  return <></>;
};
export default function App() {
  const topbarstyleclasses = useStyles();
  return (
    <Router history={browserHistory}>
      <Route exact path="/">
        <Home topbarthing={topbarstyleclasses} />
      </Route>
      <Route exact path="/info">
        <About />
      </Route>
    </Router>
  );
}
