export function formatBirthday(date?: string | null | undefined): string {
    if (!date) {
      return ""
    }
    
    const parsedDate = new Date(Date.parse(date))    
    const result =  `${parsedDate.getFullYear()}-${parsedDate.getMonth() + 1 < 10 ? `0${parsedDate.getMonth() + 1}` : parsedDate.getMonth()}-${parsedDate.getDate() < 10 ? `0${parsedDate.getDate()}` : parsedDate.getDate()}`
        
    return result
}
