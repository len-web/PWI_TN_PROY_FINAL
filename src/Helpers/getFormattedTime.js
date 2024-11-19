/**
 * Obtiene la fecha actual en formato 'min:horas dias/mes'
 */
export const getFormattedDateMMHHDDMM =() => {
    const fecha_actual = new Date()
    return `${fecha_actual.getHours()}:${fecha_actual.getMinutes()} 
    ${fecha_actual.getDate()}/${fecha_actual.getMonth() + 1}`}