
// let li = document.createElement('li')
// li.innerHTML = 'Four';

// let list = document.getElementById('list')
// list.appendChild(li)

// let li = createElement('li','', 'four')
// let list = document.getElementById('list')
// list.appendChild(li)


// let li2 = createElement('li', '', 'Five')
// list.appendChild(li2)



// let p = createElement('p', 'lead', 'I am a programmer mohaimin and I am learning web development . Still now I am a Front-end Developer, But in future I wanted to become e Full-Stack Developer. I have own plan and I create a Company near future. I will help you to make your dream on your project.');

// let p2 = createElement('p', 'lead', 'I am a programmer mohaimin and I am learning web development . Still now I am a Front-end Developer, But in future I wanted to become e Full-Stack Developer. I have own plan and I create a Company near future. I will help you to make your dream on your project.');


// let p3 = createElement('p', 'lead', 'I am a programmer mohaimin and I am learning web development . Still now I am a Front-end Developer, But in future I wanted to become e Full-Stack Developer. I have own plan and I create a Company near future. I will help you to make your dream on your project.');


// let p4 = createElement('p', 'lead', 'I am a programmer mohaimin and I am learning web development . Still now I am a Front-end Developer, But in future I wanted to become e Full-Stack Developer. I have own plan and I create a Company near future. I will help you to make your dream on your project.');

// let div = createElement('div')
// append(div,[p,p2,p3,p4])
// div.appendChild(p)
// div.appendChild(p2)


// let container = document.getElementById('cont')
// container.appendChild(div)


// let container = document.getElementById('cont')
// append(cont,[p,p2,p3,p4])

// list.insertAdjacentElement('beforebegin',div)
// list.style.background = '#f45'








//create append function
function append(parent, children) {
    children.forEach(child => parent.appendChild(child))
}
// custom create element function
function createElement(tagname, className ,innerHTML) {
    let tag = document.createElement(tagname)
    tag.className = className ||'';
    tag.innerHTML = innerHTML ||'';

    return tag
}


let list = document.getElementById('list')
let firstChild = list.firstElementChild

setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + `(modified)`
    firstChild.style.background = '#44f'

}, 3000)

setTimeout(() => {
    list.lastElementChild.remove()
}, 5000)