import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { menuLoggedIn, menuLoggedOut } from './appDrawerData'
import { userLogout } from 'store/actions/auth-actions'
import { appMenuToggle } from 'store/actions/app-menu-actions'
import * as appMenuSelectors from 'store/selectors/app-menu-selectors'
import * as authSelectors from 'store/selectors/auth-selectors'

class AppDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.props.appMenuToggle()
  }

  handleClick = (event) => {
    if (event.target.innerHTML === 'Logout') {
      this.props.userLogout()
    }
  }

  render() {

    const { classes, isLoggedIn } = this.props

    const menuItems = isLoggedIn
      ? menuLoggedIn
      : menuLoggedOut

    const renderMenuItems = (
      <div className={classes.list}>
        <List onClick={(event) => this.handleClick(event)}>{menuItems}</List>
      </div>
    )

    return (
      <div id='AppDrawer'>
        <Drawer open={this.props.appMenuState} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {renderMenuItems}
          </div>
        </Drawer>
      </div>
    )
  }
}

const styles = {
  list: {
    width: 250,
  },
}

const mapStateToProps = (state) => ({
  appMenuState: appMenuSelectors.getAppMenuState(state),
  isLoggedIn: authSelectors.getLoggedIn(state),
})

const actions = { appMenuToggle, userLogout }

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions),
)(AppDrawer)
