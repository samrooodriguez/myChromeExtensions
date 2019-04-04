console.log("extension working...");


const domainSearch = () => {
    //scan the DOM for an '@' OR an '@' && '.'
    console.log("searching for a domain name...");

    let senderUrl = document.getElementsByClassName("go");

    console.log(senderUrl);

    if(senderUrl.contains("@" || "@" && ".")){
        console.log("grabbed the correct url containing an AT or and AT and a PERIOD");
    }
    // change this out with the found url
    let docUrl = "https://" + senderUrl;

    // let docUrl = "https://www.google.com";


    //launch the new tab with the found url inside
    window.open(docUrl, '_blank');


    //figure out what needs to be returned
    return "domain name object";
};

//call the function
domainSearch();

// This is an example of the span that is going to hold the senders address that we will need to dissect
// with a class of "go".

// <span class="go">
// <span aria-hidden="true">&lt;</span>
// david@geekdom.com
// <span aria-hidden="true">&gt;</span>
// </span>