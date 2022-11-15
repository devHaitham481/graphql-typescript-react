import { TextField, InputAdornment, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  input: {
    width: '540px',
    marginTop: '50px',
    margin: '5em auto',
  },
});

const SearchBar = ({ value, onChange }: any) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      label="Search for issues..."
      type="search"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
