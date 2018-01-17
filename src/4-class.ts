/**
 * Example of a class using types
 */

class Animal {
  private sound: string
  
  constructor(type: string) {
    switch (type) {
      case 'dog':
        this.sound = 'woof'
        break
      case 'cat':
        this.sound = 'meow'
        break
      default:
        this.sound = 'chirp'
    }
  }
    
  public says(): string {
    return this.sound
  }
}

const dog = new Animal('dog')

console.log(dog.says())