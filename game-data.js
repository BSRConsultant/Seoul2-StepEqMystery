{
    title: "The Missing Trainee",
    intro: `BREAKING NEWS: Min-ji, JYP's rising star trainee, has vanished! 

    Felix: "I was teaching her some dance moves in the practice room..."
    Hyunjin: "And when I came to join them, she was gone! But look - there are equations everywhere!"
    
    As the lead detective, you need to:
    1. Find the practice room floor
    2. Identify the room number
    3. Determine the time of disappearance
    
    WARNING: You'll need 80% accuracy on equations to decode the final location!`,

    clues: [
        {
            type: "floor",
            description: "Felix's Message:\n\n'I remember taking the elevator up... The floor number is hidden in this equation. It's definitely between floors 2-10.'",
            difficulty: 1
        },
        {
            type: "room",
            description: "Hyunjin's Note:\n\n'Min-ji mentioned the practice room number... She wrote this equation on her water bottle. Rooms are numbered 1-20.'",
            difficulty: 1
        },
        {
            type: "time",
            description: "Security System:\n\n'Last card swipe time is encoded in this equation. Convert to nearest hour (1-12).'",
            difficulty: 1
        }
    ],

    hints: [
        "Felix: 'First subtract the constant from both sides...'",
        "Hyunjin: 'Then divide everything by the coefficient...'",
        "Security Guard: 'The final code combines all three numbers...'"
    ],

    finalPuzzle: {
        instruction: `FINAL CODE CALCULATION:
        1. Take the floor number (F)
        2. Multiply it by the room number (R)
        3. Add the time (T)
        
        Final Code = (F × R) + T
        
        Example: If Floor = 3, Room = 12, Time = 9
        Final Code = (3 × 12) + 9 = 45`,
        
        successMessage: `LOCATION FOUND!
        
        Min-ji left a note: "Meeting with Bang Chan to record guide vocals for my debut song! Don't tell anyone yet! 🤫"
        
        Felix: "Of course! The monthly secret recording session!"
        Hyunjin: "She's not missing - she's preparing for her surprise debut!"`,
        
        failMessage: "That's not right... Maybe check your calculations again? Remember: (Floor × Room) + Time"
    },

    requiredMastery: 0.8,
    equationType: "simple",  // ax + b = c format
    difficultyRange: {
        coefficient: {min: 2, max: 5},  // 'a' in ax + b = c
        constant: {min: -10, max: 10}   // 'b' in ax + b = c
    }
}{
    title: "The Missing Trainee",
    intro: `BREAKING NEWS: Min-ji has vanished from JYP Entertainment!

    Felix: "I was teaching her the 'God's Menu' dance break..."
    Hyunjin: "When I brought her favorite bubble tea, she was gone!"
    
    Solve equations to find: Floor × Room + Time = Location Code`,
    equationType: "ax + b = c",
    difficulty: 1
}{
    title: "The Secret Practice Room",
    intro: `Min-ji's been found, but Bang Chan discovered something intriguing...

    Bang Chan: "These practice room recordings... she's incredible!"
    Changbin: "But they're locked behind encoded security footage."
    
    Solve equations to find: Camera × Time - Unit = Access Code`,
    equationType: "ax - b = c",
    difficulty: 2
}{
    title: "The Debut Preparation",
    intro: `Han and Seungmin are helping Min-ji record her debut track!

    Han: "The guide vocals are encrypted in the studio system..."
    Seungmin: "Each recording session has its own mathematical key."
    
    Solve equations to find: (Studio + Track) × Day = Studio Code`,
    equationType: "-ax + b = c",
    difficulty: 3
}{
    title: "The First Performance",
    intro: `It's showcase day, but Lee Know noticed something wrong...

    Lee Know: "The stage formation data is corrupted!"
    I.N: "Quick! The show starts in an hour!"
    
    Solve equations to find: X + (Y × Formation) = Stage Code`,
    equationType: "ax + b = -c",
    difficulty: 4
}{
    title: "The Music Video Mystery",
    intro: `The music video files are glitching...

    Felix: "Someone's trying to leak Min-ji's debut MV!"
    Bang Chan: "We need to secure the backup server now."
    
    Solve equations to find: Server + (File × Key) = Security Code`,
    equationType: "-ax - b = c",
    difficulty: 5
}{
    title: "The Award Show Puzzle",
    intro: `Min-ji's first award show appearance is at risk!

    Hyunjin: "The performance schedule is encrypted..."
    Seungmin: "These equations look harder than our 'MANIAC' choreo!"
    
    Solve equations to find: (Stage × Time) + Room = Show Code`,
    equationType: "ax + b = cx + d",
    difficulty: 6
}{
    title: "The World Tour Launch",
    intro: `The worldwide tour announcement is ready!

    Bang Chan: "All Stray Kids members helped plan this..."
    All Members: "Let's show the world Min-ji's talent!"
    
    Solve equations to find: (Venue + Date) × Time = Tour Code`,
    equationType: "ax + b = c(dx + e)",
    difficulty: 7
}{
    requiredMastery: 0.8,
    equations: {
        Level1: {
            format: "ax + b = c",
            range: {a: [2-5], b: [-10,10], c: [result based on clue type]}
        },
        Level2: {
            format: "ax - b = c",
            range: {a: [3-6], b: [-15,15], c: [result based on clue type]}
        },
        Level3: {
            format: "-ax + b = c",
            range: {a: [4-7], b: [-20,20], c: [result based on clue type]}
        },
        Level4: {
            format: "ax + b = -c",
            range: {a: [5-8], b: [-25,25], c: [result based on clue type]}
        },
        Level5: {
            format: "-ax - b = c",
            range: {a: [6-9], b: [-30,30], c: [result based on clue type]}
        },
        Level6: {
            format: "ax + b = cx + d",
            range: {a: [2-5], b: [-10,10], c: [1-3], d: [-15,15]}
        },
        Level7: {
            format: "ax + b = c(dx + e)",
            range: {a: [2-4], b: [-10,10], c: [2-3], d: [2-4], e: [-5,5]}
        }
    }
}class MathMysteryGame {
    constructor() {
        this.currentLevel = 1;
        this.mastery = 0;
        this.attemptsThisLevel = 0;
        this.correctThisLevel = 0;
        
        this.level1 = {
            title: "The Missing Trainee",
            story: {
                intro: `BREAKING NEWS: Min-ji has vanished from JYP Entertainment!

                Felix: "I was teaching her the 'God's Menu' dance break when she suddenly disappeared!"
                Hyunjin: "Her phone and water bottle are still here..."
                Bang Chan: "Wait - look at these equations on her practice notes!"`,
                
                clues: [
                    {
                        type: "floor",
                        character: "Felix",
                        dialogue: "I remember we were practicing on a higher floor because the view helped with inspiration...",
                        hint: "The floor number is between 2-10. Solve this equation to find it!",
                        equation: this.generateEquation(1, "floor")
                    },
                    {
                        type: "room",
                        character: "Hyunjin",
                        dialogue: "Each practice room has a special number code...",
                        hint: "Room numbers range from 1-20. This equation reveals which one!",
                        equation: this.generateEquation(1, "room")
                    },
                    {
                        type: "time",
                        character: "Bang Chan",
                        dialogue: "The security system logs every door access...",
                        hint: "Convert the answer to the nearest hour (1-12)",
                        equation: this.generateEquation(1, "time")
                    }
                ],

                finalPuzzle: {
                    instruction: "Calculate: (Floor × Room) + Time = Location Code",
                    success: `
                        Min-ji's Note Found: "Meeting with JYP himself! Don't worry! 🎵"
                        
                        Felix: "Ahh, her secret monthly evaluation!"
                        Hyunjin: "No wonder she rushed out!"
                        Bang Chan: "She's going to ace it - her improvements are incredible!"
                    `,
                    failure: "That's not the right code. The Stray Kids members look worried. Try again!"
                }
            }
        };
    }

    generateEquation(level, clueType) {
        switch(level) {
            case 1:
                return {
                    generateSimpleEquation(clueType) {
                        let targetAnswer;
                        switch(clueType) {
                            case "floor":
                                targetAnswer = this.getRandomInt(2, 10);
                                break;
                            case "room":
                                targetAnswer = this.getRandomInt(1, 20);
                                break;
                            case "time":
                                targetAnswer = this.getRandomInt(1, 12);
                                break;
                        }
                        
                        const a = this.getRandomInt(2, 5);
                        const b = this.getRandomInt(-10, 10);
                        const c = (a * targetAnswer) + b;
                        
                        return {
                            equation: `${a}x + ${b} = ${c}`,
                            answer: targetAnswer,
                            format: "ax + b = c"
                        };
                    }
                };
        }
    }
}class MathMysteryGame {
    constructor() {
        this.levels = [
            {
                id: 1,
                title: "The Missing Trainee",
                equationType: "ax + b = c",
                storyProgress: {
                    intro: {
                        scene: "JYP Practice Room",
                        dialogue: [
                            { speaker: "Felix", text: "I was teaching Min-ji the 'God's Menu' dance when she vanished!" },
                            { speaker: "Hyunjin", text: "Her phone and water bottle are still here..." },
                            { speaker: "Bang Chan", text: "These equations on her practice notes might be clues!" }
                        ]
                    },
                    clues: [
                        {
                            type: "floor",
                            range: [2, 10],
                            character: "Felix",
                            dialogue: "We were practicing on a higher floor for the view...",
                            equation: this.generateEquation(1, "floor")
                        },
                        {
                            type: "room",
                            range: [1, 20],
                            character: "Hyunjin",
                            dialogue: "Each practice room has a numbered code...",
                            equation: this.generateEquation(1, "room")
                        },
                        {
                            type: "time",
                            range: [1, 12],
                            character: "Bang Chan",
                            dialogue: "The security logs might help...",
                            equation: this.generateEquation(1, "time")
                        }
                    ],
                    finalCode: "(Floor × Room) + Time"
                }
            },
            {
                id: 2,
                title: "The Secret Practice Room",
                equationType: "ax - b = c",
                storyProgress: {
                    intro: {
                        scene: "JYP Recording Studio",
                        dialogue: [
                            { speaker: "Changbin", text: "These practice recordings are incredible!" },
                            { speaker: "Han", text: "But they're locked in the secure server..." },
                            { speaker: "Seungmin", text: "More equations? Min-ji's getting clever!" }
                        ]
                    },
                    clues: [
                        {
                            type: "camera",
                            range: [1, 8],
                            character: "Changbin",
                            dialogue: "The security camera number is hidden in this equation...",
                            equation: this.generateEquation(2, "camera")
                        },
                        {
                            type: "timestamp",
                            range: [1, 24],
                            character: "Han",
                            dialogue: "We need the exact recording time...",
                            equation: this.generateEquation(2, "timestamp")
                        },
                        {
                            type: "server",
                            range: [1, 16],
                            character: "Seungmin",
                            dialogue: "The server unit number is the final piece...",
                            equation: this.generateEquation(2, "server")
                        }
                    ],
                    finalCode: "(Camera × Time) - Server"
                }
            }
            // ... Similar detailed structures for levels 3-7
        ];

        this.currentLevel = 1;
        this.mastery = {
            required: 0.8,
            current: 0,
            attempts: 0,
            correct: 0
        };
    }

    generateEquation(level, clueType) {
        const equationTypes = {
            1: (target) => {
                const a = this.getRandomInt(2, 5);
                const b = this.getRandomInt(-10, 10);
                const c = (a * target) + b;
                return `${a}x + ${b} = ${c}`;
            },
            2: (target) => {
                const a = this.getRandomInt(3, 6);
                const b = this.getRandomInt(-15, 15);
                const c = (a * target) - b;
                return `${a}x - ${b} = ${c}`;
            }
            // ... Additional equation types for levels 3-7
        };

        const ranges = {
            floor: [2, 10],
            room: [1, 20],
            time: [1, 12],
            camera: [1, 8],
            timestamp: [1, 24],
            server: [1, 16]
        };

        const target = this.getRandomInt(...ranges[clueType]);
        return {
            equation: equationTypes[level](target),
            answer: target
        };
    }
}{
    // ... continuing from previous levels
    {
        id: 3,
        title: "The Debut Preparation",
        equationType: "-ax + b = c",
        storyProgress: {
            intro: {
                scene: "JYP Recording Studio A",
                dialogue: [
                    { speaker: "Han", text: "Min-ji's guide vocals are locked in the studio system!" },
                    { speaker: "Seungmin", text: "Each recording has its own mathematical signature..." },
                    { speaker: "I.N", text: "Her debut song is going to be amazing!" }
                ]
            },
            clues: [
                {
                    type: "studio",
                    range: [1, 5],
                    character: "Han",
                    dialogue: "Which studio was she using?",
                    equation: this.generateEquation(3, "studio")
                },
                {
                    type: "track",
                    range: [1, 12],
                    character: "Seungmin",
                    dialogue: "The track number is crucial...",
                    equation: this.generateEquation(3, "track")
                },
                {
                    type: "day",
                    range: [1, 31],
                    character: "I.N",
                    dialogue: "The recording date completes the code!",
                    equation: this.generateEquation(3, "day")
                }
            ],
            finalCode: "(Studio + Track) × Day"
        }
    },
    {
        id: 4,
        title: "The First Performance",
        equationType: "ax + b = -c",
        storyProgress: {
            intro: {
                scene: "JYP Showcase Stage",
                dialogue: [
                    { speaker: "Lee Know", text: "The stage formation data is corrupted!" },
                    { speaker: "Felix", text: "Min-ji's showcase is in an hour!" },
                    { speaker: "Bang Chan", text: "Quick, solve these position equations!" }
                ]
            },
            clues: [
                {
                    type: "xPosition",
                    range: [1, 8],
                    character: "Lee Know",
                    dialogue: "Find her starting X position...",
                    equation: this.generateEquation(4, "xPosition")
                },
                {
                    type: "yPosition",
                    range: [1, 8],
                    character: "Felix",
                    dialogue: "Now for the Y coordinate...",
                    equation: this.generateEquation(4, "yPosition")
                },
                {
                    type: "formation",
                    range: [1, 12],
                    character: "Bang Chan",
                    dialogue: "Last piece: formation number!",
                    equation: this.generateEquation(4, "formation")
                }
            ],
            finalCode: "X + (Y × Formation)"
        }
    },
    {
        id: 5,
        title: "The Music Video Mystery",
        equationType: "-ax - b = c",
        storyProgress: {
            intro: {
                scene: "JYP Server Room",
                dialogue: [
                    { speaker: "Changbin", text: "Someone's trying to leak Min-ji's MV!" },
                    { speaker: "Hyunjin", text: "We need to secure the backup server..." },
                    { speaker: "Bang Chan", text: "These security codes are our only chance!" }
                ]
            },
            clues: [
                {
                    type: "server",
                    range: [1, 16],
                    character: "Changbin",
                    dialogue: "Find the correct server number...",
                    equation: this.generateEquation(5, "server")
                },
                {
                    type: "file",
                    range: [1, 20],
                    character: "Hyunjin",
                    dialogue: "Now the file index...",
                    equation: this.generateEquation(5, "file")
                },
                {
                    type: "key",
                    range: [1, 9],
                    character: "Bang Chan",
                    dialogue: "The encryption key is last!",
                    equation: this.generateEquation(5, "key")
                }
            ],
            finalCode: "Server + (File × Key)"
        }
    },
    {
        id: 6,
        title: "The Award Show Puzzle",
        equationType: "ax + b = cx + d",
        storyProgress: {
            intro: {
                scene: "MAMA Awards Venue",
                dialogue: [
                    { speaker: "Seungmin", text: "Min-ji's debut stage is scheduled next!" },
                    { speaker: "I.N", text: "But the performance system is locked!" },
                    { speaker: "Han", text: "These equations are harder than our 'MANIAC' choreo!" }
                ]
            },
            clues: [
                {
                    type: "stage",
                    range: [1, 5],
                    character: "Seungmin",
                    dialogue: "Which stage number...",
                    equation: this.generateEquation(6, "stage")
                },
                {
                    type: "time",
                    range: [1, 24],
                    character: "I.N",
                    dialogue: "Performance time slot...",
                    equation: this.generateEquation(6, "time")
                },
                {
                    type: "room",
                    range: [1, 50],
                    character: "Han",
                    dialogue: "Waiting room number...",
                    equation: this.generateEquation(6, "room")
                }
            ],
            finalCode: "(Stage × Time) + Room"
        }
    },
    {
        id: 7,
        title: "The World Tour Launch",
        equationType: "ax + b = c(dx + e)",
        storyProgress: {
            intro: {
                scene: "JYP World Tour Planning Room",
                dialogue: [
                    { speaker: "Bang Chan", text: "Min-ji's world tour is ready to announce!" },
                    { speaker: "All Members", text: "But the tour schedule is encrypted!" },
                    { speaker: "Felix", text: "Time for the ultimate equation challenge!" }
                ]
            },
            clues: [
                {
                    type: "venue",
                    range: [1, 100],
                    character: "Bang Chan",
                    dialogue: "Decode the venue number...",
                    equation: this.generateEquation(7, "venue")
                },
                {
                    type: "date",
                    range: [1, 31],
                    character: "All Members",
                    dialogue: "Find the start date...",
                    equation: this.generateEquation(7, "date")
                },
                {
                    type: "time",
                    range: [1, 24],
                    character: "Felix",
                    dialogue: "Show time is the final piece!",
                    equation: this.generateEquation(7, "time")
                }
            ],
            finalCode: "(Venue + Date) × Time"
        }
    }
}class EquationGenerator {
    generateEquation(level, clueType) {
        const targetAnswer = this.getTargetAnswer(clueType);
        
        switch(level) {
            case 3: // -ax + b = c
                return this.generateNegativeCoefficient(targetAnswer);
            case 4: // ax + b = -c
                return this.generateNegativeResult(targetAnswer);
            case 5: // -ax - b = c
                return this.generateDoubleNegative(targetAnswer);
            case 6: // ax + b = cx + d
                return this.generateVariablesBothSides(targetAnswer);
            case 7: // ax + b = c(dx + e)
                return this.generateDistributiveProperty(targetAnswer);
        }
    }

    // Level 3: -ax + b = c
    generateNegativeCoefficient(target) {
        const a = this.getRandomInt(2, 5);
        const b = this.getRandomInt(1, 15);
        const c = (-a * target) + b;
        
        return {
            equation: `-${a}x + ${b} = ${c}`,
            answer: target,
            steps: [
                `-${a}x = ${c} - ${b}`,
                `x = -${c - b}/-${a}`
            ]
        };
    }

    // Level 4: ax + b = -c
    generateNegativeResult(target) {
        const a = this.getRandomInt(2, 6);
        const b = this.getRandomInt(1, 20);
        const c = -(a * target + b);
        
        return {
            equation: `${a}x + ${b} = ${c}`,
            answer: target,
            steps: [
                `${a}x = ${c} - ${b}`,
                `x = (${c} - ${b})/${a}`
            ]
        };
    }

    // Level 5: -ax - b = c
    generateDoubleNegative(target) {
        const a = this.getRandomInt(2, 4);
        const b = this.getRandomInt(1, 10);
        const c = (-a * target) - b;
        
        return {
            equation: `-${a}x - ${b} = ${c}`,
            answer: target,
            steps: [
                `-${a}x = ${c} + ${b}`,
                `x = -(${c} + ${b})/${a}`
            ]
        };
    }

    // Level 6: ax + b = cx + d
    generateVariablesBothSides(target) {
        const a = this.getRandomInt(3, 7);
        const c = this.getRandomInt(1, a - 1); // Ensure c < a
        const b = this.getRandomInt(1, 15);
        const d = (a - c) * target + b;
        
        return {
            equation: `${a}x + ${b} = ${c}x + ${d}`,
            answer: target,
            steps: [
                `${a}x - ${c}x = ${d} - ${b}`,
                `${a-c}x = ${d} - ${b}`,
                `x = (${d} - ${b})/(${a-c})`
            ]
        };
    }

    // Level 7: ax + b = c(dx + e)
    generateDistributiveProperty(target) {
        const a = this.getRandomInt(2, 4);
        const b = this.getRandomInt(1, 10);
        const c = this.getRandomInt(2, 3);
        const d = this.getRandomInt(1, 3);
        const e = this.getRandomInt(1, 5);
        
        // Work backwards from target to ensure clean numbers
        const rightSide = c * (d * target + e);
        const leftSide = a * target + b;
        
        // Only use if the equation balances perfectly
        if (leftSide === rightSide) {
            return {
                equation: `${a}x + ${b} = ${c}(${d}x + ${e})`,
                answer: target,
                steps: [
                    `${a}x + ${b} = ${c*d}x + ${c*e}`,
                    `${a}x - ${c*d}x = ${c*e} - ${b}`,
                    `${a-c*d}x = ${c*e} - ${b}`,
                    `x = (${c*e} - ${b})/(${a-c*d})`
                ]
            };
        } else {
            // Recursively try again if numbers don't work out
            return this.generateDistributiveProperty(target);
        }
    }

    getTargetAnswer(clueType) {
        const ranges = {
            studio: [1, 5],
            track: [1, 12],
            day: [1, 31],
            xPosition: [1, 8],
            yPosition: [1, 8],
            formation: [1, 12],
            server: [1, 16],
            file: [1, 20],
            key: [1, 9],
            stage: [1, 5],
            time: [1, 24],
            room: [1, 50],
            venue: [1, 100],
            date: [1, 31]
        };

        return this.getRandomInt(...ranges[clueType]);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
<div id="game-container">
    <div id="level-info">
        <span id="level-display">Level 1</span>
        <span id="score-display">Score: 0</span>
    </div>

    <div id="story-context">
        <!-- Story context will be dynamically updated here -->
    </div>

    <div id="equation-container">
        <div id="equation-text"></div>
        <div class="input-hint">Enter your answer:</div>
        <input type="number" id="answer-input" placeholder="?" step="any">
        <div id="feedback" class="hidden"></div>
        <button id="submit-btn">Submit</button>
        <button id="hint-btn">Get Hint</button>
    </div>