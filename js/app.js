//works with the download button
function update() {
    alert('You can only screen shot your edited image for now. Thank for using our app')

    //USING the html2canvas library
    // html2canvas(document.querySelector("#fish"), {
    //     width: 400,
    //     height: outerHeight,
    //     backgroundColor: null,
    //     scale: 1
    // }).then(canvas => {
    //     document.querySelector('.image-download').appendChild(canvas)
    // });
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



    // hue-rotate input
    const hueRotateShow = document.querySelector('.hue-rotate')
    const hueRotate = document.getElementById('hue-rotate')
    hueRotateShow.value = hueRotate.value


    // saturate input
    const saturateShow = document.querySelector('.saturate')
    const saturate = document.getElementById('saturate')
    saturateShow.value = saturate.value


}

function loadImg(input) {
    const fileObject = input.files[0]
    console.log(fileObject)

    let reader = new FileReader()
    reader.readAsDataURL(fileObject)
    const img = document.querySelector('.img')


    reader.onload = function() {

        img.src = reader.result

        resetProp('spacing')
        resetProp('blur')
        resetProp('brightness')
        resetProp('saturate')
        resetProp('contrast')
        resetProp('sepia')
        resetProp('grayscale')
        resetProp('invert')
        resetProp('hue-rotate')
        resetProp('saturate')
    }
};

function resetProp(variable) {
    const elementObj = document.documentElement.style.cssText
    if (elementObj.includes(`${variable}`)) {
        document.documentElement.style.removeProperty(`--${variable}`)
        resetSlider(variable)
    } else {}
}

function resetSlider(prop) {
    document.querySelector(`.${prop}`).value = 0
    document.getElementById(`${prop}`).value = 0
}
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

//click for the contact
document.getElementById('contact-toggle').addEventListener('click', (e) => {
    const contact = document.getElementById('contact')
    contact.style.display = 'block'
})

document.getElementById('remove-icon').addEventListener('click', (e) => {
    const contact = document.getElementById('contact')
    contact.style.display = 'none'
})


//click for the about 
document.getElementById('about-toggle').addEventListener('click', (e) => {
    const about = document.getElementById('about')
    about.style.display = 'block'
})

document.querySelector('.remove-about').addEventListener('click', (e) => {
    const about = document.getElementById('about')
    about.style.display = 'none'
})

//click for the why 
document.getElementById('why-toggle').addEventListener('click', (e) => {
    const why = document.getElementById('why')
    why.style.display = 'block'
    why.style.transition = 'all 0.8s 0.2s;'
})

document.querySelector('.remove-why').addEventListener('click', (e) => {
    const why = document.getElementById('why')
    why.style.display = 'none'
})

//for setting of the Theme
// document.addEventListener('DOMContentLoaded', () => {


const themeStyle = document.getElementById('theme')

const themeToggle = document.getElementById('theme-switcher')

themeToggle.addEventListener('click', (e) => {
        e.preventDefault()

        if (themeStyle.href.includes('style')) {
            themeStyle.setAttribute('href', './css/dark.css')

        } else {
            themeStyle.setAttribute('href', './css/style.css')
        }

        localStorage.setItem('theme', themeStyle.href)
    })
    // })

document.addEventListener('DOMContentLoaded', () => {
    const getTheme = localStorage.getItem('theme')
    if (getTheme) {
        themeStyle.href = `${getTheme}`
    }
})