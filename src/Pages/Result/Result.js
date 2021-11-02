import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";


const Result = ({ name, score }) => {
    const history = useHistory();
    const handleSubmit = () => {
        history.push("/");
    };
    return (
        <div className="result">
            <span className="title">Final Score : {score}</span>
            <Button
                onClick={handleSubmit}
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
                href="/"
            >
                Go to homepage
            </Button>
        </div>
    );
}

export default Result;