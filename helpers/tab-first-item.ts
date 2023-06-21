import Convert from "./utils/Convert";

export const TabOnFirstItem = (array: string): string => {

  const arraySplitted = Convert.stringToArrayLetter(array);
  const arrayFixed: string[] = []

  arraySplitted.forEach((item: string): void => {
    if(item[0] === "\t") return
    arrayFixed.push(item) 
    }) 
  
  const query = Convert.arrayToStringWithoutSpace(arrayFixed);
  return query
}