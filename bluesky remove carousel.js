// ==UserScript==
// @name        bluesky remove carousel
// @namespace   Violentmonkey Scripts
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB9ElEQVQ4T6VSTW+MURg9574zkzRaNR9iQtRCi10RkRISUZbd+BO1GB+ZCmlEfM0UpRZI2l9hwVa60VBBZBYWjSYsCDLa0Iam5n3vcd8302a+Mht3dXPO85zz3HMf4j8PMwUdCIhrxuBlxuDB3CUut9PcfUdd34VzDDBgDa4yNRZMSRyOmshPMeJUeZTvWol0j2u/qeAxoB0hb6AppovBpAVPrzWQXGYCgwsX+LpWJFvQwb8GzyR1rePUJJPFoOCsL9c78kfQgUNLec6H+OZx9fkVvHDOmdo6D7rJdEE5Sz1sGlks9W/DQIiXvmAWVH9jjQFzYYhDAfWk1Zsp3bOeS8ZypBXvkUPcclcbKquYF5VtKiIrEOhGjzVyBL/GE+hzJLDxvnpjK3gk4jikeNvVcKIUpv0O5MKMIoFqUEd9H3nneMw5bmotwkUj+9SXuf7rCj9GP19t3uua3zh3r66Rzis8blEa8DI70bt4lksRkbytIwj0vOmd5CtZJNwP7GvkYnHuKl/kh0jALQfTY5gRdLi20IhnAg9JWt2oww2nF0Y5uP6E8LJ1QttXVjHj1Hoigvwcj2NPwqL7t485J94Z4YbvPQ8nnPu3OoFqFllbsbdgTE+QQP7nCEshnirqpAv3vNuJ2Z0pTLwd5p+1ierDaR19W/QfgI682klpHeoAAAAASUVORK5CYII=
// @version     1.0.0
//
// @include     https://bsky.app/*
// @grant       none
//
// @author      - KATC14
// @require     https://raw.githubusercontent.com/soufianesakhi/node-creation-observer-js/master/release/node-creation-observer-latest.js
// @description
// ==/UserScript==

(function() {
  NodeCreationObserver.init("observed-remove-carousel-bsky")
  var Nodes = []
  var num = -1
  var last = ''
  NodeCreationObserver.onCreation('img', function(Node) {
    var top = Node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    if (top.getAttribute('aria-roledescription') == 'carousel'){
      var temp = top.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
      if (temp != last){
        num += 1
        Nodes.push(top)
        for (var i = 0, max = Nodes.length; i < max; i++) {
          console.log(Nodes[i])
          Nodes[i].setAttribute('style', 'height:unset;')
          Nodes[i].parentNode.setAttribute('style', 'height:unset;')
          Nodes[i].childNodes[0].setAttribute('style', 'height:unset; padding-right:unset; flex-direction:column !important;')
          //var clone = Nodes[i].cloneNode(true)
          //Nodes[i].parentNode.appendChild(clone)
          //Nodes[i].remove()
        }
      }
      last = temp
    }
  })
})()
