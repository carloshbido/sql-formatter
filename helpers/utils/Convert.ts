class Convert {

  stringToArrayLetter(string: string) {
    return string.split("")
  }

  stringToArrayWord(string: string) {
    return string.split(" ")
  }

  arrayToStringWithoutSpace(array: string[]) {
    return array.join("")
  }

  arrayToStringWithSpace(array: string[]) {
    return array.join(" ")
  }

}

export default new Convert()