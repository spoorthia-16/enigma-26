import './styles/Contact.css'

const refundData = [
        {
        "heading": "General Policy: ",
        "desc": [
            `All event registration fees and ticket fees are non-refundable.`,  
            `Exceptions apply solely to event registration fees under specific circumstances. `
        ] 
    },
    {
        "heading": "Event Cancellation:  ",
        "desc": [
            `If the entire technical fest is canceled due to unforeseen circumstances, a full refund will be issued to all registered participants.`, 
            `If an individual event is canceled, a partial refund may be issued to participants who registered for 
            that specific event. The refund amount will be determined based on the costs incurred by the 
            organizers for that event.   `
        ] 
    },
    {
        "heading": "Individual Issues:  ",
        "desc": [
            `No refunds will be issued for individual withdrawals or team member changes.`, 
            `In special cases, such as documented medical emergencies or extenuating circumstances beyond the participant's control, a partial refund may be considered at the discretion of the organising 
            committee. `,
            `Requests for refunds due to individual circumstances must be submitted in writing to 
            mce.techclub@gmail.com along with supporting documentation.  `
        ] 
    },
    {
        "heading": "Processing time:",
        "desc": [
            `Refunds will be processed within 10 business days of approval. `,
            `Refunds will be issued through the same payment method used for registration.  `
        ] 
    },
    {
        "heading": "Additional Notes:   ",
        "desc": [
            `This policy is subject to change without prior notice. Please refer to the official website for the latest updates. `, 
            `Participants must carefully review the event descriptions and rules before registering.`, 
        ] 
    },

]

const Refund = () => {
    return (
        <div className='contact-details'>
            <h1>Refund Policy</h1>
            <div className='terms-container'>
                {refundData.map((refund, i)=>{
                    return (
                        <div key={i}>
                            <h2>{refund.heading}</h2>
                            {refund.desc.map((desc, i)=>{
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

export default Refund