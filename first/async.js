// async await practice ( pretend an API call )


async function someFunction(items) {
    items.forEach(async (i) => {
        const res = await someAPICall(i);
        console.log('--->', res);
    });
}

function someAPICall(param) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Ready ' + param);
        }, param);
    });
}

someFunction(['3000', '8000', '1000', '4000']);

// can't print out the object together with a string therefore us e of a comma,
// fat arrow functions