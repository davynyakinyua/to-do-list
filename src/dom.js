



// change list name on the panel
export function dashboardList (name) {
    const listName = document.getElementById("list-name");
    listName.innerHTML = "";

    listName.textContent = name;
    listName.className = "list-title";

}

// function to add list on the left panel
export function addLeftPanel (name){
    // select the left panel on the DOM
    const leftPanel = document.getElementById("left-panel");
    // create a list item
    const addList = document.createElement("div");
    // add the name of the class on left panel
    addList.textContent = name;
    // add class for styling
    addList.className = "left-panel-items";

    // append addlist to left panel
    leftPanel.appendChild(addList);
}