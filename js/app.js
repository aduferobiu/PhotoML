function update() {
    alert('You can only screen shot your edited image for now. Thank for using our app')
}
//selecting all the input
const inputs = document.querySelectorAll('.form-input')

//function handling event
function handleEvent(e) {
    const unit = e.target.dataset.unit || "";

    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + unit)

    // for the contrast
    const contrastShow = document.querySelector('.contrast')
    const contrast = document.getElementById('contrast')
    contrastShow.value = contrast.value


    // spacing input
    const spacingShow = document.querySelector('.spacing')
    const spacing = document.getElementById('spacing')
    spacingShow.value = spacing.value


    // blur input
    const blurShow = document.querySelector('.blur')
    const blur = document.getElementById('blur')
    blurShow.value = blur.value


    // brightness input
    const brightnessShow = document.querySelector('.brightness')
    const brightness = document.getElementById('brightness')
    brightnessShow.value = brightness.value


    // sepia input
    const sepiaShow = document.querySelector('.sepia')
    const sepia = document.getElementById('sepia')
    sepiaShow.value = sepia.value


    // grayscale input
    const grayscaleShow = document.querySelector('.grayscale')
    const grayscale = document.getElementById('grayscale')
    grayscaleShow.value = grayscale.value


    // invert input
    const invertShow = document.querySelector('.invert')
    const invert = document.getElementById('invert')
    invertShow.value = invert.value


    invertShow.addEventListener('keypress', (e) => {
        console.log(e.target)
    })


    // hue-rotate input
    const hueRotateShow = document.querySelector('.hue-rotate')
    const hueRotate = document.getElementById('hue-rotate')
    hueRotateShow.value = hueRotate.value


    // saturate input
    const saturateShow = document.querySelector('.saturate')
    const saturate = document.getElementById('saturate')
    saturateShow.value = saturate.value


}

// const imageUpload = document.querySelector('.file').addEventListener('change', loadImg)

function loadImg(input) {
    const fileObject = input.files[0]
    console.log(fileObject)

    let reader = new FileReader()
    reader.readAsDataURL(fileObject)
    const img = document.querySelector('.img')
    reader.onload = function() {
        img.src = reader.result
    }
};


//JQUERy for the input field
// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function(e) {
//             $('.img')
//                 .attr('src', e.target.result);
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }

//handling the request
inputs.forEach(input => input.addEventListener('change', handleEvent))
    // inputs.forEach(input => input.addEventListener('mousemove', handleEvent))