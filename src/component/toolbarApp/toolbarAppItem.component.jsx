// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(25),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

// export default function ToolbarAppItems({items}) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//         {
//             items ? 
//             items.map((item , index) =>(
//                 <Accordion key={index}>
//                     <AccordionSummary
//                     expandIcon={item.subset.length ? <ExpandMoreIcon /> : ''}
//                     aria-controls={`panel${index + 1}a-content`}
//                     id={`panel${index + 1}a-header`}
//                     >
//                     <Typography className={classes.heading}>{item.item}</Typography>
//                     </AccordionSummary>
//                    {item.subset.length > 0 ? <AccordionDetails>
//                         {
//                             item.subset.length > 0 ? <ul>
//                                 {item.subset.map((subItem , index) =>(
//                                     <li key={index}><a>{subItem.subitem}</a></li>
//                                 ))}
//                             </ul> : ''
//                         }
//                     </AccordionDetails> : ''}
//                 </Accordion>
//             )) : ''
//         }
     
//     </div>
//   );
// }
/////////////////////////
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function ToolbarAppItems({items}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{position:'absolute',top:'10rem',left:'0',width:'100%'}}>
        {
            items ? 
            items.map((item , index) =>(
                <Accordion key={index} square expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                    <AccordionSummary aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}>
                    <Typography>{item.item}</Typography>
                    </AccordionSummary>
                    { item.subset.length > 0 ? 
                    <AccordionDetails>
                        { item.subset.length > 0 ? <ul>
                                             {item.subset.map((subItem , i) =>(
                                    <li key={i}><a>{subItem.subitem}</a></li>
                                ))}
                            </ul> : ''}
                    </AccordionDetails> 
                    : ''}
                </Accordion>
 
            )) : ''
        }

    </div>
  );
}