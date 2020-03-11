import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { Container, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const marksBudget = [
  {
    value: 2700000,
    label: "2'700.000"
  },
  {
    value: 5400000,
    label: "5'400.000"
  },
  {
    value: 8100000,
    label: "8'100.000"
  },
  {
    value: 10800000,
    label: "10'800.000"
  },
  {
    value: 13500000,
    label: "13'500.000"
  }
];

const marksTree = [
  {
    value: 100,
    label: "100"
  },
  {
    value: 200,
    label: "200"
  },
  {
    value: 300,
    label: "300"
  },
  {
    value: 400,
    label: "400"
  },
  {
    value: 500,
    label: "500"
  }
];

const marksCo2 = [
  {
    value: 0.2,
    label: "0.2"
  },
  {
    value: 0.4,
    label: "0.4"
  },
  {
    value: 0.6,
    label: "0.6"
  },
  {
    value: 0.8,
    label: "0.8"
  },
  {
    value: 1,
    label: "1"
  }
];

const Budget = withStyles({
  root: {
    color: "#52af77",
    height: 8,
    padding: "10px 0"
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "5px solid currentColor",
    marginTop: -6,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 15,
    borderRadius: 10
  },
  rail: {
    height: 15,
    borderRadius: 10
  }
})(Slider);

const Tree = withStyles({
  root: {
    color: "#52af77",
    height: 8,
    padding: "10px 0"
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "5px solid currentColor",
    marginTop: -6,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 15,
    borderRadius: 10
  },
  rail: {
    height: 15,
    borderRadius: 10
  }
})(Slider);

const Co2 = withStyles({
  root: {
    color: "#52af77",
    height: 8,
    padding: "10px 0"
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "5px solid currentColor",
    marginTop: -6,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 15,
    borderRadius: 10
  },
  rail: {
    height: 15,
    borderRadius: 10
  }
})(Slider);

export default function Treeconomy() {
  const classes = useStyles();

  const [budget, setBudget] = React.useState({});

  const handleBudget = (e, value) => {
    setBudget(budget => ({ ...budget, presupuesto: value }));
  };

  const tree = budget.presupuesto / 27000;

  const co2 = tree / 500;

  const renta1 = (budget.presupuesto*12)/100

  const renta2 = (budget.presupuesto*360)/100

  return (
    <Container>
       <div className="text-center mt-5 bg-light">
          <h2>
            {" "}
            <strong className="text-success"> TREEconomy </strong>{" "}
          </h2>
        </div>
      <div className="mx-5 px-5">
        <div className={classes.margin} />
        <Typography gutterBottom className="my-5 text-center">
          <strong>Presupuesto a Invertir</strong>
        </Typography>
        <Budget
          type="number"
          name="presupuesto"
          valueLabelDisplay="on"
          marks={marksBudget}
          defaultValue={2700000}
          min={2700000}
          max={13500000}
          onChange={handleBudget}
        />
        <div className={classes.margin} />
        <Typography gutterBottom className="my-5 text-center">
          <strong>Total de Árboles</strong>
        </Typography>
        <Tree
          type="number"
          name="arboles"
          valueLabelDisplay="on"
          marks={marksTree}
          value={isNaN(tree) ? 100 : parseInt(tree)}
          min={100}
          max={500}
        />
        <div className={classes.margin} />
        <Typography gutterBottom className="my-5 text-center">
          <strong>Toneladas de CO2 al año</strong>
        </Typography>
        <Co2
          type="number"
          name="co2"
          valueLabelDisplay="on"
          marks={marksCo2}
          value={isNaN(co2) ? 0.2 : parseFloat(co2).toFixed(2)}
          min={0.2}
          max={1}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} className="text-center">
            <Typography gutterBottom className="mt-5 text-center">
              <strong>Rentabilidad Anual</strong>
            </Typography>
            <TextField
            className="bg-success"
            value={isNaN(renta1) ? "$" + " " + 0 : "$" + " " + parseFloat(renta1).toFixed()}
              InputProps={{
                readOnly: true
              }}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} className="text-center">
            <Typography gutterBottom className="mt-5 text-center">
              <strong>Rentabilidad 10 años</strong>
            </Typography>
            <TextField
             className="bg-success"
             value={isNaN(renta2) ? "$" + " " + 0 : "$" + " " + parseFloat(renta2).toFixed()}
              InputProps={{
                readOnly: true
              }}
              variant="filled"
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
