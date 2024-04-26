export const formatDate = (dateString) => {
    if(!dateString || dateString.length !== 8){
        return "Invalid date";
    }
    else{
        return `${dateString.slice(0,2)}/${dateString.slice(2,4)}/${dateString.slice(4)}`
    }
}