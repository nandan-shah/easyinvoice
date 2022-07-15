import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
import PeopleIcon from '@material-ui/icons/People';

import LayersIcon from '@material-ui/icons/Layers';
import SettingsIcon from '@material-ui/icons/Settings';

export const sideNavItems = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '85vh',
    }}
  >
    <div>
      <ListItem button component='a' href='/dashboard'>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
      <ListItem button component='a' href='/create-invoice'>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary='Creat Invoice' />
      </ListItem>
      <ListItem button component='a' href='/invoices'>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='Invoices' />
      </ListItem>
      <ListItem button component='a' href='/clients'>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary='Clients' />
      </ListItem>
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary='Shared with me' />
      </ListItem>
    </div>
    <div>
      <ListItem button component='a' href='/profile'>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary='Settings' />
      </ListItem>
    </div>
  </div>
);
