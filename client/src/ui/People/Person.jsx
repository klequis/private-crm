import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { Typography } from '@material-ui/core'
import { green } from 'logger'
import { hasProp } from '../../lib/hasProp';

const getCity = (person) => {
  if (hasProp('address', person)) {
    return person.address[0].city
  } else {
    return ''
  }
}

const Person = (props) => {
  const { classes, person } = props
  const { firstName, lastName, company, local, relationshipStrength } = person

  return (
    <div className={classes.wrapper}>
      <Typography variant='body1' className={classNames(classes.cell, classes.firstName)}>{firstName}</Typography>
      <Typography variant='body1' className={classNames(classes.cell, classes.lastName)}>{lastName}</Typography>
      <Typography variant='body1' className={classNames(classes.cell, classes.company)}>{company}</Typography>
      <Typography variant='body1' className={classNames(classes.cell, classes.city)}>{getCity(person)}</Typography>
      <Typography variant='body1' className={classNames(classes.cell, classes.local)}>{local ? 'yes' : 'no'}</Typography>
      <Typography variant='body1' className={classNames(classes.cell, classes.strength)}>{relationshipStrength}</Typography>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    backgroundColor: 'red',
    margin: '8px 0'
  },
  cell: {
    padding: 8,
    border: '1px solid white',
  },
  city: {
    flexBasis: '15%',
  },
  company: {
    flexBasis: '20%',
  },
  firstName: {
    flexBasis: '15%',
  },
  lastName: {
    flexBasis: '15%',
  },
  local: {
    flexBasis: '6%',
  },
  strength: {
    flexBasis: '5%',
  },

}

export default withStyles(styles)(Person)