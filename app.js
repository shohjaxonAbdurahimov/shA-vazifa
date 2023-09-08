const AddUserBtn = document.querySelector("#add-user-btn")
const form = document.querySelector("#form")
const ul = document.querySelector("#site-list")


AddUserBtn.addEventListener("click" , ()=> {
    form.classList.remove("hidden")
    AddUserBtn.classList.add("hidden")
})

document.addEventListener("keydown" , (e)=> {
    if(e.key == "Escape"){
        form.classList.add("hidden")
        AddUserBtn.classList.remove("hidden")
    }
})

const users = []


form.addEventListener("submit" , (e)=> {
    e.preventDefault()
    const imgUrlValue = form.image.value;
    const nameValue = form.fullname.value;
    const phoneNumberValue = form.phonenumber.value;
    const ageValue = form.age.value;
    const genderValue = form.gender.value;

    // console.log(imgUrlValue);
    // console.log(nameValue);
    // console.log(phoneNumberValue);
    // console.log(ageValue);
    // console.log(genderValue);
    
    users.push({
        img: imgUrlValue,
        fullName: nameValue,
        phone: phoneNumberValue,
        age: ageValue,
        gender: genderValue
    })

    updateUI(users);
    
})

function updateUI(users){
    const template = document.createDocumentFragment()
    ul.innerHTML = ""
    users.forEach(user => {
        const li = elementCreator("li" , "site-item");
        const itemImg = elementCreator("img" , "item-img")
        const itemName = elementCreator("h2" , "item-name")
        const itemNumber = elementCreator("h3" , "item-number")
        const itemAge = elementCreator("h3" , "item-age")
        const itemGender = elementCreator("h3" , "item-gender")

        itemImg.setAttribute("src" , user.img)
        itemImg.setAttribute("alt" , "Rasmni urlini hato qoydiz")
        itemName.textContent = user.fullName;
        itemNumber.textContent ="Tel: " + user.phone;
        itemAge.textContent = "Age: " + user.age;
        itemGender.textContent = "Gender: " + user.gender
        li.appendChild(itemImg)
        li.appendChild(itemName)
        li.appendChild(itemNumber)
        li.appendChild(itemAge)
        li.appendChild(itemGender)
        template.appendChild(li)
    });
    ul.appendChild(template)
} 


function elementCreator(elementName , elementClass){
    const element = document.createElement(elementName)
    element.classList.add(elementClass)
    return element
}