var defangIPaddr = function(address) {
   
    let fanged = address.split(".").join("[.]")
    console.log(fanged.toString())
    
    // for (let i =0; i<fanged.length; i++){
    //     let seperator = "[.]"
    //     console.log(seperator)
    //     console.log(fanged[i])
    // }
    
};

defangIPaddr("1.1.1.1")