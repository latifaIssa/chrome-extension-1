 console.log("My extinsion");

 alert("loaded");

 //  var dom = document.getElementById("rcnt");
 var links = document.getElementsByTagName("a");
 var formatted_links = [];

 for (let i; i < links.length; i++) {
     // let title = links[i].getElementsByTagName("h3");
     let title = links[i].text;
     let href = links[i].href;
     if (title !== "" && href !== "") {
         formatted_links.push({ "title": title, "href": href });
     }
 }

 //  chrome.runtime.sendMessage({
 //      "action": "print_message",
 //      "data": formatted_links
 //  }, function(res) {
 //      console.log(res);
 //  });

 //using arrow function
 chrome.runtime.sendMessage({
     "action": "print_message",
     "data": formatted_links
 }, res => {
     console.log(res);
 });




 // console.log("the dom is: ", dom.innerHTML);