import { Fragment } from "react";
import Form from "./Components/Form/Form";
import Navigator from "./Components/Navigator/Navigator";
import FormDetails from "./Components/FormDetails/FormDetails";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navigator />
      <Switch>
        <Route path="/form" exact>
          <Form />
        </Route>
        <Route path="/formDetails">
          <FormDetails />
        </Route>
        <Route path="*">
          <Redirect to="/form" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
