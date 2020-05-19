export class SuperService {
  constructor(private importantValue: string) {}

  public getImportantValue(): string {
    return this.importantValue;
  }
}

export class VerboseService {
  private importantValue: string
  constructor(importantValue: string) {
    this.importantValue = importantValue;
  }
  
  public getImportantValue(): string {
    return this.importantValue;
  }
}

// likewise with public values