import { Grid } from "@mui/material";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <footer>
          Powered by{" "}
          <a
            href="https://wpengine.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            WP Engine
          </a>
        </footer>
      </Grid>
    </Grid>
  );
}
