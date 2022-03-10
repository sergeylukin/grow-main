import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Don't trust, in a good way",
      image: "/bus-factor.jpeg",
      aspect: 1.51,
      text: "Keep your knowledge spread amongs team"
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Know your breadcrumbs",
      image: "/breadcrumbs.jpeg",
      aspect: 1.5,
      text: "Keep your tails ON"
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Single Sourth of Truth",
      image: "/ph1.jpg",
      aspect: 1.5037,
      text: "A SINGLE SOURCE OF TRUTH FOR DEVOPS. Currently there are 2 servers on separate account which contain custom setup of outdated technology, then there is Gitlab with runners, then there is complicated setup in SwarmPit"
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Disk is FULL",
      image: "/keep-calm-the-server-is-down.png",
      aspect: 0.965,
      text: "Login - each incorrect password throws an error which is logged on main worker - it fills the disk - that's why disk was full and Catastrophe was unavoidable"
    },
    {
      offset: 5,
      factor: 2.0,
      header: "Secure your assets",
      image: "/security.jpeg",
      aspect: 0.965,
      text: "Volumes backups - public and not encrypted"
    },
    { offset: 7, factor: 1.05, header: "render.com", image: "/render.png", aspect: 1.77, text: "Education and enlightenment lead to better choices!" }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 1.5, offset: 0, pos: new Vector3(), scale: 6, factor: 5.2 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0.3, offset: 4.2, pos: new Vector3(), scale: 1.1, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }
  ],
  top: createRef()
}

export default state
