class School {
    constructor(name,level,numberOfStudents){
      this._name = name; 
      this._level = level;
      this._numberOfStudents = numberOfStudents;
  
    }
  
    get name (){
      return this._name
    }
  
    get level (){
      return this._level
    }
  
    get numberOfStudents (){
      this._numberOfStudents
    }
  
    quickFacts (){
      console.log (`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
  
    static pickSubstituteTeacher (){
      const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']
      const randomNumber = Math.floor(Math.random()* (substituteTeachers.length - 1));
        return substituteTeachers[randomNumber]
    }
  
    set numberOfStudents (numberOfStudents){
        if (numberOfStudets === 'number'){
          this.numberOfStudents = numberOfStudents
        } else {
          console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
      }
  }
  
  class PrimarySchool extends School {
    constructor (name,numberOfStudents,pickupPolicy){
      super(name,'primary',numberOfStudents)
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickPolicy (){
      return this._pickupPolicy
    }
  }
  
  class HighSchool extends School {
    constructor (name,numberOfStudents,sportsTeams){
      super(name,'high', numberOfStudents)
      this._sportsTeams = sportsTeams
    }
  
    get sportsTeams(){
      console.log(this._sportsTeams)
    }
  }
  
  const lorraineHansbury = new PrimarySchool ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  
  lorraineHansbury.quickFacts()
  
  console.log(School.pickSubstituteTeacher())
  
  const alSmith = new HighSchool ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  
  alSmith.sportsTeams