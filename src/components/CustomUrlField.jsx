import { useRecordContext } from "react-admin";
import { makeStyles } from "@material-ui/core";
import Lauch from "@material-ui/icons/Launch";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "red",
  },
});

export function CustomUrlField({ source }) {
  const record = useRecordContext();
  const classes = useStyles();
  return record ? (
    <a className={classes.link} href={record[source]}>
      {`Site: ${record[source]}`}
      <Lauch />
    </a>
  ) : null;
}
