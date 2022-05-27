// import React from "react";
import { ImgProfile } from "../../IU/ImgProfile/ImgProfile";
// import { Search } from "../../IU/Search/Search";
import { TextOversight } from "../../IU/TextOversight/TextOversight";
import "./Header.css";


// export const Header = () => {
//   return (
//     <div className="headerStudent">
//       <div className="contTitleStudent">
//         <TextOversight text='textStudent'/>
//       </div>
//       {/* <div className="contPrueba">
//         <input type="text" placeholder="a" className="inputPrueba" />
//       </div> */}
//       <div className="contImageStudent">
//         <ImgProfile img='imgStudent'/>
//       </div>
//   </div>
//   );
// };
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
 
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>
            <TextOversight text='textStudent'/>
          </Typography>
          <div className={classes.grow} />
          <div className="contImageStudent">
          <ImgProfile img='imgStudent'/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
