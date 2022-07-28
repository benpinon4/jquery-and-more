let div = $("<div></div>")

$('body').append(div)

$('div').append('hello world')

$('div').append(addEventListener('click', function(){
    alert("hello world")
}))

