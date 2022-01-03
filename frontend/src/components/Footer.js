import { AppBar, Toolbar, Tooltip, Button } from "@mui/material";

const Footer = (props) => {
  return (
    <div className="footer">
      <AppBar position="relative">
        <Toolbar variant="dense">
          <Tooltip title="Jetzt Kontakt aufnehmen.">
            <Button color="inherit" onClick={props.debug2}>
              Kontakt
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Footer;