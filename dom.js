window.$ = function (selectorOrNode) {
    let array = []
    if (typeof selectorOrNode === 'string') {
        let items = document.querySelectorAll(selectorOrNode)
        for (var i = 0; i < items.length; i++) {
            array.push(items[i])
        }
    } else if (selectorOrNode instanceof Element) {
        array.push(selectorOrNode)
    } else if (selectorOrNode instanceof Array) {
        for(var i=0;i<selectorOrNode.length;i++){
            array.push(selectorOrNode[i])
        }
    }


    array.on = function (eventType, fn) {
        for (var i = 0; i < array.length; i++) {
            array[i].addEventListener(eventType, fn)
        }
    }
    array.addClass = function (className) {
        for (var i = 0; i < array.length; i++) {
            array[i].classList.add(className)
        }
        return array
    }
    array.removeClass = function (className) {
        for (var i = 0; i < array.length; i++) {
            array[i].classList.remove(className)
        }
    }
    array.text = function (value) {
        if (value !== undefined) {
            for (var i = 0; i < array.length; i++) {
                array[i].textContent = value
            }
            return array
        } else {
            let result = []
            for (var i = 0; i < array.length; i++) {
                result.push(array[i].textContent)
            }
            return result
        }
    }
    array.get = function (index) {
        return array[index]
    }
    array.end = function() {
        return array.beforeSelection
    }
    array.siblings = function () {
        let children = array[0].parentNode.children
        let resultArray = []
        for (var i = 0; i < children.length; i++) {
            if (children[i] !== array[0]) {
                resultArray.push(children[i])
            }
        }
        let items = $(resultArray)
        items.beforeSelection = array
        return items
    }
    return array
} 
