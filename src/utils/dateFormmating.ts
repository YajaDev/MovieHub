
export function formatToYear(inputDate:string) {
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US",{year:"numeric"}) 
}