import React from 'react';
import Item from './item';
import Confetti from './Confetti';
import './App.css';

const rowData = [
    [
        "Someone drinks water",
        "Talking way too loud",
        "Someone is late",
        "Ticket Rolls",
        "Annoying Echo"
    ],
    [
        "Upset people or funny face",
        "Forehead only shown",
        "Breathing aggresively",
        "Talking on mute",
        "Timeline/Status Update"
    ],
    [
        "Talking over each other",
        "Not sharing screen",
        "Free",
        ">13 Story points",
        "Eating/Snacking"
    ],
    [
        "Someone leaves early",
        "Awkward silence",
        "Animal distraction",
        "Robot/Static Voice",
        "Burndown is a cliff dive"
    ],
    [
        "Asking if everyone can hear you",
        "Going off topic",
        "<45 min. or >4hr sprint plannning",
        "Background talking/noise",
        "Covering mouth with hand"
    ]
]

export default class App extends React.Component {

    onClickHandler(event) {
        alert('something')
    }

    render(){
        return (
            <div className="App">
                <Confetti />
                <div class="container grid-container">
                    {rowData.map(row =>
                        <Item
                            onClickHandler={this.onClickHandler}
                            labels={row}
                        />
                    )}
                </div>
            </div>
        );
    }
}


