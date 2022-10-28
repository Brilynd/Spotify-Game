export const randomNum = (maxInt)=>{
    let range = {min: 0, max: maxInt-1}
    let delta = range.max - range.min
    
    const rand = Math.round(range.min + Math.random() * delta)
    return rand
}