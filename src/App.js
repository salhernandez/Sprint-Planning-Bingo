import Item from './item'
import Confetti from './Confetti';
import './App.css';

function onClickHandler(event){
    alert('something')
}

function App() {
    return (
        <div className="App">
            <Confetti/>
            <div class="container grid-container">
                <Item
                    onClickHandler = {onClickHandler}
                    labels = {[
                        "Someone drinks water",
                        "Talking way too loud",
                        "Someone is late",
                        "Ticket Rolls",
                        "Annoying Echo"
                    ]}
                />
                <Item
                    onClickHandler = {onClickHandler}
                    labels = {[
                        "Upset people or funny face",
                        "Forehead only shown",
                        "Breathing aggresively",
                        "Talking on mute",
                        "Timeline/Status Update"
                    ]}
                />
                <Item
                    onClickHandler = {onClickHandler}
                    labels = {[
                        "Talking over each other",
                        "Not sharing screen",
                        "Free",
                        ">13 Story points",
                        "Eating/Snacking"
                    ]}
                />
                <Item
                    onClickHandler = {onClickHandler}
                    labels = {[
                        "Someone leaves early",
                        "Awkward silence",
                        "Animal distraction",
                        "Robot/Static Voice",
                        "Burndown is a cliff dive"
                    ]}
                />
                <Item
                    onClickHandler = {onClickHandler}
                    labels = {[
                        "Asking if everyone can hear you",
                        "Going off topic",
                        "<45 min. or >4hr sprint plannning",
                        "Background talking/noise",
                        "Covering mouth with hand"
                    ]}
                />
            </div>
        </div>
    );
}

export default App;
