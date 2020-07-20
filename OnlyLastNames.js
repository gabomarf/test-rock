const rokket = (array) => {
    return`[${array.map( m => {
      if(m.lastName){
        return `'${m.lastName}'`; 
      }
        return;
      })}]`;
  }

const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' },
]

console.log(rokket(contacts));

// node OnlyLastNames.js