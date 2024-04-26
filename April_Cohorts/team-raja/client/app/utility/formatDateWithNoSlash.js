export const formatDateWithNoSlash = (dateString) => {
    const formattedDate = dateString.split("/")
    let [month, day, year] = formattedDate;
    month = month.padStart(2, 0);
    day = day.padStart(2, 0);
    return month + day + year;
}