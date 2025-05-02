import { mount } from 'svelte'
import './css/styles.css'
import IMS from "./home.svelte"

const pIMS = mount(IMS, {
  target: document.getElementById('pIMS')!,
})

export default pIMS
