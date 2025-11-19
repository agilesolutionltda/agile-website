const carrosselServicos = document.querySelector('[data-carrossel-servicos]')

if (carrosselServicos) {

  function iniciarCarrossel() {
    const larguraOriginal = carrosselServicos.scrollWidth

    if (larguraOriginal === 0) {
      setTimeout(iniciarCarrossel, 100)
      return
    }

    carrosselServicos.innerHTML += carrosselServicos.innerHTML

    let limite = carrosselServicos.scrollWidth / 2
    let pos = 0
    let pausado = false
    const velocidade = 0.35

    function animar() {
      if (!pausado) {
        pos += velocidade
        if (pos >= limite) {
          pos = 0
        }
        carrosselServicos.scrollLeft = pos
      }
      requestAnimationFrame(animar)
    }

    carrosselServicos.addEventListener('mouseenter', () => pausado = true)
    carrosselServicos.addEventListener('mouseleave', () => pausado = false)

    window.addEventListener('resize', () => {
      limite = carrosselServicos.scrollWidth / 2
    })

    animar()
  }

  setTimeout(iniciarCarrossel, 150)
}
