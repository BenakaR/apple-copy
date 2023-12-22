let itemList = []

function submitItem(){
    addItem();
    updateTable();
}
function addItem(){
    var item = document.getElementById('item').value;
    itemList.push(item);

    document.getElementById('item').value = "";

    console.log(itemList);
}
function updateTable(){
    var table = document.getElementById("dataTableEntry");

    table.innerHTML = `<thead>
                        <th>Sl.No.</th>
                        <th>Item</th>
                        <th>Action</th>
                       </thead>`

    itemList.forEach((item,index) =>{
        var row = table.insertRow(-1);
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        var col3 = row.insertCell(2);

        col1.innerHTML = index+1;
        col2.innerHTML = item;
        col3.innerHTML = `<button onclick="deleteEntry(${index})">Delete</button>`;
    });

    document.getElementById("count").innerHTML = itemList.length;
}

function deleteEntry(index){
    itemList.splice(index,1);              //It is used to remove element [in index] from the arrey.
    updateTable();
}