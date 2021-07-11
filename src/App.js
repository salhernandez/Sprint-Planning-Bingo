import React from 'react';
import Item from './item';
import Confetti from './Confetti';
import './App.css';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rowData : [
                [
                    {
                        label: "Someone drinks water",
                        isMarked: false
                    },
                    {   
                        label: "Talking way too loud",
                        isMarked: false
                    },
                    {
                        label: "Someone is late",
                        isMarked: false
                    },
                    {
                        label: "Ticket Rolls",
                        isMarked: false
                    },
                    {
                        label: "Annoying Echo",
                        isMarked: false
                    }
                ],
                [
                    {
                        label: "Upset people or funny face",
                        isMarked: false
                    },
                    {   
                        label: "Forehead only shown",
                        isMarked: false
                    },
                    {
                        label: "Breathing aggresively",
                        isMarked: false
                    },
                    {
                        label: "Talking on mute",
                        isMarked: false
                    },
                    {
                        label: "Timeline/Status Update",
                        isMarked: false
                    }
                ],
                [
                    {
                        label: "Talking over each other",
                        isMarked: false
                    },
                    {   
                        label: "Not sharing screen",
                        isMarked: false
                    },
                    {
                        label: "Free",
                        isMarked: false
                    },
                    {
                        label: ">13 Story points",
                        isMarked: false
                    },
                    {
                        label: "Eating/Snacking",
                        isMarked: false
                    }
                ],
                [
                    {
                        label: "Someone leaves early",
                        isMarked: false
                    },
                    {   
                        label: "Awkward silence",
                        isMarked: false
                    },
                    {
                        label: "Animal distraction",
                        isMarked: false
                    },
                    {
                        label: "Robot/Static Voice",
                        isMarked: false
                    },
                    {
                        label: "Burndown is a cliff dive",
                        isMarked: false
                    }
                ],
                [
                    {
                        label: "Asking if everyone can hear you",
                        isMarked: false
                    },
                    {   
                        label: "Going off topic",
                        isMarked: false
                    },
                    {
                        label: "<45 min. or >4hr sprint plannning",
                        isMarked: false
                    },
                    {
                        label: "Background talking/noise",
                        isMarked: false
                    },
                    {
                        label: "Covering mouth with hand",
                        isMarked: false
                    }
                ]
            ]
        }
    }
    onClickHandler(event) {
        alert('something')
    }

    render(){
        const {rowData} = this.state;
        return (
            <div className="App">
                <Confetti />
                <div class="container grid-container">
                    {rowData.map(row =>
                        <Item
                            onClickHandler={this.onClickHandler}
                            data={row}
                        />
                    )}
                </div>
            </div>
        );
    }
}


