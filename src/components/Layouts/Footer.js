import { makeStyles } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    width: "100%",
    height: "auto",
    padding: "50px 100px",
    background: theme.palette.background.paper,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    fontSize: "0.85rem",
    [theme.breakpoints.down("md")]: {
      padding: "40px",
    },
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  footerSection: {
    marginRight: "30px",

    "&.aboutus": {
      width: "40%",
    },
    "&.quicklink": {
      position: "relative",
      width: "25%",
    },
    "&.contact": {
      width: "calc(35% - 60px)",
      marginRight: "0 !important",
    },

    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginBottom: "40px",

      "&.aboutus, &.quicklink, &.contact": {
        width: "100%",
      },
    },
  },
  footerHeaderText: {
    position: "relative",
    // color: "#fff",
    fontWeight: 500,
    marginBottom: "15px",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: -5,
      left: 0,
      width: "50px",
      height: "2px",
      background: theme.palette.primary.light,
    },
  },
  footerPText: {
    color: "#999",
  },
  footerSocialIcons: {
    marginTop: "20px",
    display: "flex",
    padding: 0,

    "& li": {
      listStyle: "none",
    },

    "& li a": {
      width: "40px",
      height: "40px",
      background: theme.palette.common.black,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "10px",
      textDecoration: "none",
      borderRadius: "50%",
      color: "#fff",
      fontSize: "1.1rem",

      "&:hover": {
        background: theme.palette.primary.dark,
      },
    },
  },
  footerLinkList: {
    padding: 0,
    "& li": {
      listStyle: "none",
    },
    "& li a": {
      color: theme.palette.text.secondary,
      textDecoration: "none",
      marginBottom: "10px",
      display: "inline-block",
      "&:hover": {
        color: "#000",
      },
    },

    "&.info": {
      position: "relative",

      "& li": {
        display: "flex",
        marginBottom: "16px",
      },

      "& li span": {
        color: "#fff",
        fontSize: "20px",
        marginRight: "10px",
      },
    },
  },
  copyRightText: {
      margin: 0,
    width: "100%",
    background: theme.palette.background.paper,
    padding: "8px 100px",
    textAlign: "center",
    color: "#999",
    fontSize: "0.85rem",
    [theme.breakpoints.down("md")]: {
      padding: "8px 40px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footerContainer}>
          <div className={`${classes.footerSection} aboutus`}>
            <h2 className={classes.footerHeaderText}> About Us </h2>
            <p className={classes.footerPText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum nobis eligendi deserunt ullam quasi quia vero quisquam labore placeat numquam, dicta optio voluptas perferendis inventore, incidunt eaque debitis. Voluptates.
            </p>
            <ul className={classes.footerSocialIcons}>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sadakchap/"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/prerna-mehra/"
                >
                  {" "}
                  <LinkedInIcon />{" "}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/prerna_mehraa/"
                >
                  {" "}
                  <InstagramIcon />{" "}
                </a>
              </li>
              <li>
                <a href="mailto:aliceprerna@gmail.com">
                  {" "}
                  <MailOutlineIcon />{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className={`${classes.footerSection} quicklink`}>
            <h2 className={classes.footerHeaderText}>Sitemap</h2>
            <ul className={classes.footerLinkList}>
              <li>
                <a target="_blank" rel="noreferrer" href="#!">
                  Home
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="#!">
                  Seller
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="#!">
                  Buyer
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="#!">
                  Search
                </a>
              </li>
            </ul>
          </div>
          <div className={`${classes.footerSection} contact`}>
            <h2 className={classes.footerHeaderText}>Services</h2>
            <ul className={`${classes.footerLinkList} info`}><li>
                <a target="_blank" rel="noreferrer" href="#!">
                  Help
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="#!">
                  Request a Feature
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="#!">
                  Terms and Policy
                </a>
              </li>
              </ul>
          </div>
        </div>
      </footer>
      <div>
        <p className={classes.copyRightText}>
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
