var profile_data = [
{
    img: "images/profiles/s1.jpg",
    name: "Gunjeet",
    region: "Mumbai",
    category: "Tall",
    height: "162cm",
    weight: "80kg",
    BMI: "23"
},
{
    img: "images/profiles/s2.jpg",
    name: "Ankit",
    region: "Pune",
    category: "Super-Tall",
    height: "180cm",
    weight: "92kg",
    BMI: "22"
}
]; 

function create()
{
    
    if(document.getElementById("prep") == null){
        for(var i = 0; i < profile_data.length; i++)
        {    
            var div = document.createElement("div");
            div.setAttribute("id", "prep");
            var space = document.createElement('br');
            div.setAttribute("class", "w3-card card-prop w3-center");
            var img = document.createElement("img");
            img.setAttribute("class", "img-prop");
            img.setAttribute("src", profile_data[i].img);

            var name = document.createElement("p");
            var region = document.createElement("p");
            var category = document.createElement("p");
            var height = document.createElement("p");
            var weight = document.createElement("p");
            var BMI = document.createElement("p");

            name.setAttribute("class", "w3-center");
            region.setAttribute("class", "w3-center");
            category.setAttribute("class", "w3-center");
            height.setAttribute("class", "w3-center");
            weight.setAttribute("class", "w3-center");
            BMI.setAttribute("class", "w3-center");

            name.appendChild(document.createTextNode("Name: "+profile_data[i].name));
            region.appendChild(document.createTextNode("Region: "+profile_data[i].region));
            category.appendChild(document.createTextNode("Category: "+profile_data[i].category));
            height.appendChild(document.createTextNode("Height: "+profile_data[i].height));
            weight.appendChild(document.createTextNode("Weight: "+profile_data[i].weight));
            BMI.appendChild(document.createTextNode("BMI: "+profile_data[i].BMI));

            div.appendChild(img);
            div.appendChild(name);
            div.appendChild(region);
            div.appendChild(category);
            div.appendChild(height);
            div.appendChild(weight);
            div.appendChild(BMI);
            div.appendChild(space); 
            document.getElementById("main").appendChild(div);
        }
   }
}