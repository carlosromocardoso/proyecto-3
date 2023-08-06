import './Footer.css'
import { Button } from '../Button/Button'

export const Footer = () => 
    `
    <h2>Contact</h2>
    <div>
    ${Button("https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/gorjeo_x13asp.png", "Twitter")}
    ${Button("https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/github_qqcjiq.png", "GitHub")}
    ${Button("https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/instagram_efptou.png", "Instagram")}
    ${Button("https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/simbolo-de-la-aplicacion-de-facebook_zj7es4.png", "Facebook")}
    </div>
    `

