import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import classNames from 'classnames'
import { getAllPeople } from 'store/selectors/people-selectors'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { green } from 'logger'
import Person from './Person'

class People extends React.Component {

  render () {
    const { classes, people } = this.props

    return (

      <div>
        <div className={classes.headings}>
          <Typography
            variant='body1'
            className={classNames(classes.heading, classes.first)}
          >
            First
          </Typography>
          <Typography
            variant='body1'
            className={classNames(classes.heading, classes.last)}
          >
            Last
          </Typography>
          <Typography
            variant='body1'
            className={classNames(classes.heading, classes.company)}
          >
            Company
          </Typography>
          <Typography
            variant='body1'
            className={classNames(classes.heading, classes.city)}
          >
            city
          </Typography>
          <Typography
            variant='body1'
            className={classNames(classes.heading, classes.local)}
          >
            local
          </Typography>
          <Typography
            variant='body1'
            className={classNames(classes.heading, classes.strength)}
          >
            Strength
          </Typography>
        </div>
        {
          this.props.people.map(p => {
            {/* green('p', p) */}
            return <Person
              key={p._id}
              person={p}
            />
          })
        }
      </div>
    )
  }
}

const styles = theme => ({
  headings: {
    display: 'flex',

  },
  heading: {
    padding: 8,
    border: '1px solid white',
  },
  city: {
    flexBasis: '15%',
  },
  company: {
    flexBasis: '20%',
  },
  first: {
    flexBasis: '15%',
  },
  last: {
    flexBasis: '15%',
  },
  local: {
    flexBasis: '6%',
  },
  strength: {
    flexBasis: '5%',
  },
})

const actions = {}
const mstp = (state) => {
  return {
    people: getAllPeople(state)
  }
}

export default compose(
  withStyles(styles),
  connect(mstp, actions)
)(People)