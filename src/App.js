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
                <div class="row">
                    <div class="col-sm-offset-3 col-sm-1 grid-item">Upset people or funny face</div>
                    <div class="col-sm-1 grid-item">Forehead only shown</div>
                    <div class="col-sm-1 grid-item">Breathing aggresively</div>
                    <div class="col-sm-1 grid-item">Talking on mute</div>
                    <div class="col-sm-1 grid-item">Timeline/Status Update</div>
                </div>
                <div class="row">
                    <div class="col-sm-offset-3 col-sm-1 grid-item">Talking over each other</div>
                    <div class="col-sm-1 grid-item">Not sharing screen</div>
                    <div class="col-sm-1 grid-item">Free</div>
                    <div class="col-sm-1 grid-item"> {'>13 Story points'}</div>
                    <div class="col-sm-1 grid-item"> Eating/Snacking</div>
                </div>
                <div class="row">
                    <div class="col-sm-offset-3 col-sm-1 grid-item">Someone leaves early</div>
                    <div class="col-sm-1 grid-item">Awkward silence</div>
                    <div class="col-sm-1 grid-item">Animal distraction</div>
                    <div class="col-sm-1 grid-item">Robot/Static Voice</div>
                    <div class="col-sm-1 grid-item">Burndown is a cliff dive</div>
                </div>
                <div class="row">
                    <div class="col-sm-offset-3 col-sm-1 grid-item">Asking if everyone can hear you</div>
                    <div class="col-sm-1 grid-item">Going off topic</div>
                    <div class="col-sm-1 grid-item"> {'<45 min. or >4hr sprint plannning'}</div>
                    <div class="col-sm-1 grid-item">Background talking/noise</div>
                    <div class="col-sm-1 grid-item">Covering mouth with hand</div>
                </div>
            </div>
        </div>
    );
}

export default App;
