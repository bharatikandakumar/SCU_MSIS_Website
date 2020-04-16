import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SCUImage from '../Images/HorizontalRed1.png';
import Data from '../Data/MSIS.json';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    color: theme.palette.text.secondary,
  },
  thirdHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 650,
  },
  image: {
    maxWidth: 800,
    maxHeight: 100
  },
  formLabel:{
      backgroundColor: '#bf244a',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.background.default,
  },
  tableHead:{
      backgroundColor: '#bf244a',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.background.default,
  },
  preReq:{
      backgroundColor: '#dac1c7',
//      padding: theme.spacing(1),
       textAlign: 'center',
//      alignContent:'center',
//      justify: 'center'
  }
}));

export const Courses = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
    <Grid item xs={12}>
        <img src={SCUImage} alt="SCU" maxHeight="50px"/>
    </Grid>
    <Grid item xs={12} className={classes.formLabel}>
        <Typography variant="h3">MSIS Coursework</Typography>
     </Grid>
     <Grid item xs={12}>
      {Data.map(course => (

      <ExpansionPanel expanded={expanded === course.Subject_Catalog} onChange={handleChange(course.Subject_Catalog)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
            <Typography className={classes.heading}>{course.Subject_Catalog}</Typography>
            <Typography className={classes.secondaryHeading}>{course.Title}</Typography>
            <Typography className={classes.thirdHeading}>{course.Label}</Typography>

      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
      <Grid container spacing={3}>
      {course.Pre_Req && course.Pre_Req[0] !== "" && <Grid item container xs={12} component={Paper} className={classes.preReq} >
        <Grid item xs={4}>
            <Typography className={classes.heading}>Pre Requisites</Typography>
        </Grid>
        <Grid item xs={8}>
            <Typography className={classes.heading}>{course.Pre_Req}</Typography>
        </Grid>
      </Grid>
      }
      <Grid item xs={12}>
        <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tableHead}>
                        <Typography variant="subtitle2">Term</Typography>
                    </TableCell>
                    <TableCell align="center" className={classes.tableHead}>
                        <Typography variant="subtitle2">Professor Name</Typography>
                    </TableCell>
                    <TableCell align="center" className={classes.tableHead}>
                        <Typography variant="subtitle2">Units</Typography>
                    </TableCell>
                    <TableCell align="center" className={classes.tableHead}>
                        <Typography variant="subtitle2">Number of Students Enrolled</Typography>
                    </TableCell>
                    <TableCell align="center" className={classes.tableHead}>
                        <Typography variant="subtitle2">Syllabus</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {course.Values.map((row) => (
                    <TableRow>
                      <TableCell component="th" scope="row" align="center">
                        {row[3]}
                      </TableCell>
                      <TableCell align="center">{row[0]}</TableCell>
                      <TableCell align="center">{row[1]}</TableCell>
                      <TableCell align="center">{row[2]}</TableCell>
                      { row[4] && <TableCell align="center">
                            <Link href={row[4]} download>
                                {course.Subject_Catalog}_{row[3]}_{row[0]}_Syllabus
                            </Link>
                      </TableCell>}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
         </Grid>
         </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
      ))}
    </Grid>
    </Grid>
    </div>
  );
}


//import React from 'react';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import Typography from '@material-ui/core/Typography';
//import ListItemText from '@material-ui/core/ListItemText';
//import { makeStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import FormLabel from '@material-ui/core/FormLabel';
//import cyan from '@material-ui/core/colors/cyan';
//import Button from '@material-ui/core/Button'
//const useStyles = makeStyles(theme => ({
//  root: {
//    width: '100%',
//    flexGrow: 1,
//    backgroundColor: theme.palette.background.paper,
//  },
//  paper: {
//    padding: theme.spacing(2),
//    textAlign: 'center',
//    color: theme.palette.info.main,
//    backgroundColor: theme.palette.action.hover
//  },
//  formLabel:{
//      backgroundColor: cyan.A200,
//      padding: theme.spacing(2),
//      textAlign: 'center',
//  }
//}));
//
//export const Courses = ({ courses }) => {
//    const classes = useStyles();
//
//    const handleCourseClick = course => event => {
//        console.log("clicked", course.TITLE)
//    }
//
//    return (
//     <div className={classes.root}>
//      <Grid container spacing={3}>
//     <Grid item xs={12} className={classes.formLabel}>
//        <Typography variant="h2">MSIS Coursework</Typography>
//      </Grid>
//      {courses.map(course => (
//        <Grid item xs={12}>
//          <Paper className={classes.paper}>
//            <Grid container spacing={2}>
//                <Grid item xs={4}>
//                    <Button onClick={handleCourseClick(course)}>{course.CLASS}</Button>
//                </Grid>
//                <Grid item xs={4}>{course.TITLE}</Grid>
//            </Grid>
//          </Paper>
//        </Grid>
//      ))}
//      </Grid>
//      </div>
//
//    )
//}