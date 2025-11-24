// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item")
  const sections = document.querySelectorAll(".content-section")
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const sidebar = document.getElementById("sidebar")

  // Handle navigation clicks
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section")

      // Remove active class from all nav items and sections
      navItems.forEach((nav) => nav.classList.remove("active"))
      sections.forEach((section) => section.classList.remove("active"))

      // Add active class to clicked nav item and corresponding section
      this.classList.add("active")
      document.getElementById(sectionId).classList.add("active")

      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("active")
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })

      // Reset and re-trigger animations
      resetAnimations()
      setTimeout(checkScrollAnimations, 100)
    })
  })

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        sidebar.classList.remove("active")
      }
    }
  })

  // Scroll animations
  const animatedElements = document.querySelectorAll(".animate-on-scroll")

  function checkScrollAnimations() {
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0

      if (isVisible) {
        element.classList.add("visible")
      }
    })
  }

  function resetAnimations() {
    animatedElements.forEach((element) => {
      element.classList.remove("visible")
    })
  }

  // Check animations on scroll
  window.addEventListener("scroll", checkScrollAnimations)

  // Initial check for animations
  checkScrollAnimations()

  // Frequency table calculation
  const frequencyInputs = document.querySelectorAll(".frequency-input")
  const addRowBtn = document.getElementById("addRowBtn")
  const frequencyTableBody = document.getElementById("frequencyTableBody")

  function calculateFrequencies() {
    const inputs = document.querySelectorAll(".frequency-input")
    let total = 0

    // Calculate total
    inputs.forEach((input) => {
      const value = Number.parseFloat(input.value) || 0
      total += value
    })

    // Update display
    document.getElementById("totalFrequency").textContent = total
    document.getElementById("totalFrequencyDisplay").textContent = total

    // Calculate and display frequencies
    inputs.forEach((input) => {
      const row = input.closest("tr")
      const value = Number.parseFloat(input.value) || 0
      const frequencyCell = row.querySelector(".frequency-value")
      const relativeCell = row.querySelector(".frequency-relative")

      frequencyCell.textContent = value > 0 ? value : "-"

      if (total > 0 && value > 0) {
        const percentage = ((value / total) * 100).toFixed(2)
        relativeCell.textContent = percentage + "%"
      } else {
        relativeCell.textContent = "-"
      }
    })
  }

  // Add event listeners to existing inputs
  frequencyInputs.forEach((input) => {
    input.addEventListener("input", calculateFrequencies)
  })

  // Add row functionality
  addRowBtn.addEventListener("click", () => {
    const newRow = document.createElement("tr")
    newRow.innerHTML = `
      <td><input type="text" class="table-input" placeholder="Ex: 6-8"></td>
      <td><input type="number" class="table-input frequency-input" placeholder="Ex: 10"></td>
      <td class="frequency-value">-</td>
      <td class="frequency-relative">-</td>
    `

    frequencyTableBody.appendChild(newRow)

    // Add event listener to the new input
    const newInput = newRow.querySelector(".frequency-input")
    newInput.addEventListener("input", calculateFrequencies)
  })

  // Handle window resize
  let resizeTimer
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768) {
        sidebar.classList.remove("active")
      }
    }, 250)
  })

  // Bar Chart Interactive
  const barInputs = {
    A: document.getElementById("barA"),
    B: document.getElementById("barB"),
    C: document.getElementById("barC"),
    D: document.getElementById("barD"),
  }

  function updateBarChart() {
    const maxValue = 200
    Object.keys(barInputs).forEach((key) => {
      const value = Number.parseFloat(barInputs[key].value) || 0
      const height = (value / maxValue) * 180
      const y = 200 - height
      const rect = document.getElementById(`barRect${key}`)
      rect.setAttribute("height", height)
      rect.setAttribute("y", y)
    })
  }

  Object.values(barInputs).forEach((input) => {
    input.addEventListener("input", updateBarChart)
  })

  // Line Chart Interactive
  const lineInputs = [
    document.getElementById("line1"),
    document.getElementById("line2"),
    document.getElementById("line3"),
    document.getElementById("line4"),
    document.getElementById("line5"),
    document.getElementById("line6"),
  ]

  function updateLineChart() {
    const xPositions = [60, 120, 180, 240, 300, 340]
    const maxValue = 200
    const minValue = 50

    const points = lineInputs
      .map((input, index) => {
        const value = Number.parseFloat(input.value) || minValue
        const normalizedValue = ((maxValue - value) / (maxValue - minValue)) * 150 + 50
        return `${xPositions[index]},${normalizedValue}`
      })
      .join(" ")

    document.getElementById("linePath").setAttribute("points", points)

    lineInputs.forEach((input, index) => {
      const value = Number.parseFloat(input.value) || minValue
      const normalizedValue = ((maxValue - value) / (maxValue - minValue)) * 150 + 50
      const point = document.getElementById(`linePoint${index + 1}`)
      point.setAttribute("cy", normalizedValue)
    })
  }

  lineInputs.forEach((input) => {
    input.addEventListener("input", updateLineChart)
  })

  // Pie Chart Interactive
  const pieInputs = [
    document.getElementById("pie1"),
    document.getElementById("pie2"),
    document.getElementById("pie3"),
    document.getElementById("pie4"),
  ]

  function updatePieChart() {
    const values = pieInputs.map((input) => Number.parseFloat(input.value) || 0)
    const total = values.reduce((sum, val) => sum + val, 0)

    if (total === 0) return

    const percentages = values.map((val) => (val / total) * 100)
    const colors = ["#8b5cf6", "#a78bfa", "#c4b5fd", "#ddd6fe"]

    const pieGroup = document.getElementById("pieGroup")
    pieGroup.innerHTML = ""

    let currentAngle = -90 // Start at top

    percentages.forEach((percentage, index) => {
      const angle = (percentage / 100) * 360
      const startAngle = currentAngle
      const endAngle = currentAngle + angle

      const startRad = (startAngle * Math.PI) / 180
      const endRad = (endAngle * Math.PI) / 180

      const x1 = 100 * Math.cos(startRad)
      const y1 = 100 * Math.sin(startRad)
      const x2 = 100 * Math.cos(endRad)
      const y2 = 100 * Math.sin(endRad)

      const largeArc = angle > 180 ? 1 : 0

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
      path.setAttribute("d", `M 0,0 L ${x1},${y1} A 100,100 0 ${largeArc},1 ${x2},${y2} Z`)
      path.setAttribute("fill", colors[index])
      path.setAttribute("class", "pie-slice")

      // Add percentage text
      const midAngle = startAngle + angle / 2
      const midRad = (midAngle * Math.PI) / 180
      const textX = 60 * Math.cos(midRad)
      const textY = 60 * Math.sin(midRad)

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text")
      text.setAttribute("x", textX)
      text.setAttribute("y", textY)
      text.setAttribute("text-anchor", "middle")
      text.setAttribute("dominant-baseline", "middle")
      text.setAttribute("font-size", "14")
      text.setAttribute("font-weight", "bold")
      text.setAttribute("fill", index < 2 ? "white" : "#333")
      text.textContent = percentage.toFixed(1) + "%"

      pieGroup.appendChild(path)
      pieGroup.appendChild(text)

      currentAngle = endAngle
    })
  }

  pieInputs.forEach((input) => {
    input.addEventListener("input", updatePieChart)
  })

  // Initial pie chart render
  updatePieChart()

  // Column Chart Interactive
  const colInputs = [
    document.getElementById("col1"),
    document.getElementById("col2"),
    document.getElementById("col3"),
    document.getElementById("col4"),
    document.getElementById("col5"),
    document.getElementById("col6"),
  ]

  function updateColumnChart() {
    const maxValue = 200
    colInputs.forEach((input, index) => {
      const value = Number.parseFloat(input.value) || 0
      const height = (value / maxValue) * 180
      const y = 200 - height
      const rect = document.getElementById(`colRect${index + 1}`)
      rect.setAttribute("height", height)
      rect.setAttribute("y", y)
    })
  }

  colInputs.forEach((input) => {
    input.addEventListener("input", updateColumnChart)
  })

  // Function to save charts as image PNG
  window.saveChartAsImage = (svgId, filename) => {
    const svgElement = document.getElementById(svgId)

    if (!svgElement) {
      console.error("Gráfico não encontrado")
      return
    }

    // Clone the SVG to not affect the original
    const clonedSvg = svgElement.cloneNode(true)

    // Get SVG dimensions
    const viewBox = svgElement.getAttribute("viewBox").split(" ")
    const width = Number.parseFloat(viewBox[2])
    const height = Number.parseFloat(viewBox[3])

    // Create a canvas
    const canvas = document.createElement("canvas")
    const scale = 2 // For better quality
    canvas.width = width * scale
    canvas.height = height * scale
    const ctx = canvas.getContext("2d")

    // White background
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Convert SVG to string
    const svgString = new XMLSerializer().serializeToString(clonedSvg)
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(svgBlob)

    // Create image from SVG
    const img = new Image()
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // Convert canvas to PNG and download
      canvas.toBlob((blob) => {
        const link = document.createElement("a")
        link.download = filename
        link.href = URL.createObjectURL(blob)
        link.click()

        // Clean URLs
        URL.revokeObjectURL(url)
        URL.revokeObjectURL(link.href)
      }, "image/png")
    }

    img.src = url
  }
})
