export class SecretSerena {
  public firstName = "Serena"
  private _middleName = "Jameka"
  #lastName = "Williams"
}

const serena = new SecretSerena()
console.log(serena.firstName)
console.log(serena._middleName) // ts error, can ignore at compile time and still use at runtime!
console.log(serena.#lastName) // ts error, cannot ignore, cannot access at runtime

