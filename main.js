/**
 * Created by Hp on 8/17/2017.
 */

    //DECALARTIONS
var nameTxt=document.getElementById("nameID");
var displaySection=document.getElementById("displaySectionID");
var listView=document.createElement('ol');
listView.setAttribute("id","myListID");
var listID=0;
var selectedID= -1;

var Crud= function () {
    var galaxies=['Pinwheel','Cartwheel',"Ring Nebular","Virgo Stellar Stream","Canis Majos Overdensity","Triangulum"];
    /*
     SHOW LISTVIEW
     */
    this.show=function(){
        displaySection.appendChild(this.createListVew());
        this.setSelectedItem();
    }
    /*
     CREATE LISTVIEW WITH INITIAL DATA
     */
    this.createListVew=function()
    {
        listView.className="collection";
        for(var i=0;i<galaxies.length;i++)
        {
            listID=listID+1;
            var listViewItem=document.createElement('li');
            listViewItem.className="collection-item";
            listViewItem.setAttribute("id",listID.toString());
            listViewItem.appendChild(document.createTextNode(galaxies[i]));
            listView.appendChild(listViewItem);
        }
        return listView;
    }
    /*
     ADD NEW ITEM TO LIST
     */
    this.addLisViewItem=function(galaxyName)
    {
        var listViewItem=document.createElement('li');
        listViewItem.className="collection-item";
        listID=listID+1;
        listViewItem.setAttribute("id",listID.toString());
        listViewItem.appendChild(document.createTextNode(galaxyName));
        nameTxt.value="";
        listView.appendChild(listViewItem);
    }
    /*
     SET SELECTED ITEM TO LIST
     */
    this.setSelectedItem=function(){
        listView.addEventListener("click",function(event){
            if('LI' != event.target.tagName){ return;}
            else {
                nameTxt.value=event.target.innerText;
                selectedID=event.target.id;
            }
        },false);
    }
    /*
     UPDATE SELECTED ITEM IN LIST
     */
    this.updateSelectedItem=function(newValue)
    {
        if(selectedID != -1)
        {
            var selectdNode=document.getElementById(selectedID.toString());
            selectdNode.innerText=newValue;
            selectedID=-1;
        }else {
            alert("Please Select Item to Update first");
        }
    }
    /*
    REMOVE SELECTED ITEM FROM LIST
     */
    this.removeSelectedItem=function()
    {
        if(selectedID != -1)
        {
            listView.removeChild(document.getElementById(selectedID.toString()))
            nameTxt.value="";
            selectedID=-1;
        }else {
            alert("Please Select Item to remove first");
        }
    }
}
var crud=new Crud();
//EXPOSE OUR FUNCTIONS GLOBALLY
function addItem(){
    crud.addLisViewItem(nameTxt.value);
}
function updateItem(){
    crud.updateSelectedItem(nameTxt.value);
}
function removeItem()
{
    crud.removeSelectedItem();
}
crud.show();


