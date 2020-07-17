import {createPlan} from "./plan.js"
import {usePlants, addPlant} from "./field.js"
import {plantSeeds} from "./tractor.js"

const yearlyPlan = createPlan()
const asparagusSeed = createAsparagus()

addPlant(asparagusSeed)

//after finishing tractor.js(sowing)
plantSeeds(yearlyPlan)

const plantsInField = usePlants()

// console.log(yearlyPlan)




