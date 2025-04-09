let $gallery = document.getElementById('gallery')
let $imgViewer = document.getElementById('imgViewer')

$gallery.addEventListener('click', (event) => {
    if (event.target.tagName == "IMG") {
        $imgViewer.classList.remove('hidden')

        let file = event.target.dataset.full_image
        let desc = event.target.getAttribute('alt');
        $imgViewer.innerHTML = "<img src='images/" + file + "' class='fill-full shadow' style='max-width: 80%; max-height: 80%;'> <div class='pad-ht text-text row flex-center text-center' style='color: white;'>" + desc + "</div>"
    }
})
 
$imgViewer.addEventListener('click', (event) => {
    $imgViewer.classList.add('hidden')
})