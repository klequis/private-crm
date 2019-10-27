import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { Field } from 'redux-form'
import SelectReduxComponent from './SelectReduxComponent'

const styles = theme => ({

  formControl: {
    minWidth: 120,
  },

})

const picker = (props) => {
  return (
    <SelectReduxComponent
      {...props}
    />
  )
}

class SelectRedux extends React.Component {
  state = {
    value: this.props.fieldValue
  }

  handleChange = (e, val) => {
    this.setState({value: val})
  }

  render() {
    const { classes, children, fieldLabel, fieldName, fullWidth } = this.props

    return (
      <FormControl className={classes.formControl} fullWidth>
        <InputLabel>{fieldLabel}</InputLabel>
        <Field
          component={picker}
          name={fieldName}
          fullWidth={fullWidth}
          onChange={(e, val) => this.handleChange(e, val)}
        >
          {children}
        </Field>
      </FormControl>
    )
  }
}

export default withStyles(styles)(SelectRedux)

SelectRedux.propTypes = {
  fieldValue: PropTypes.string,
  fullWidth:  PropTypes.bool,
  input: PropTypes.object,
  meta: PropTypes.object,
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  fieldLabel: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
}