
// local storage get card
const getCardList = () => {
    const storedCardList = localStorage.getItem("favorite");
    if(storedCardList){
        const storedCard = JSON.parse(storedCardList);
        return storedCard;
    }
    else{
        return [];
    }
}

// save local storage card
const addCardToLs = (id) =>{
   const storedList = getCardList();
   if(storedList.includes(id)){
        alert("already exist")
   }else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("favorite", storedListStr)
   }
}


// remove local storage
const removeLs = (id) =>{
    const storedList = getCardList();
    const remaining = storedList.filter(coffee => coffee.id !== id);
    const remainingStr = JSON.stringify(remaining);
    localStorage.setItem("favorite", remainingStr)
}


export {addCardToLs,getCardList,removeLs};