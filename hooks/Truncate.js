

function truncateHeadline(str) {
    return str.length > 10 ? str.substring(0, 7) + "..." : str;
}

function truncateSublie(str){
    return str.length > 100 ? str.substring(0,100) + "..." : str;
}

function truncateWalletAddress(str){
    return str.slice(0,4) + "...." + str.slice(-4,-1)
}

export {
    truncateHeadline,
    truncateSublie,
    truncateWalletAddress
}
