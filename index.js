2// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching (drivers, name) {
 const driverList = drivers.filter (driver => driver.toLowerCase() === name.toLowerCase());
 return driverList
}

function fuzzyMatch(drivers, letters){
const driverList2 = drivers.filter(driver => driver.indexOf(letters) === 0);
return driverList2 
}

const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];




function matchName (drivers2, name){
    const driverList3 = drivers2.filter(driver => driver.name === name)
    return driverList3
};