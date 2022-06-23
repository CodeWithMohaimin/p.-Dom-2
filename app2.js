
let p1 = createElement('p','lead', 'I am a programmer mohaimin and I am learning web development . Still now I am a Front-end Developer, But in future I wanted to become e Full-Stack Developer. I have own plan and I create a Company near future. I will help you to make your dream on your project.')

let p2 = createElement('p','lead', 'I am a programmer mohaimin and I am learning web development . Still now I am a Front-end Developer, But in future I wanted to become e Full-Stack Developer. I have own plan and I create a Company near future. I will help you to make your dream on your project.')

let div = createElement('div')
appendFunction(div, [p1,p2])

let container = document.getElementById('cont')
container.appendChild(div)


// custom create a tag
function createElement(tagname, className, innerHTML) {
    let tag = document.createElement(tagname)
    tag.className = className ||''
    tag.innerHTML = innerHTML ||''

    return tag
}

// Custom append 
function appendFunction(parentName, children) {
    children.forEach(child => parentName.appendChild(child))
    
}