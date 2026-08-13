function countHashtags(caption) {
    if(typeof caption !== 'string'){
        return "Invalid"
    }
    let captionArray = caption.split(" ");
    
    let totalHashTag = captionArray.reduce((accumulator,value)=> {
        if(value.startsWith("#")){
            return accumulator + 1;
        }
        return accumulator;
    },0);

    let longestTag = captionArray.filter((value) => value.startsWith("#"))
    .map((value)=> value.slice(1,))
    .reduce((accumulator,value)=>{
        if(value.length > accumulator.length){
            accumulator = value;
        }
        return accumulator;
    },"")

    return {hashtagCount: totalHashTag, longestTag: longestTag}
}

console.log(countHashtags(['cbsdj']))