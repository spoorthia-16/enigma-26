import './styles/Contact.css'

const termsData = [
        {
        "heading": "Eligibility: ",
        "desc": [
            `Open to all students currently enrolled in a recognized engineering college.`, 
            `Individual and team registrations are allowed, depending on the event format.`, 
            `Age restrictions may apply for certain events. Please refer to specific event descriptions. `
        ] 
    },
    {
        "heading": "Registration: ",
        "desc": [
            `Registration is mandatory for participation in all events.`, 
            `Registration fees may apply depending on the event. All fees are non-refundable.`, 
            `Online and offline registration options may be available. Please refer to the official website for details. `,
            `Teams must register with a unique team name and list all team members.  `
        ] 
    },
    {
        "heading": "Participation: ",
        "desc": [
            `Participants must adhere to the rules and regulations specific to each event.`, 
            `All entries must be original work and free from plagiarism.`, 
            `Participants are responsible for bringing their own equipment (laptops, tools, etc.) unless otherwise specified.`, 
            `Judges' decisions are final and cannot be contested.  `
        ] 
    },
    {
        "heading": "Intellectual Property:  ",
        "desc": [
            `All intellectual property rights associated with the submitted entries remain with the participants. `,
            `However, participants grant the organisers a non-exclusive, royalty-free right to use their entry for promotional purposes related to the festival.  `
        ] 
    },
    {
        "heading": "Conduct:  ",
        "desc": [
            `Participants must conduct themselves professionally and respectfully throughout the festival.`, 
            `Any form of harassment, discrimination, or disruptive behaviour will not be tolerated and may lead to disqualification.`, 
            `The organizers and college management reserve the right to remove any participant who violates these terms and conditions. `
        ] 
    },
    {
        "heading": "Disclaimer:  ",
        "desc": [
            `The organisers take all reasonable precautions to ensure the safety and well-being of participants. 
            However, they are not responsible for any injuries, accidents, or losses incurred during the festival. `,
            `Participants participate at their own risk and agree to hold the organisers harmless from any claims or liabilities arising from their participation.  `
        ] 
    },
    {
        "heading": "Modifications:  ",
        "desc": [
            `The organizers reserve the right to modify these terms and conditions at any time without prior notice.`, 
            `Participants are responsible for checking the official website for updates.  `
        ] 
    },
    {
        "heading": "Data Privacy:  ",
        "desc": [
            `The organizers collect personal information during registration for administrative purposes only. `,
            `This information will not be shared with any third party without the participant's consent. `,
            `Participants have the right to access and modify their personal information upon request.  `
        ] 
    },
    {
        "heading": "Contact: ",
        "desc": [
            ` For any questions regarding these terms and conditions or the festival in general, please contact mce.techclub@gmail.com or visit the official website at www.enigma24.in `,
        ] 
    },

]

const TermsCond = () => {
    return (
        <div className='contact-details'>
            <h1>Terms and Conditions</h1>
            <div className='terms-container'>
                {termsData.map((term, i)=>{
                    return (
                        <div key={i}>
                            <h2>{term.heading}</h2>
                            {term.desc.map((desc, i)=>{
                                return (
                                    <p key={i}>{i+1+". "+desc}</p>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TermsCond