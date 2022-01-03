import { AppBar, Toolbar, Tooltip, Button } from "@mui/material";

const Header = (props) => {
  return (
    <div className="header">
      <AppBar position="relative">
        <Toolbar variant="dense">
          <Tooltip title="myapp">
            <Button color="inherit" onClick={props.debug}>
              myapp
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;