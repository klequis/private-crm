import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import iMeetup from './media/meetup-swarm.svg'
import iSlack from './media/slack.svg'
import iFacebook from './media/facebook.svg'
import iGithub from './media/github-octocat.svg'

const Us = (props) => {
  const { classes } = props

  return (
    <React.Fragment>
      <div className={classes.group}>
        <div className={classes.join}>
          <Typography variant='subtitle1' align='center' color='inherit' className={classes.groupTitle}>
            Join Us
          </Typography>
          <div className={classes.logoGroup}>
            <a href='https://www.meetup.com/trivalleycoders/'>
              <img src={iMeetup} className={classes.logoImg} alt='meetup' />
            </a>
            <a href='https://join.slack.com/t/trivalleycoders/shared_invite/enQtMjk2NDY3NDAwMjI1LWU0YjFjNjE5MDgwYzYwYmUwMWJlNjk1NDU4YmI5ZmZjZGU0ZDcwY2E2Y2RlNmU0MWFlZTUyODFkYzM1NGVlYTQ'>
              <img src={iSlack} className={classes.logoImg} alt='meetup' />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.group}>
        <div className={classes.follow}>
          <Typography variant='subtitle1' align='center' color='inherit' className={classes.groupTitle}>
            Follow Us
          </Typography>
          <div className={classes.logoGroup}>
            <a href='https://www.facebook.com/groups/free.code.camp.sanramon/'>
              <img src={iFacebook} className={classes.logoImg} alt='meetup' />
            </a>
            <a href='https://github.com/trivalleycoders-org'>
              <img src={iGithub} className={classes.logoImg} alt='meetup' />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.contactGroup}>
        <Typography variant='subtitle1' align='center' color='inherit'className={classes.emailTitle}>
          Contact Us
        </Typography>
        <Typography variant='body1' align='center' color='inherit' className={classes.email}>
          info@trivalleycoders.com
        </Typography>
      </div>
    </React.Fragment>
  )
}

const styles = theme => {
  const spaceUnit = theme.spacing.unit
  return ({
    group: {
      flexBasis: '33.333333%',
      paddingBottom: spaceUnit * 2,
      [theme.breakpoints.up('md')]: {
        paddingBottom: 0,
      },
    },
    groupTitle: {
      marginBottom: spaceUnit * 2,
    },
    logoImg: {
      maxHeight: 40,
      margin: '0 15px',
    },
    logoGroup: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contactGroup: {
      flexBasis: '33.333333%',
    },
    emailTitle: {
      marginBottom: spaceUnit * 2,
    },
    email: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        height: 40,
      },
    },
  })
}



export default withStyles(styles)(Us)