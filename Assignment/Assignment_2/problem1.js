function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
        return "Invalid";
    }
    if(teamAGoals > teamBGoals){
        return "Team A Won";
    }else if(teamBGoals > teamAGoals){
        return "Team B Won";
    }else{
        return "Draw";
    }
}

console.log(matchWinner({h:"h"},[1,2]))
