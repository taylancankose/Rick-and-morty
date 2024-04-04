import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

function ThemeSwitch({ onClick }: any) {
  const { theme } = useContext(ThemeContext);
  return (
    <FormGroup onClick={onClick}>
      <FormControlLabel
        label={""}
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
      />
    </FormGroup>
  );
}

export default ThemeSwitch;
