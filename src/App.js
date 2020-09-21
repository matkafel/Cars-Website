import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/Home/Home';
import TypeOfCar from './components/TypeOfCar/TypeOfCar';
import TypeOfFuel from './components/TypeOfFuel/TypeOfFuel';
import Contact from './components/Contact/Contact';
import Audi from './components/Models/Audi/Audi';
import Bmw from './components/Models/Bmw/Bmw';
import Mercedes from './components/Models/Mercedes/Mercedes';
import Jaguar from './components/Models/Jaguar/Jaguar';
import Jeep from './components/Models/Jeep/Jeep';
import Tesla from './components/Models/Tesla/Tesla';
import { Container, Wrapper, HomeWrapper } from './App.style';




const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Container>
          <Wrapper>
            <HomeWrapper>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/type-of-cars" component={TypeOfCar} />
                <Route exact path="/type-of-fuel" component={TypeOfFuel} />
                <Route exact path="/contact-us" component={Contact} />
                <Route exact path="/audi" component={Audi} />
                <Route exact path="/bmw" component={Bmw} />
                <Route exact path="/mercedes" component={Mercedes} />
                <Route exact path="/jaguar" component={Jaguar} />
                <Route exact path="/jeep" component={Jeep} />
                <Route exact path="/tesla" component={Tesla} />
              </Switch>
            </HomeWrapper>
          </Wrapper>
        </Container>
      </div>
    </Router>
  );
};








export default App;