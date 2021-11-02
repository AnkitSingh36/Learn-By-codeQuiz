import React from 'react';
import './Home.css';
import { Button, MenuItem, TextField} from '@material-ui/core';
import Categories from '../../Data/Categories';
import { useState } from 'react';
import { useHistory } from 'react-router';

function Home({ fetchQuestions }) {
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [error, setError] = useState(false);

    const history = useHistory(); //use to push to route on click
    localStorage.removeItem('newQuestions');

    const handleSubmit = () => {
        if (!category) {
            setError(true);
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            history.push('/quiz');
        }
    }

    return (
        <div className="home-content">
            <div className="home-settings">
                <span style={{ fontSize: 30 }}>Quiz Setting</span>
                <div className="settings__select">
                    {error && (<div className="error">Field Should not be Empty</div>)}

                    <TextField
                        select
                        label="Select Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                    >
                        {Categories.map((cat) => (
                            <MenuItem key={cat.value} value={cat.category}>
                                {cat.category}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField select style={{ marginBottom: 30}} label="Dificulty" variant="outlined" onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
                        <MenuItem key='Easy' value='easy'> Easy </MenuItem>
                        <MenuItem key='Medium' value='medium'> Medium </MenuItem>
                        <MenuItem key='Hard' value='hard'> Hard </MenuItem>
                    </TextField>

                    <Button variant='contained' size='large' color='secondary' onClick={handleSubmit}>Start Quiz</Button>

                </div>
            </div>
            <img src='/quizimg.svg' className="banner" alt="quiz img"></img>
        </div>
    );
}

export default Home;