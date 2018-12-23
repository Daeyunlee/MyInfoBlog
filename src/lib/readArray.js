export default (list, num=10) => {
    let array = [];
    const lastPage = Math.ceil(list.length/num);
    for (let i = 0 ; i < lastPage; i++) {
        array.push(list.slice(i*num, (i+1)*num));
    }
    console.log(lastPage);
    return {lastPage,array};
}

 