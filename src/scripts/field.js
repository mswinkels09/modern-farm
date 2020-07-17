const allPlants = []
export const addPlant = (seedObj) => {

    if (Array.isArray(seedObj)){
        //come back to corn

    } else {
        allPlants.push(seedObj)
    }

    return allPlants
}

export const usePlants = () => {
    return allPlants.slice()
}