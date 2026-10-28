export function getMessageLikes(likes){
    if(likes ===0){
        return"Pas encore aime";
    }
    else if(likes >= 1 && likes <=4){
        return"Apprecie";
    }else {
        return"Coup de coeur";
    }
}
export function estRecent(annee){
    return annee >=2010;
}