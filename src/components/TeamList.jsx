import React from 'react'
import './styles/Teams.css'
import {
    aaron, bhoomikaS, chinmayCholin,
    gagan, ksDeshakGowda, pruthvinK, ragini, raksha, sanjanaA,
    sharma, sheshaPrasadH, spoorthiA, tenzingWangmu, acchuth, avaneesh,
    bhavana, dhanush, jeevan, kanchana, neethu, nihar, praharsha, prajwal, shreyas, sujith
} from '../assets/team/image'
import TeamCard from './TeamCard'
import ParallaxBackground from './ParallaxBackground'

const finalYears = [
    {
        imgloc: prajwal,
        name: 'Prajwal L.R'
    },
    {
        imgloc: ksDeshakGowda,
        name: 'KS Deshak Gowda '
    },
    {
        imgloc: shreyas,
        name: 'Shreyas S'
    },
    {
        imgloc: neethu,
        name: 'Sri Neethu GS'
    },
    {
        imgloc: ragini,
        name: 'Ragini MB'
    },
    {
        imgloc: dhanush,
        name: 'Dhanush P'
    },
    {
        imgloc: acchuth,
        name: 'Acchuth Shekhar'
    },
    {
        imgloc: avaneesh,
        name: 'Avaneesh Honnappa'
    },
    {
        imgloc: praharsha,
        name: 'Praharsha HV'
    },
    {
        imgloc: sujith,
        name: 'Sujith'
    }
]

const thirdYears = [
    {
        imgloc: aaron,
        name: 'Aaron Rajiv'
    },
    {
        imgloc: bhavana,
        name: 'Bhavana BR'
    },
    {
        imgloc: bhoomikaS,
        name: 'Bhoomika S'
    },
    {
        imgloc: sharma,
        name: 'Bhuvan Sharma HV'
    },
    {
        imgloc: chinmayCholin,
        name: 'Chinmay Cholin'
    },
    {
        imgloc: gagan,
        name: 'Gagan Ravi Karjagi'
    },
    {
        imgloc: jeevan,
        name: 'Jeevan KM'
    },
    {
        imgloc: kanchana,
        name: 'Kanchana HN'
    },
    {
        imgloc: nihar,
        name: 'Nihar Subhogh Raj'
    },
    {
        imgloc: pruthvinK,
        name: 'Pruthvin K'
    },
    {
        imgloc: raksha,
        name: 'Raksha Shetty BP'
    },
    {
        imgloc: sanjanaA,
        name: 'Sanjana A'
    },
    {
        imgloc: sheshaPrasadH,
        name: 'Shesha Prasad H'
    },
    {
        imgloc: spoorthiA,
        name: 'Spoorthi A'
    },
    {
        imgloc: tenzingWangmu,
        name: 'Tenzing Wangmu Dinglow'
    },
]

const TeamList = ({ children }) => {
    return (
        <ParallaxBackground showTitleBlock={false}>
            <div className='team-design'>
                <h1>ENIGMA'26 CREW</h1>
                <div className='team-containers'>
                    <h2>Final Years: </h2>
                    <div className='team-card-contianer'>
                        {
                            finalYears.map((person) => {
                                return (
                                    <TeamCard img={person.imgloc} name={person.name} />
                                );
                            })
                        }

                    </div>
                </div>
                <div className='team-containers'>
                    <h2>Third Years: </h2>
                    <div className='team-card-contianer'>
                        {
                            thirdYears.map((person) => {
                                return (
                                    <TeamCard img={person.imgloc} name={person.name} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            {children}
        </ParallaxBackground>
    )
}

export default TeamList