async function loadData(apiLink){
    try {
        let response = await fetch(`${apiLink}`, {
            method: "get",
            headers: {"businessId": `${BUSINESS_ID}`}
        });
        let dataResponse = await response.json();
        console.log("Inside Load Data", dataResponse);
        if (Object.values(dataResponse).length){return dataResponse;};
    }catch(err) {console.log(err.message);};
};

const loadDataOfSomething = await loadData(`API_LINK_HERE`);