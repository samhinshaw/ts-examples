export class SuperService {
  constructor(private privateValue: string) {}

  public getValue(): string {
    return this.privateValue;
  }
}
const superService = new SuperService('apple pie')
console.log(superService.privateValue)

export class VerboseService {
  private privateValue: string
  constructor(privateValue: string) {
    this.privateValue = privateValue;
  }
  
  public getValue(): string {
    return this.privateValue;
  }
}
const verboseService = new VerboseService('apple pie')
console.log(verboseService.privateValue)

// this also works for public fields

export class SuperServiceTwo {
  constructor(public publicValue: string) {}

  public getValue(): string {
    return this.publicValue;
  }
}

const superServiceTwo = new SuperServiceTwo('apple pie')
console.log(superServiceTwo.publicValue)

export class VerboseServiceTwo {
  public publicValue: string
  constructor(publicValue: string) {
    this.publicValue = publicValue;
  }
  
  public getValue(): string {
    return this.publicValue;
  }
}

const verboseServiceTwo = new VerboseServiceTwo('apple pie')
console.log(verboseServiceTwo.publicValue)