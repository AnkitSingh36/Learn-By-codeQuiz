import { HashRouter, Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import Amplify, { Hub } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useState } from 'react';
import axios from "axios";
import { Auth } from 'aws-amplify';

Amplify.configure(awsconfig);


function App() {
    const [name, setName] = useState('');
    const [questions, setQuestions] = useState('');
    const [score, setScore] = useState(0);
    const history = useHistory();
    const fetchQestions = async (category = '', difficulty = '') => {
        setQuestions([]);
        const { data } = await axios.get(`https://quizapi.io/api/v1/questions?apiKey=x9NWMxSEigECwx9goxX11Y5AscrsAFU5JsBxzW28${`&category=${category}&difficulty=${difficulty}`}&limit=10`);
        if (data) {
            localStorage.setItem("newQuestions", JSON.stringify(data));
        }
        setQuestions(data);
    };
    const [currentUser, setCurrentUser] = useState();
    Hub.listen('auth', () => {
        history.push('/');
    });

    Auth.currentSession()
        .then(data => {
            setCurrentUser(data.accessToken.payload.username);
        })
        .catch(err => console.log(err));
  return (
    <HashRouter basename='/'>
          <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
              <Header name={ currentUser }/>
                <Switch>
                    <Route path='/' exact>
                      <Home
                          name={currentUser}
                          setname={setName}
                          fetchQuestions={fetchQestions}
                      />
                    </Route>
                    <Route path='/quiz' exact>
                      <Quiz
                          name={name}
                          score={score}
                          setScore={setScore}
                          questions={questions}
                          setQuestions={setQuestions}
                      />
                    </Route>
                    <Route path='/result' exact>
                      <Result
                          name={name}
                          score={score}
                      />
                    </Route>
                </Switch>
          </div>
      <Footer />
    </HashRouter>
  );
}

export default withAuthenticator(App);
