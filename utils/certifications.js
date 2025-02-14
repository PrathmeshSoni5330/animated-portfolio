import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 1,
            title: 'Winter Consulting 2024',
            platform: 'IIT Guwahati',
            link: '',
            date: 'Issued Jan 2025 · No Expiration Date',
            logo: '/assets/CAG.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Goldman Sachs-Operations Job Simulation',
            platform: 'Forage',
            link: '',
            date: 'Issued Nov 2024 · No Expiration Date',
            logo: '/assets/goldman.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'Strategy Storm 2025',
            platform: 'IIT Guwahati',
            link: '',
            date: 'Issued Jan 2025 · No Expiration Date',
            logo: '/assets/strategystorm.png',
            aos: 'zoom-out-left'
        },
        // {
        //     size: 1,
        //     title: 'Certified Mobile and Web App Developer',
        //     platform: 'SMIT | Saylani Mass IT Training',
        //     link: '',
        //     date: 'Issued Feb 2019 · No Expiration DateIssued',
        //     logo: '/assets/smit.png',
        //     aos: 'zoom-out-right'
        // },
        // {
        //     size: 2,
        //     title: 'Hackathon on creating OLX App using PWA Development',
        //     platform: 'SMIT | Saylani Mass IT Training',
        //     link: '',
        //     date: 'Issued Jul 2018 · No Expiration Date',
        //     logo: '/assets/smit.png',
        //     aos: 'zoom-out-left'
        // },
    ],
    handleIconClick: openLink
}

export default certifications
