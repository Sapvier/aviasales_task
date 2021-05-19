export const minutesConvert = (duration) => {
    const hours = (duration / 60);
    const rhours = Math.floor(duration / 60);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes) < 10 ? '0' + Math.round(minutes) : Math.round(minutes);
    return rhours + "ч " + rminutes + "м";
}