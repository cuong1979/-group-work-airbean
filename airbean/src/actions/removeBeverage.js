// Lägger till dryck
export default function addBeverage(object) {
    return {
        type: "REMOVE_BEVERAGE", 
        payload: object
    }
}