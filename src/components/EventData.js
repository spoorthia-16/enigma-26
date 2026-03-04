import Aeronautica from "/events/aeronautica.jpg";
import RoboK from "/events/robokombat.png";
import RoboS from "/events/robosoccer.jpg";
import Mystique from "/events/mystique.jpg";
import mega from "/events/megastruct.jpg";
import npp from "/events/nppt.jpg";
import Ingenium from "/events/ingenium.jpg";
import Inquizitive from "/events/inquiz.jpg";
import Resonance from "/events/resonance.jpg";
import PlayBytes from "/events/playbytes.jpg";
import Drift from "/events/rc_bot.jpg";

//if theres no register form dont render register button

const nationalData = [
  {
    id: 1,
    imgloc: npp,
    name: "National Level Paper Presentation",
    date: "28/03/2026",
    loc: "Alumni Hall",
    heads: ["Neethu", "Sanjana A"],
    registerForm:
      "https://forms.gle/LPFb3ncsfLSH2fu7A",
    contact: ["7483735220"],
    desciption: `Elevate your research to a National platform. Ignite the spark of Innovation and set ideas Ablaze!`,
    details: [
      {
        heading: "Rules",
        desc: [
          `1. Participation is exclusively open to B.E and M.Tech students holding valid college ID cards.`,
          `2. Papers may have a maximum of 4 authors, with presentation limited to a maximum of 4 individuals per paper.`,
          `3. Participants must ensure they carry 3 photocopies of their paper, in addition to a soft copy and a PowerPoint presentation.`,
          `4. Adherence to format specified by The Malnad Technical Club is compulsory for both paper and abstract.`,
          `5. Each team is permitted to submit only one paper; any additional submissions will result in disqualification.`,
          `6. Collaboration among participants from different institutions is permitted and encouraged.`,
          `7. Participants are expected to adhere to the highest standards of academic integrity and professional conduct throughout the event.`,
        ],
      },
    ],
  },
];

const designBuild = [
  {
    id: 2,
    imgloc: RoboK,
    name: "RoboKombat",
    date: "28/03/2026",
    loc: "Auditorium",
    heads: ["Deshak Gowda", "Bhuvan Sharma H V"],
    contact: ["9632311957"],
    registerForm: "https://forms.gle/HixzKvzCgWBbtAhq9",
    desciption:
      "The fierce Arena is perfectly poised to fulfil your bot’s quest for Supremacy. Gear up to witness pulse-pounding attacks in the RoboKombat Arena.",
    details: [
      {
        heading: "Rules",
        desc: [
          `1. This is an Open Event.`,
          `2. Contestants will have to register online. On-spot registration can also be done.`,
          `3. The bot has to be submitted to organizers 90 minutes before the event.`,
          `4. The machine will be checked for safety during registrations. In case of unsafe bots, the team will be allowed to modify the bot within 90 minutes. If the team fails,it will be disqualified.`,
          `5. Only three persons(team members)are allowed to take part in the competition( within the demarcated area).`,
          `6. The wire coming out of the bot should be contained in a pipe (or other alternatives). Any kind of exposed wiring should be held together by cello tape.`,
          `7. Any kind of damage to the arena will not be entertained, a warning will be given and if the damage is done after the first warning, the robot will be disqualified.`,
          `8. All the required accessories have to be bought by the participants. The robot should not vary for each round.`,
          `9. No technical assistance will be provided by the coordinators during the time of the event.`,
          `10. No practice runs will be provided.`,
          `11. Provision must be made by the participants to show internal circuit when demanded by organisers for inspection.`,
          `12. Jumping and hoping is not allowed.`,
          `13. Only wedge bots are allowed.`,
        ],
      },
      {
        heading: "Robot Specifications (Wired)",
        desc: [
          `1. The maximum dimensions of the bot should not exceed 600mmX600mmX600mm (+5% tolerance) (excluding remote controls and control wire).`,
          `2. Weight of the robot should not exceed 50kg (+ or - 10% tolerance is allowed) (excluding remote controls and control wire ).`,
        ],
      },
      {
        heading: "Robot Specifications (Wireless)",
        desc: [
          `1. The maximum dimensions of the bot should not exceed 600mmX600mmX600mm (+5% tolerance) (excluding remote controls and control wire).`,
          `2. Weight of the robot should not exceed 50kg (+ or - 10% tolerance is allowed) (including Battery, excluding Remote control and Control wires).`,
        ],
      },
      {
        heading: "Robot Control Requirements",
        desc: [
          `1. The robot can be wired or wireless. For wired robots,all the controlling wires should be bound into a single strip and properly insulated for at least 3cm in length from the robot base. It shouldn't get tangled with the opponent's wires. For wireless robots, use a four-frequency remote control circuit or two dual control circuits to avoid the interface.`,
          `2. Remote controls that are readily available in the market may also be used with suitable modifications if needed.`,
          `3. The teams should pair up the wireless remote with the machine before putting it into the arena.`,
          `• In the case of wired bots, the wire should be at least 10m long and the wires should remain slack at any instant during the fight. All the wires coming out of the machine should be stacked as a single unit.`,
          `4. The wire coming out of the bot should be contained in a pipe (or other alternatives). Any kind of exposed wiring should be held together by cello tape.`,
          `5. Only three persons (team members) are allowed to take part in the competition (within the demarcated area).`,
        ],
      },
      {
        heading: "Battery And Power",
        desc: [
          `1. The bot should be self-powered with battery not exceeding 48v.`,
          `2. Battery should be properly protected from the external damages.`,
          `3. Immobilized electrolyte types (such as gel cells, lithium, NiCad or dry cells) are not allowed.`,
          `4. 230-volt AC source will be provided. Teams have to bring their own battery eliminators.`,
          `5. Also, multiple rounds may be conducted back-to-back, so the batteries are advised to be kept fully charged with backup batteries.`,
        ],
      },
      {
        heading: "Arena Specifications",
        desc: [
          `1. Combat arena specifications: 10x10 ft roughed steel battle surface, surrounding 8 feet height mesh protection.`,
          `2. Participants have to get helmets for protection.`,
        ],
      },
      {
        heading: "Team Regulations",
        desc: [
          `1. Teams of 2-5 Members.`,

          `2. Multiple number of teams from same college are allowed`,

          `3. The participants must carry valid student ID or Company ID cards of their college/company which they will be required to produce at the time of registration.`,

          `4. An individual cannot be a member of more than one team.`,

          `5. A robot cannot be shared by two or more teams.`,

          `6. The robot should follow the specifications provided. Any deviation from the mentioned specifications will lead to direct disqualifications.`,

          `7. Changes to the structure between matches are not allowed.`,
          `8. Bots with wired controls should have a dedicated person to hold the wires and prevent it from entangling.`,

          `9. Wireless radio controllers shouldn't interfere with opponent's transmitter.`,

          `10. The decisions made by the Judge panel will be final .`,
        ],
      },
    ],
  },
  {
    id: 3,
    imgloc: RoboS,
    name: "RoboSoccer",
    date: "28/03/2026",
    loc: "Auditorium",
    heads: ["Prajwal L R", "Gagan Ravi Karjagi"],
    contact: ["9380822360"],
    registerForm:"https://forms.gle/HixzKvzCgWBbtAhq9",
    desciption: `Your Robo's next challenge - Code, Kick, and Compete. Transforming Robots into Ronaldo's Digital Doppelgänger.`,
    details: [
      {
        heading: "GamePlay",
        desc: [
          `1. This is a 1-on-1 type game.`,

          `2. A tennis ball will be used.`,

          `3. Robots will be placed in different halves of the arena with ball in centre of the arena.`,

          `4. Each team will try to score a goal by pushing the ball.`,

          `5. Team with the greater number of goals wins the match.`,

          `6. If the ball goes out of the arena, it will be placed in the center and match will be resumed.`,

          `7. In case of a tie, a penalty time of 2 more minutes will be given. `,
          `If the tie is not yet broken, 3 penalty kicks will be provided. `,
          `8. The robot has to hits/strike the ball (placed on the penalty line of the arena) such that the bot should not cross the penalty line while striking the ball.`,
        ],
      },
      {
        heading: "Robot Specifications",
        desc: [
          `1. The following size limitations apply for each robot, including whatever kick mechanisms the bot have: Width - 300mm max, Length - 300mm max, Height - 300mm max`,

          `2. An error of (± 5%) is permitted.`,

          `3. Weight: 5 kg (Tolerance of ±5 %)`,

          `4. The robot cannot have a potential more than 12V between any two points.`,

          `5. The external device, which is used to control the machine, is not included in the size constraint.`,

          `6. The machine can be wired/wireless.`,

          `7. The machine must not be made from Lego parts, or any ready-made assembly kits, however participants are allowed to use their own creativity for the kick mechanism.`,

          `8. The robot can be powered by a source such as an battery fixed on the robot or by a stationary power source connected to the robot by a cord.`,

          ` 9. Participants should keep spare batteries. If they require any power supply or batteries, it should be informed 3 days prior (prior to the date of Enigma). Failure to communicate this  information to the organizers in advance, and any subsequent creation of new scenarios related to this matter, will lead to invitation of penal action as decided by the event organisers. `,

          `10. The length of the wire (for wired bots) should be long enough to cover the whole arena and wire should remain slack during the complete game.`,
        ],
      },
      {
        heading: "Arena Dimensions",
        desc: [
          `1. The arena is made up of plywood of dimensions 8 feet in length and 6 feet in width.`,
          `2. The arena has a 40 cm wide goal post on either side.`,

          `3. The arena is bounded from all sides`,
        ],
      },
      {
        heading: "Rules And Regulations",
        desc: [
          `1. A team can have a maximum of 4 members and minimum 2 members.`,

          ` 2. Only 2 members of each team may be present at a time in the arena. All other team members must remain outside the game zone.`,

          `3. Once the weight of bot is finalized no modifications in the weight will be allowed.`,

          `4. Weight of the bot will be checked before the start of each match.`,

          `5. Each team will be given a time span of 2 minutes at the beginning of each half to make any changes or modifications to the bot (modification in weight is not allowed)`,

          `6. Every match will consist of 2 rounds of 2 minutes each and each subsequent round will have a time gap of 1 minute.`,
        ],
      },
      {
        heading: "Judging Criteria",
        desc: [
          `1. For each goal scored by a team, 4 points will be awarded.`,
          `2. If the bot damages the arena or the opponent's bot (major damage), 2 points will be deducted.`,

          `3. A warning will be given for not following the rules, after which 2 points will be deducted for every warning`,

          `4. The winner shall be declared on the basis of the points scored.`,

          `5. The opposing team must be treated with sportsmanship. Non-compliance with this rule may result in action decided by the organizers.`,

          `6. In case of any argument, any chaos or any confusion during the event, the organizers' decision will be final and no further compromise will be entertained.`,
        ],
      },
    ],
  },
  {
    id: 1,
    imgloc: Aeronautica,
    name: "Aeronautica",
    date: "28/03/2026",
    loc: "Football Ground",
    heads: ["Dhanush P", "Chinmay Cholin"],
    contact: ["7020464064"],
    registerForm: "https://forms.gle/HixzKvzCgWBbtAhq9",
    desciption: `Experience Amusement in the sky! Drones soaring high and wide where Sky's the only limit.`,
    details: [
      {
        heading: "General Rules",
        desc: [
          `1. This is an Open Event. `,
          `2. Each team or individual must use a unique drone and no teams are allowed to use the same drone.`,
          `3. Only custom-built drones are allowed and commercial kits are not permitted.`,
          `4. Charging accessories and extra battery packs are mandatory as there can be multiple rounds conducted and sockets are provided upon request.`,
          `5. Participants must arrive at least 30 minutes before the event begins and ensure their drones are ready for the race 15 minutes prior to the start.`,
          `6. No practice sessions will be provided; the race is purely based on timing. `,
          `7. Participants can move freely inside the arena but must address any doubts or discussions with organizers only. `,
          `8. Organizers are not responsible for any of the belongings or damages caused by obstacles. `,
          `9. Fastest to complete the race is clearly declared as the winner. `,
          `10. Crossing obstacles with precise movements is required; +10 seconds for contact and +30 seconds for skipping obstacles.`,
          `11. A technical timeout of 150 seconds will be provided (once) if the drone crashes. (Participants are required to restart from the beginning and the crashed race won't be considered).`,
          `12. Mandatory take-off and landing on the launchpad; timing starts when the drone is armed and stops on landing.`,
          `13. Participants can use any mode of their choice such as acro, stabilize , altitude, loiter, etc,  the mode of flight will be line of sight and not FPV. `,
          `14. Technical specifications:`,
          `Prop size`+`\xa0\xa0\xa0\xa0\xa0\xa0\xa0`+`: 3" to 5"`, 
          `Battery size`+`\xa0\xa0\xa0`+`: 4s to 6s`, 
          `Frame type `+`\xa0\xa0\xa0`+`: True x, Dead cat, Cinewhoop`, 
          `Prop material 	: Anything except carbon fibre
          `,
          `15. Not following any of the above mentioned rules might lead to disqualification.`
        ],
      },
    ],
  },
  {
    id: 5,
    imgloc: Mystique,
    name: "Mystique Locomotor",
    date: "21/04",
    loc: "Auditorium",
    heads: ["Acchuth", "Shesha Prasad H"],
    contact: ["6366100711"],
    registerForm: "https://forms.gle/HixzKvzCgWBbtAhq9",
    desciption: `Navigate through Enigmatic hurdles where each challenge unfolds a tale of Resilience and Prowess. Embark on a journey to unveil Victory.`,
    details: [
      {
        heading: "Machine Specification",
        desc: [
          `1. Machine should fit in a box of 300 mm x 300 mmx 300 mm (l*b*h) at any moment. The external device which is used to control the machine is not included in the size constraint.`,

          `2. The machine should be controlled by a wired/wireless remote-control mechanism throughout the race.`,

          `3. Weight of the bot should be under 3 kg with +5% tolerance inc. battery if powered on board.`,

          ` 4. The machine must not be made from Lego parts or any ready- made assembly kits other than the parts mentioned below.`,

          ` 5. The machine may consist of: gears, differential gear, springs, shock absorbers, servo motors, batteries, wheels, wheel hub, Belt drives, Chain drives are allowed.`,
          `6.  AC power supply of 240 volts will be provided. The machine must use only mechanical power generated by DC motors. Use of any other sources such as IC Engines, chemicals, 
                    compressed gas, rockets etc. is not allowed.`,
          "7. The machine will be inspected and if found to be dangerous, the team will be disqualified.  This decision rests solely with the judges and the organizers.",
          `8. Use of pneumatic and hydraulic tools are not allowed.`,
        ],
      },
      {
        heading: "Track Specification",
        desc: [
          `1. The track will be an all-terrain track with sharp turns and jumps. The machine should be able to cross bumps and rough patches on the track.`,

          `2. Although organizers make efforts to maintain the track's quality, it is inevitable that the track will undergo wear and tear from the machines running on it. As a result, the machines must be able to perform well on the weakened track.`,

          `3. Track may consist of following obstacles: Any type of rough terrains like Sand path, Sack Bridge, Slippery surface, Gravel, Small bumps, Ramps, Hole traps, Bridges, Valleys, etc.`,
        ],
      },
      {
        heading: "Rules",
        desc: [
          `1. All the team members must be full-time students at an accredited University/college.`,

          `2. Only students from the same college can form a team.`,

          `3.  Individual cannot be a member of more than one team and Robots cannot be shared by two or more teams.`,

          `4. The machines must undergo bot check by the organizers 90 minutes before the event.`,

          `5.  Only one person can control the machine and one person can stay near the arena for monitoring the machine (Includes electrical).`,

          `6. The track will have check points at regular intervals. If a bot tumbles, or halts, or goes 
                    off the track at any point, one of the organizers will reset the bot to the previous checkpoint. The time shall still be running in the meantime.`,

          `7. If the bot is unable to pass through any obstacle, the bot will be permitted to skip up to 2 obstacles (with the operator consent) with a penalty of 90 seconds and 180 seconds respectively, to the time taken by the bot to complete the whole track.`,

          `8. The obstacles' skipping rule is valid only after spending 30 seconds on that particular obstacle. `,

          `9.  Each participant is limited to the completion of only a single lap during the event.`,

          `10.  The robot should complete the lap in 12 minutes. If not, the last checkpoint reached will be considered for evaluation.`,

          `11. Participants are allowed to take a 2-minute technical time only once in a lap for any repairs. After that the track timer will resume.`,

          `12. The machine which reaches the destination in the least time will be declared as the winner.`,
          `13. Team members are not permitted to touch their machines during the race. In case of any minor damage to the bot, the team members will be permitted to repair their bot.`,
          `14.  Organizers will not provide any kind of accessories during or before the event.`,
          `15. Only the participants of the team whose match is on, are allowed to stay near the arena 
                    during the event and if there are any clarifications, only the participants are expected to 
                    communicate with the judges/organizers, in case any person other than participants 
                    interferes, the team will be disqualified at the spot without any further discussions.`,
          `16.  The organizers reserve the right to change any or all of the above rules as they deem fit.`,
          `17. Violation of any of the above rules will lead to disqualification.`,
          `18. The judges' decision shall be final binding on all.`,
        ],
      },
      {
        heading: "Score Calculation",
        desc: [
          `1. It will be as follows.`,

          `2. SCORE = Time taken to reach the finish line + penalty. Organizers will not provide any kind of accessories during or before the event.`,

          `3. Only the participants of the team whose match is on are allowed to stay near the arena during the event and if there are any clarifications, only the participants are expected to communicate with the judges/organizers, in case any person other than participants interferes, the team will be disqualified at the spot without any further discussions. The organizers reserve the right to change any or all of the above rules as they deem fit.`,

          `4. Violation of any of the above rules will lead to disqualification. The judges decision shall be final binding on all.`,
        ],
      },
    ],
  },
  {
    id: 7,
    imgloc: mega,
    name: "Megastructure",
    date: "20/04",
    loc: "SA101",
    heads: ["Sujith", "Bhoomika S"],
    contact: ["8317491168"],
    desciption:
      "Your chance to build the extraordinary from the ordinary. Crafting shapes and things into splendid creations.",
    details: [
      {
        heading: "Rules",
        desc: [
          `1. Teams can have a maximum of 3 participants. `,

          `2. Only materials provided on-site can be used. `,

          ` 3. The provided materials are limited. `,

          `4. The competition topic will be disclosed at the start and teams will have 3 hours for construction. `,

          `5. Decisions made by the judges are final. `,

          `6. Organizers retain the right to modify rules during the event. `,

          `7. Only wooden popsicle sticks and white glue are permissible for construction.`,
          `8. Teams are allowed a maximum of 120 popsicle sticks. `,
          `9. Decorating and painting are allowed, but the judge will evaluate if they provide an unfair advantage. `,
          `Be creative and have fun!`,
        ],
      },
    ],
  },
  {
    id: 8,
    imgloc: Drift,
    name: "Drift Blitz",
    date: "21/04",
    loc: "Football Ground",
    heads: ["Shreyas", "Nihar Subhogh Raj"],
    contact: ["9591857779"],
    registerForm: "https://forms.gle/HixzKvzCgWBbtAhq9",
    desciption:
      "Tech enthusiasts, get ready! The RC Race is hitting town. Time to test your mini marvels. Whether you're a pro or a newcomer aiming to make a mark, this event is crafted just for you.",
    details: [
      {
        heading: "General Rules",
        desc: [
          `1. This is an Open Event.`,
          `2.	A team should have minimum of 2 or maximum of 3 participants.`,
          `3.	No two teams can use the same car in the event.`,
          `4.	All the participants must be present 1 hour prior to the event schedule.`,
          `5.	Everyone must have their cars ready to race 15 minutes prior.`,
          `6.	Any additional facilities needed shall be informed to the organizers.`,
          `7.	Charging sockets can be provided for charging batteries and other accessories on demand.`,
          `8.	The race will be purely based on timings and the fastest to complete the track will be considered as winner.`,
          `9.	Only race marshal can enter the track, if the car topples over.`,
          `10.	The organizer's decisions are final and not following any of the above-mentioned rules can lead to disqualification.`,
          `11. The track will be of a cross country race style.`,
          `12. The track is a coarse ground with small jumps, puddles, gravel and corners.`,
        ],
      },
      {
        heading: "Race Rules",
        desc: [
          `1.	In the initial round, the number of participants will determine the number of tracks available, and the maximum number of laps completed in prescribed time will advance to the second round. `,
          `2.	In the second round, the organizer will specify the number of laps. Participants who cover the maximum number of laps in the least amount of time will be considered as winners.`,
        ],
      },
      {
        heading: "Technical Specifications",
        desc: [
          `1.	All commercially available hobby grade and built cars are allowed in the event.`,
          `2.	The rule regarding the type of system, whether 2WD or 4WD, is subject to change based on the number of participants.`,
          `3.	Both brushed and brushless systems are allowed to participate.`,
          `4.	Cars, buggies are allowed to participate.`,
          `5.	3s and 4s batteries are allowed.`,
          `6. All models less than 1\\10 scale are allowed.`,
        ],
      },
    ],
  },
];

const paperData = [
  {
    id: 1,
    imgloc: Ingenium,
    name: "Ingenium",
    date: "18/04",
    loc: "SA101",
    heads: ["Shreyas", "Raksha Shetty B P"],
    contact: ["7022368800"],
    desciption:
      "Unleash your inner Einstein and explore the infinite possibilities of Wisdom.",
    details: [
      {
        heading: "Rules",
        desc: [
          `1. Participation is open to B.E and PU students with valid ID cards, forming teams with a minimum of 2 and a maximum of 4 participants.`,

          `2. The preliminary round evaluates basic Science (PCB) concepts, with shortlisted teams advancing to the next round, details of which will be disclosed during the event.`,

          `3. All team members must be present for the subsequent rounds, where the use of mobiles or electronic gadgets are strictly prohibited.`,

          `4. Once registered, participant substitutions are not permitted.`,

          `5. Any evidence of malpractice or rule violations will result in immediate disqualification.`,

          `6. The organizing committee retains the authority to make necessary modifications.`,

          `7. The decisions of the judges are final.`,
        ],
      },
    ],
  },
  {
    id: 2,
    imgloc: Inquizitive,
    name: "Inquizitive",
    date: "19/04",
    loc: "SA101",
    heads: ["Praharsha", "Spoorthi A"],
    contact: ["7624840897"],
    desciption:
      "Showcase your technical acumen where Tech Wits clash to conquer Inquisition.",
    details: [
      {
        heading: "General Round (Round 1)",
        desc: [
          `1. The participants who have cleared the preliminary round are eligible to attend the subsequent rounds.`,
          `2. This round consists of 5 questions with 4 options.`,

          `3. Participants should choose one among the 4 options.`,

          `4. For each correct answer, the team gets +5 points and 0 for incorrect answers.`,

          `5. No negative marking and no passing of the question.`,
        ],
      },
      {
        heading: "Rapid Fire Round (Round 2)",
        desc: [
          `1. Each team will have a duration of 1 minute to answer 5 rapid-fire questions.`,

          `2. +5 points for correct answer and 0 for incorrect.`,
        ],
      },
      {
        heading: "Buzzer Round (Round 3)",
        desc: [
          `1. This round consists of 6 questions.`,

          ` 2. Each team is given a buzzer and whoever presses it first will be given a chance to answer first and gets +5 points in case of a correct answer`,

          `3. If the first team fails to answer, then the question is passed to the 2nd buzzed team which gets +3 points in case of correct answer`,
        ],
      },
      {
        heading: "Audio-Visual-Video Round (Round 4)",
        desc: [
          `1. Each team will receive a prompt that may include multimedia elements, such as an image, video, or audio file.`,

          `2. For each correct answer, the team gets +5 points and 0 for incorrect answers.`,

          `3. No negative marking and no passing of the question`,
        ],
      },
    ],
  },
  {
    id: 3,
    imgloc: PlayBytes,
    name: "Play Bytes",
    date: "18/04",
    loc: "SA103",
    heads: ["Dhanush P", "Aaron Rajiv"],
    contact: ["9480977126"],
    desciption: `A battle that calls for Precision, Speed, and Intelligence! Unveil your skills and code your Triumph!`,
    details: [
      {
        heading: "Rules",
        desc: [
          `1. Showcase your coding proficiency and problem-solving 
                    acumen. Immerse  in the dynamic realm of technology through 
                    challenging activities and tasks which is open to students of all 
                    backgrounds.`,

          `2.  Participants must adhere to the rules and guidelines set 
                    forth for each specific challenge. `,

          `3. To take part in the event, participants are required to 
                    register in advance.`,

          `4. Registration details, including deadlines and procedures, will 
                    be communicated through official channels (website, social 
                    media, etc.). `,

          `5. Specific registration requirements for certain challenges will 
                    be clearly stated. `,

          ` 6. Participants must follow the instructions provided by the 
                    event organizers and comply with their decisions. `,

          `7. The event consists of 2 rounds. `,

          `8. Round 1 consists of 30 multiple-choice questions (MCQs) 
                    and coding challenges. `,

          ` 9. The questions will encompass subjects pertaining to 
                    computer science and C programming. `,

          `10. Participants will have a total of 60 minutes to complete the round.`,

          `11. Mobile phones or any electronic devices are strictly prohibited during the event.`,

          `12. On-the-spot elimination will be enforced for any instances 
                    of malpractice or violation of the above rules. `,

          `13. Scores are calculated based on the total number of correct 
                    answers and coding challenge performance. `,

          `14.The Organizing committee reserves the right to make 
                    modifications as deemed necessary and the decisions 
                    rendered by the judges stay final. `,

          `15.  Participants shortlisted with the highest scores in the first 
                    round will advance to the final round and details regarding 
                    the final round will be disclosed during the event. 
                    `,
        ],
      },
    ],
  },
];
const onlineData = [
];
const funData = [
  {
    id: 1,
    imgloc: Resonance,
    name: "Resonance",
    date: "19/04",
    loc: "SA101",
    heads: ["Deshak Gowda", "Sanjana A"],
    contact: ["7483735220"],
    desciption:
      "Setting up the stage in which laughter resonates louder with true friendships. A BFF carnival!",
    details: [
      {
        heading: "Rules",
        desc: [
          `1.	The event is all about calculating the level of understanding between two friends.`,
          `2.	Students pursuing PU, BE/B.Tech with valid college ID cards are allowed to participate in the event.`,
          `3.	The event consists of 2 rounds.`,
          `4.	Number of participants in each team must be 2 .`,
          `5.	First round will be a written test where two friends will be seated in different classrooms and will be asked the same questions about each other.`,
          `6.	Shortlisted teams with highest scores in the first round will enter the final round for which details will be revealed during the event.`,
          `  7.	Participants are not allowed to use their mobiles or any other electronic gadgets during the event.`,
          `8.	Once the team gets registered, replacement of any participant in the team is not allowed.`,
          `9.	Any evidence of malpractice or violation of above rules will lead to on spot elimination.`,
          `10.	Organising committee has all the rights to do any modifications.
                    `,
        ],
      },
    ],
  },
];

export { nationalData, designBuild, paperData, onlineData, funData };
