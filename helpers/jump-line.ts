import Convert from "./utils/Convert"

function jump(array: string): string {

  const arrayUnitLetter: string[] = [];
  const arrayUnitWord: string[] = [];

  const arraySplittedLetter = Convert.stringToArrayLetter(array);

  arraySplittedLetter.forEach((letter: string): void => {
    if(letter === ",") {
      arrayUnitLetter.push(",")
      arrayUnitLetter.push("\n")
      arrayUnitLetter.push("\t")
      return
    }
    arrayUnitLetter.push(letter)
  })
  
  const stringQuery = Convert.arrayToStringWithoutSpace(arrayUnitLetter)
  const arraySplittedWord = Convert.stringToArrayWord(stringQuery);

  arraySplittedWord.forEach((word) => {
    if(word.toLowerCase() === "select") {
      arrayUnitWord.push("SELECT")
      arrayUnitWord.push("\n")
      arrayUnitWord.push(" ", "")
      return
    }

    if(word.toLowerCase() === "from") {
      arrayUnitWord.push("\n")
      arrayUnitWord.push("FROM")
      return
    }
    
    if(word.toLowerCase() === "where") {
      arrayUnitWord.push("\n")
      arrayUnitWord.push("WHERE")
      arrayUnitWord.push("\n")
      arrayUnitWord.push("\t")
      return
    }

    if(word.toLowerCase() === "and") {
      arrayUnitWord.push("\n")
      arrayUnitWord.push("\t")
      arrayUnitWord.push("AND")
      return
    }

    if(word.toLowerCase() === "group") {
      arrayUnitWord.push("\n")
      arrayUnitWord.push("GROUP")
      return
    }

    if(word.toLowerCase() === "order") {
      arrayUnitWord.push("\n")
      arrayUnitWord.push("ORDER")
      return
    }

    if(word.toLowerCase() === "by") {
      arrayUnitWord.push("BY")
      arrayUnitWord.push("\n")
      arrayUnitWord.push(" ", "")
      return
    }

    arrayUnitWord.push(word)
  })
  
  const query = Convert.arrayToStringWithSpace(arrayUnitWord);
  return query

}

export default jump