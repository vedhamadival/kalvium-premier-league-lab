//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  return [managerName, managerAge, currentTeam, trophiesWon]
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formationArray){
  if (formationArray.length == 0){
    return null
  }else{
    return {
      defender: formationArray[0],
      midfield: formationArray[1],
      forward: formationArray[2]
    }
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  return players.filter((player)=>{
    return player.debut == year
  })
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  return players.filter((player)=>{
    return player.position == position
  })
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  if (!awardName){
    return []
  }else{
    return players.filter((player)=>{
      return player.awards.some((award)=>{
        return award.name == awardName
      })
    })
  }
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  if (!awardName){
    return []
  }else{
    return players.filter((player)=>{
      const awardArray = player.awards.filter((award)=>{
        return award.name == awardName
      })
      return awardArray.length == noOfTimes
    })
  }
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  if (!awardName){
    return []
  }else{
    const playerArray = players.filter((player)=>{
      return player.awards.some((award)=>{
        return award.name == awardName
      })
    })
    return playerArray.filter((player)=>{
      return player.country == country
    })
  }
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  const x = players.filter((player)=>{
    return player.awards.length >= noOfAwards
  })
  const y = x.filter((player)=>{
    return player.team == team 
  })
  return y.filter((player)=>{
    return player.age < age
  })
}

//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  return players.sort((player1,player2)=>{
    return player2.age - player1.age
  })
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  const x = players.filter((player)=>{
    return player.team == team
  })
  return x.sort((player1,player2)=>{
    return player2.awards.length - player1.awards.length
  })
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  const x = players.filter((player)=>{
    return player.awards.some((award)=>{
      return award.name == awardName
    })
  })
  const y = x.filter((player)=>{
    return player.awards.length >= noOfTimes
  })
  const z = y.filter((player=>{
    return player.country == country
  }))

  return z.sort((player1,player2)=>{
    if (player1.name.toLowerCase() < player2.name.toLowerCase()){
      return -1
    }else if(player1.name.toLowerCase() > player2.name.toLowerCase()){
      return 1
    }else{
      return 0
    }
  })
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age){
  if (!age){
    return []
  }else{
    const x = players.filter((player)=>{
      return player.age >= age
    })
    if (x.length <= 0){
      return []
    }else{
      const y = x.sort((player1,player2)=>{
        let a = player1.name.toLowerCase()
        let b = player2.name.toLowerCase()
        if (a < b){return -1}
        if (a > b){return 1}
        return 0
      })
      return y.map((player)=>{
        const z = player
        z.awards.sort((a,b)=>{
          return b.year - a.year
        })
        return z
      })
    }
  }
}