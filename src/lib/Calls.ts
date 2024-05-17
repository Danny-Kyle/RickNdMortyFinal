async function LocationCall() {
    const res = await fetch("https://rickandmortyapi.com/api/location")
    if(!res.ok){
        throw new Error("Could not find locations")
    }
    return await res.json()
}

async function EpisodeCall() {
    const res = await fetch("https://rickandmortyapi.com/api/episode")
    if(!res.ok){
        throw new Error("Could not find episodes")
    }
    return await res.json()
}

export {LocationCall, EpisodeCall}