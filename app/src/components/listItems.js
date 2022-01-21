import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HouseIcon from '@mui/icons-material/House';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ShowChartIcon from '@mui/icons-material/ShowChart';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HouseIcon />
      </ListItemIcon>
      <ListItemText primary="Encuesta de hogares" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Ejecución presupuestaria" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PointOfSaleIcon />
      </ListItemIcon>
      <ListItemText primary="Coparticipación tributaria" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShowChartIcon />
      </ListItemIcon>
      <ListItemText primary="Velocidad de Internet" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);