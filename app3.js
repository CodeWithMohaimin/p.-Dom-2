let li = document.createElement('li')
li.className = 'li_class'
li.innerHTML = 'Four'

let list = document.getElementById('list')
list.appendChild(li)


let p = createElement('p', 'paragraph', 'this i sa paragraph tag and is t is a very easy');

let p2 = createElement('p', 'paragraph', 'this i sa paragraph tag and is t is a very easy');

let p3 = createElement('p', 'paragraph', 'this i sa paragraph tag and is t is a very easy');

let div = document.getElementById('list')
list.append(p,p2,p3)

// custom function create a element
function createElement(tagname ,className, innerHTML) {
    let tag = document.createElement(tagname)
    tag.className = className
    tag.innerHTML = innerHTML

    return tag
}

// custom append child function

function append(parent, children) {
    children.forEach(child => parent.appendChild(child))
}