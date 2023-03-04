function count(n) {
    if (n<1){
        return
    }
    count(n-1)
    console.log("count", n)
}

count(10)