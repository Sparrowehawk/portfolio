import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'
import { CIcon } from '@/components/icons/tags/c'
import { AutodeskIcon } from '@/components/icons/tags/autodesk'
import { BluetoothIcon } from '@/components/icons/tags/bluetooth'
import { EspressifIcon } from '@/components/icons/tags/espressif'
import { JupyterIcon } from '@/components/icons/tags/jupyter'
import { KicadIcon } from '@/components/icons/tags/kicad'
import { PythonIcon } from '@/components/icons/tags/python'
import { NumpyIcon } from '@/components/icons/tags/numPy'
import { SpiIcon } from '@/components/icons/tags/spi'
import { i2cIcon } from '@/components/icons/tags/i2c'
import { TexasInstrumentsIcon } from '@/components/icons/tags/TI'
import { TensorFlowIcon } from '@/components/icons/tags/tensorflow'


export const AVATAR = {
  name: 'Hamid Jamal',
  initials: 'HJ'
}

export const ABOUT = {
  title: `Masters student studying Computer and Electronic Systems, 
  on track for pass with Distinction. Based in Cardiff, UK 🇬🇧`,
  description: `Passionate about learning and creating innovative tech
  products to tackle real world problems. Currently interested in low-level
  embedded systems; additionally, exploring and experimenting 
  with Machine Learning.`  
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/sparrowehawk',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hamid-jamal-page/',
    icon: LinkedInIcon
  },
  {
    title: 'Resume',
    url: '/assets/cv.pdf',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'mailto:hamidjamal@hotmail.co.uk',
    icon: MailIcon
  },
]

export const CAREER = [
  {
    company: 'Computer & Electronic Systems (MEng)',
    link: 'https://www.strath.ac.uk/courses/undergraduate/computerelectronicsystemsmeng/',
    badges: ['Education'],
    jobs: [
      {
        title: 'University of Strathclyde',
        start: 'Sept, 2022',
        end: 'July, 2026',
        description: [
          '4th year Modules: Advanced Microcontrollers, Computer Security, Robotics, Digital Signal Processing',
          '3rd year Modules: Building Software Systems, Further VHDL and FPGA Design, Analogue and Digital System Design, Functional Programming, Computer Systems and Concurrency, Signals and Communication Systems',
          'Dissertation topic: Design and assembling a portable mask aligner for photolithographic processes',
          'On track to pass with distinction'
        ]
      },
    ]
  },
  {
    company: 'Strathclyde University Powerlifting Club',
    link: 'https://www.instagram.com/strathpowerlifting/?hl=en',
    badges: ['Extra-cirruculum'],
    jobs: [
      {
        title: 'Treasurer',
        start: 'July 2024',
        end: 'July 2025',
        description: [
          'Responsible for ensuring that the club has enough funds for the current year',
          'Coordinate with other members to source transport for competitions',
          'Organised with other Universities for multiple inter-club competitions',
          'Analyzed data to enhance AI training methodologies.',
          'General budget management of the club'
        ]
      }
    ]
  },
  {
    company: 'University of Strathclyde Eco-Vehicle',
    link: 'https://www.usev.co.uk/',
    badges: ['Extra-curriculum'],
    jobs: [
      {
        title: 'Battery head',
        start: 'Sept 2022',
        end: 'Aug 2023',
        description: [
          'Lead a team of engineers to develop a battery suitable for the Shell Eco Marathon (SEM)',
          'Sourced a suitable BMS system, compatible with regulations, for the team to use and helped with the theory of creating an in house active BMS system',
          'Worked across multiple subteams to create a final vehicle'
        ]
      }
    ]
  },
  {
    company: 'Cancer Research Wales',
    link: 'https://www.cancerresearch.wales/',
    badges: ['Volunteering'],
    jobs: [
      {
        title: 'Retail assistant',
        start: 'June 2021',
        end: 'April 2022',
        description: [
          'Reached Gift Aid quotas set by the store to boost income',
          'Handled and stored card transaction receipts for the shop ',
          'Often contributed in ways to make the store more aesthetically pleasing to increase sales'
        ]
      }
    ]
  },

  {
    company: 'Pre-university grades',
    badges: ['Education'],
    jobs: [
      {
        title: 'A-level & GCSE',
        start: 'Sept 2015',
        end: 'Aug 2022',
        description: [
          'A levels: A*A*A: Computer Science, Mathematics, Physics',
          'GCSEs: 12 A* to B including English and Mathematics',
        ]
      }
    ]
  },
]

const TAGS = {
  C: {
    name: 'C',
    icon: CIcon
  },
  AUTODESK: {
    name: 'Autodesk Invetor',
    icon: AutodeskIcon
  },
    BLUETOOTH: {
    name: 'Bluetooth',
    icon: BluetoothIcon
  },
  ESPRESSIF: {
    name: 'Espressif',
    icon: EspressifIcon
  },
  JUPYTER: {
    name: 'Jupyter',
    icon: JupyterIcon
  },
  KICAD: {
    name: 'KiCad',
    icon: KicadIcon
  },
  PYTHON: {
    name: 'Python',
    icon: PythonIcon
  },
  NUMPY: {
    name: 'NumPy',
    icon: NumpyIcon
  },
  SPI: {
    name: 'SPI',
    icon: SpiIcon
  },
  CCS: { 
    name: 'Code Composer Studio',
    icon: TexasInstrumentsIcon
  },
  TENSORFLOW: {
    name: 'TensorFlow',
    icon: TensorFlowIcon
  },
  I2C: {
    name: 'I2C',
    icon: i2cIcon
  },
}

export const PROJECTS = [
  {
    title: 'Machine Learning certificates',
    tags: [
      TAGS.TENSORFLOW,
      TAGS.NUMPY,
      TAGS.PYTHON,
      TAGS.JUPYTER
    ],
    description:
      'Completed various courses for certificates in Machine Learning',
    link: {
      preview: '/assets/Coursera_cert.pdf'
    },
  },
  {
    title: 'Remote display control via Wi-Fi ',
    tags: [
      TAGS.C,
      TAGS.ESPRESSIF,
      TAGS.CCS,
      TAGS.BLUETOOTH,
    ],
    description: 'Utilising the display driver for the MSP430, an ESP32 is used to host a Wi-Fi webserver which hosts a GUI allowing for the user. The data is sent via UART onto the MSP430 to update the screen accordingly.',
    link: {
      github: 'https://github.com/Sparrowehawk/MSP430-MPU6050-I2C-driver',
    },
  },
  {
    title: 'Design and create a display driver for GMT020-02 with MSP430',
    tags: [
      TAGS.C,
      TAGS.CCS
    ],
    description:
      'Used SPI to create a driver for the MSP430G2553 to communicate with a GMT020-02 display via the ST7789 controller chip. Display is now able to display text and change colours.',
    link: {
      github: 'https://github.com/Sparrowehawk/ST778_MSP430_driver'
    },
  },
  {
    title: 'Custom I2C MPU6050 driver for MSP430',
    tags: [
      TAGS.C,
      TAGS.CCS,
      TAGS.I2C
    ],
    description:
      'Created a custom I2C driver for the MSP430G2553 to initialise and communicate with the MPU6050 IMU to receive the data from specific registers.',
    link: {
      github: 'https://github.com/Sparrowehawk/MSP430-MPU6050-I2C-driver'
    },
  },
  {
    title: 'Design and create a display driver for GMT020-02 with ESP32',
    tags: [
      TAGS.C,
      TAGS.SPI
    ],
    description:
      'Used SPI to create a driver for the MSP430G2553 to communicate with a GMT020-02 display via the ST7789 controller chip. Display is now able to display text and change colours.',
    link: {
      github: 'https://github.com/Sparrowehawk/STM32_ST7789'
    },
  },
  {
    title: 'Design and contribute to a coin-retrieval robot',
    tags: [
      TAGS.PYTHON,
      TAGS.AUTODESK
    ],
    description:
      'Manufactured a crane to allow for the retrieval of a coin as well as assist in system unit testing. Utilised reinforced learning to help the robot find and navigate to a tin can with a coin on top.',

      link:{
        github: 'https://github.com/CSharp141/CanSeekingRover'
      }
  },
  {
    title: 'Design and produce a keypad PCB',
    tags: [
      TAGS.KICAD,
    ],
    description:
      'Design and develop prototypes to understand how keyboards work. Specifically, the PCB design stage by manipulating a diode matrix with a RP2040 to get the desired result.',

      link:{
        github: 'https://github.com/Sparrowehawk/TKL-keyboard-PCB'
      }
  },
]
